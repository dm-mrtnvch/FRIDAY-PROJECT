import React from 'react'
import {Redirect, Route} from 'react-router-dom';
import Profile from '../../user/profile/profile';
import Login from '../../user/credentials/login/login';
import Registration from '../../user/credentials/registration/registration';
import RecoverPassword from '../../user/credentials/password/pass-recover/recover-password';
import NewPassword from '../../user/credentials/password/pass-create-new/create-new-password';
import {
    LOGIN_PATH,
    PROFILE_PATH,
    RECOVER_PASSWORD_PATH,
    REGISTER_PATH,
    SET_NEW_PASSWORD_PATH
} from '../../../constants/constants';

const Routes = () => {
    return (
        <>
            <Route exact path={'/'} render={() => <Redirect to={LOGIN_PATH}/>}/>

            <Route path={PROFILE_PATH} render={() => <Profile/>}/>
            <Route path={LOGIN_PATH} render={() => <Login/>}/>
            <Route path={REGISTER_PATH} render={() => <Registration/>}/>
            <Route path={RECOVER_PASSWORD_PATH} render={() => <RecoverPassword/>}/>
            <Route path={SET_NEW_PASSWORD_PATH} render={() => <NewPassword/>}/>
        </>

    )
}

export default Routes