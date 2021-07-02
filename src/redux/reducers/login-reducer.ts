import {Dispatch} from 'redux';
import {loginAPI} from '../../api/LoginAPI';

const START_SET_LOGIN = 'START_SET_LOGIN'
const END_SET_LOGIN = 'END_SET_LOGIN'


type InitialStateType = {
    isLoading: boolean
    response: null | any
}

const initialState: InitialStateType = {
    isLoading: false,
    response: null
}

const loginReducer = (state = initialState, action: any) => {
    switch (action.type){
        case START_SET_LOGIN: {
            return {
                ...state,
                isLoading: true,
                response: null
            }
        }
        case END_SET_LOGIN: {
            return {
                ...state,
                isLoading: false,
                response: action.response
            }
        }
        default:
            return state
    }
}


const startSetLoginAC = () => ({
    type: START_SET_LOGIN
})

const endSetLoginAC = (response: any) => ({
    type: START_SET_LOGIN,
    response
})

export const loginTC = (email: string, password: string) => (dispatch: Dispatch) => {
    dispatch(startSetLoginAC())
    loginAPI.login(email, password)
        .then(response => {
            dispatch(endSetLoginAC(response))
        })
}


export default loginReducer