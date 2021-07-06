import Registration from '../components/user/credentials/registration/registration';
import loginReducer, {actionsLoginType} from './reducers/login-reducer';
import registrationReducer from './reducers/registration-reducers';
import recoverPasswordReducer from './reducers/recover-password-reducer';
import newPasswordReducer from './reducers/new-password-reducers';
import profileReducer from './reducers/profile-reducer';
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';


const rootReducer = combineReducers({
    login: loginReducer,
    registration: registrationReducer,
    recoverPassword: recoverPasswordReducer,
    newPassword: newPasswordReducer,
    profile: profileReducer
})



export type AppStateType = ReturnType<typeof rootReducer>

type AppActionsType = actionsLoginType
    // | actionsSetNewPasswordType
    // | actionsPasswordRecoveryType
    // | actionsProfileType
    // | actionsRegistrationType

export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppActionsType>

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))


// export const store = createStore(rootReducer)