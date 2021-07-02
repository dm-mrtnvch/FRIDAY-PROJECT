import {Dispatch} from 'redux';
import {registrationAPI} from '../../api/RegistrationAPI';

const REGISTER_START = 'REGISTER_START'
const REGISTER_END = 'REGISTER_END'


type InitialStateType = {
    isLoading: boolean,
    response: null | any
}

const initialState: InitialStateType = {
    isLoading: false,
    response: null
}

const registrationReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case REGISTER_START: {
            return {
                ...state,
                isLoading: true,
                response: null
            }
        }
        case REGISTER_END: {
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


const registerStartAC = () => ({
    type: REGISTER_START
})


const registerEndAC = (response: any) => ({
    type: REGISTER_END,
    response
})


export const registerTC = (email: string, password: string) => (dispatch: Dispatch) => {
    dispatch(registerStartAC())
    registrationAPI.register(email, password)
        .then(response => {
            dispatch(registerEndAC(response))
        })

}

export default registrationReducer