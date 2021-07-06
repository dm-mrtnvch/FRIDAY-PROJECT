import {AppThunkType} from '../store';
import {passwordRecoveryAPI} from '../../api/api';




const initialStatePasswordRecovery = {
    error: '',
    loadingRequest: false,
    success: false,
}

const recoverPasswordReducer = (state: initialPasswordRecoveryType = initialStatePasswordRecovery, action: actionsPasswordRecoveryType): initialPasswordRecoveryType => {
    switch (action.type) {
        case 'PASSWORD-RECOVERY/SET-ERROR':
            return {...state, ...action.payload}
        case 'PASSWORD-RECOVERY/SET-LOADING':
            return {...state, ...action.payload}
        case 'PASSWORD-RECOVERY/SET-SUCCESS':
            return {...state, ...action.payload}
        default: return state
    }
}

//actionC
const setLoadingRequest = (loadingRequest: boolean) => ({
    type: 'PASSWORD-RECOVERY/SET-LOADING',
    payload: {loadingRequest}
} as const)
export const setSuccess = (success: boolean) => ({
    type: 'PASSWORD-RECOVERY/SET-SUCCESS',
    payload: {success}
} as const)
export const setServerErrorMessageRecovery = (error: string) => {
    return {
        type: 'PASSWORD-RECOVERY/SET-ERROR',
        payload: {error}
    } as const
}

//thunkC
export const passwordRecoveryThunk = (email: string): AppThunkType => async (dispatch) => {
    dispatch(setLoadingRequest(true))

    try {
        const response = await passwordRecoveryAPI.forgot(email)
        dispatch(setSuccess(true))
    } catch (e) {
        const error = e.response
            ? e.response.data.error
            : (e.message + ', more details in the console');
        dispatch(setServerErrorMessageRecovery(error))

        dispatch(setSuccess(false))
    } finally {
        dispatch(setLoadingRequest(false))
    }
}

//types
export type initialPasswordRecoveryType = typeof initialStatePasswordRecovery
export type actionsPasswordRecoveryType =
    | ReturnType<typeof setLoadingRequest>
    | ReturnType<typeof setSuccess>
    | ReturnType<typeof setServerErrorMessageRecovery>



// const initialStatePasswordRecovery = {
//     error: '',
//     loadingRequest: false,
//     success: false
// }
//
// const recoverPasswordReducer = (state: InitialStatePasswordRecovery = initialStatePasswordRecovery, action: actionsPasswordRecoveryType)  => {
//     switch (action.type) {
//         case 'PASSWORD-RECOVERY/SET-LOADING':
//             return {
//                 ...state,
//                 ...action.payload
//             }
//         // case 'PASSWORD_RECOVERY/SET_ERROR':
//         //     return {
//         //         ...state,
//         //         ...action.payload
//         //     }
//         case 'PASSWORD-RECOVERY/SET-SUCCESS':
//             return {
//                 ...state,
//                 ...action.payload
//             }
//         default:
//             return state
//     }
// }
//
//
// // ACTIONS
// const setLoadingRequest = (loadingRequest: boolean) => ({
//     type: 'PASSWORD-RECOVERY/SET-LOADING',
//     payload: {loadingRequest}
// } as const)
// export const setSuccess = (success: boolean) => ({
//     type: 'PASSWORD-RECOVERY/SET-SUCCESS',
//     payload: {success}
// } as const)
// export const setServerErrorMessageRecovery = (error: string) => {
//     return {
//         type: 'PASSWORD-RECOVERY/SET-ERROR',
//         payload: {error}
//     } as const
// }
//
//
// // THUNK
// export const passwordRecoveryThunk = (email: string): AppThunkType => async (dispatch) => {
//     dispatch(setLoadingRequest(true))
//
//     try {
//         const response = await PasswordRecoveryAPI.forgot(email)
//         dispatch(setSuccess(true))
//     } catch (e) {
//         const error = e.response
//             ? e.response.data.error
//             : (e.message + ', more details in the console');
//         dispatch(setServerErrorMessageRecovery(error))
//
//         dispatch(setSuccess(false))
//     } finally {
//         dispatch(setLoadingRequest(false))
//     }
// }
//
// type InitialStatePasswordRecovery = typeof initialStatePasswordRecovery
//
// export type actionsPasswordRecoveryType =
//     | ReturnType<typeof setLoadingRequest>
//     | ReturnType<typeof setSuccess>
//     | ReturnType<typeof setServerErrorMessageRecovery>



export default recoverPasswordReducer