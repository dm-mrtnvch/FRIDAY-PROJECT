import React, {ChangeEvent, useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {NavLink, Redirect} from 'react-router-dom'
import {AppStateType} from '../../../../../redux/store';
import {emailValidation} from '../../../../../assets/emailValidation';
import {
    passwordRecoveryThunk,
    setServerErrorMessageRecovery,
    setSuccess
} from '../../../../../redux/reducers/recover-password-reducer';
import st from './recover-password.module.css'
import s from '../../login/Login.module.css'
import CommonInput from '../../../../common/input/input';
import CommonButton from '../../../../common/button/button';

const RecoverPassword = (props: any) => {

    const [email, setEmail] = useState<string>('abc@mail.ru')
    const [error, setError] = useState<string>('')
    const disabledBtnSubmit = !email

    const dispatch = useDispatch()
    const loadingStatus = useSelector<AppStateType, boolean>(state => state.recoverPassword.loadingRequest)
    const success = useSelector<AppStateType, boolean>(state => state.recoverPassword.success)
    const serverErrorMessage = useSelector<AppStateType, string>(state => state.recoverPassword.error)

    const sendLetter = () => {
        !emailValidation(email)
            ? setError('incorrect email')
            : dispatch(passwordRecoveryThunk(email))
    }

    const inputEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setError('')
        setEmail(e.currentTarget.value)
        serverErrorMessage && dispatch(setServerErrorMessageRecovery(''))
        if (emailValidation(e.currentTarget.value)) {
            setError('')
        }
    }


    useEffect(() => {
        return () => {
            dispatch(setSuccess(false))
            dispatch(setServerErrorMessageRecovery(''))
        }
    }, [])

    if (success) {
        debugger
        return <Redirect to={`/password-recovery-check-email/${email}`}/>
    }

    return (
        <div className={st.forgotPasswordContainer}>
            <CommonInput placeholder={'Email'}
                         value={email}
                         changeValue={inputEmail}
                         errorMessage={error}
                         typeInput={'email'}/>
            <p className={st.textAction}>Enter your email address and we will send you further instructions</p>
            <div className={s.btnFooterLoginContainer}>
                <span className={s.errorMessageContainer}>{serverErrorMessage}</span>
                <div className={s.blueBtnContainer}>
                <CommonButton actionClick={sendLetter}
                              disabledBtnSubmit={disabledBtnSubmit}
                              title={'SEND INSTRUCTIONS'}
                              loadingStatus={loadingStatus}/>


                </div>
                <p className={s.DifferentAccountBtn}>Did you remember your password?</p>
                <NavLink to="/login" className={s.footerBtn}>Try logging in</NavLink>
            </div>

        </div>
    )
}

export default RecoverPassword