import Registration from '../components/user/credentials/registration/registration';
import loginReducer from './reducers/login-reducer';
import registrationReducer from './reducers/registration-reducers';
import recoverPasswordReducer from './reducers/recover-password-reducer';
import newPasswordReducer from './reducers/new-password-reducers';
import profileReducer from './reducers/profile-reducer';
import { combineReducers, createStore } from 'redux';


const rootReducer = combineReducers({
    login: loginReducer,
    registration: registrationReducer,
    recoverPassword: recoverPasswordReducer,
    newPassword: newPasswordReducer,
    profile: profileReducer
})


export const store = createStore(rootReducer)