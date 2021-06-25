import React from 'react';
import './App.module.css';
import {NavLink, Route} from 'react-router-dom';
import Profile from './components/user/profile/profile';
import Registration from './components/user/credentials/registration/registration';
import Login from './components/user/credentials/login/login';
import RecoverPassword from './components/user/credentials/password/pass-recover/recover-password';
import NewPassword from './components/user/credentials/password/pass-create-new/create-new-password';
import Button from './components/common/button/button';
import Input from './components/common/input/input';
import Checkbox from './components/common/check-box/checkbox';
import styles from './App.module.css'
import Routes from './components/common/routes/routes';
import Header from './components/header/header';

function App() {
    return (
        <div className={styles.wrapper}>



            <Header/>

            <Routes/>


        </div>
    );
}

export default App;


//
// <h2>APP COMPONENT</h2>
//
// <div className={styles.navlinks}>
//
//
//
//
// </div>
//
//
// <h3>here's common components:</h3>
// 1: <Button/>
// <div></div>
// 2: <Input/>
// <div></div>
// 3: <Checkbox/>
