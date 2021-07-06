import React, {ChangeEvent, useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {NavLink, Redirect} from 'react-router-dom';
import CommonInput from '../../../common/input/input';
import s from './Login.module.css'
import CommonButton from '../../../common/button/button';
import {loginUserTC, setServerErrorMessageLogin} from '../../../../redux/reducers/login-reducer';
import {passwordValidation} from '../../../../assets/password-validation';
import {emailValidation} from '../../../../assets/emailValidation';
import {AppStateType} from '../../../../redux/store';


const Login = (props: any) => {

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [errorEmailMessage, setErrorEmailMessage] = useState<string>('')
    const [errorPasswordMessage, setErrorPasswordMessage] = useState<string>('')

    const dispatch = useDispatch()
    const loadingStatus = useSelector<AppStateType, boolean>(state => state.login.loadingRequest)
    const isLogIn = useSelector<AppStateType, boolean>(state => state.login.logIn)
    const serverErrorMessage = useSelector<AppStateType, string>(state => state.login.error)

    const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
        setErrorEmailMessage('')
        serverErrorMessage && dispatch(setServerErrorMessageLogin(''))
    }
    const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
        serverErrorMessage && dispatch(setServerErrorMessageLogin(''))
    }

    const checkLoginUser = () => {
        if (!emailValidation(email)) {
            setErrorEmailMessage('Incorrect email')
        } else if (!passwordValidation(password)) {
            setErrorPasswordMessage('Minimum 8 characters')
        } else {
            dispatch(loginUserTC(email, password))
        }
    }

    useEffect(() => {
        return () => {
            dispatch(setServerErrorMessageLogin(''))
        }
    }, [])

    if (isLogIn) {
        return <Redirect to={'/profile'}/>
    }

    const disabledBtnSubmit = !email || !password


    return (
        <div className={s.authPageContainer}>
            {/*<HeaderEnterApp title={'Sign In'}/>*/}

            <div className={s.emailPasswordLoginContainer}>
                <CommonInput
                    title={'Email'}
                    typeInput={'email'}
                    value={email}
                    changeValue={onEmailChange}
                    errorMessage={errorEmailMessage}

                />
                <CommonInput
                    title={'Password'}
                    typeInput={'password'}
                    value={password}
                    changeValue={onPasswordChange}
                    errorMessage={errorPasswordMessage}
                />

                <div className={s.forgotPasswordBtn}>
                    <NavLink to="/password-recovery">Forgot Password</NavLink>
                </div>
            </div>

            <div className={s.btnFooterLoginContainer}>
                <span className={s.errorMessageContainer}>{serverErrorMessage}</span>
                <div className={s.blueBtnContainer}>
                    <CommonButton actionClick={checkLoginUser}
                                  disabledBtnSubmit={disabledBtnSubmit}
                                  loadingStatus={loadingStatus}
                                  title={'login'}
                    />
                </div>
                <p className={s.DifferentAccountBtn}>Don't have an account</p>
                <NavLink to="/registration" className={s.footerBtn}>Sing Up</NavLink>
            </div>
        </div>
    )
}


export default Login