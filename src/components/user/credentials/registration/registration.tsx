import React, {ChangeEvent, useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../../../redux/store';
import {
    setRegistration,
    setRegistrationAC,
    setServerErrorMessageRegistration
} from '../../../../redux/reducers/registration-reducers';
import {emailValidation} from '../../../../assets/emailValidation';
import {passwordValidation} from '../../../../assets/password-validation';
import CommonInput from '../../../common/input/input';
import s from './registration.module.css'
import {Redirect} from 'react-router-dom';
import CommonButton from '../../../common/button/button';

const Registration = () => {

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [checkPassword, setCheckPassword] = useState<string>('')
    const [errorEmailMessage, setErrorEmailMessage] = useState<string>('')
    const [errorPasswordMessage, setErrorPasswordMessage] = useState<string>('')

    const disabledBtnSubmit = !email || !password || !checkPassword

    const dispatch = useDispatch()
    const loadingStatus = useSelector<AppStateType, boolean>(state => state.registration.loadingRequest)
    const isRegistration = useSelector<AppStateType, boolean>(state => state.registration.isRegistration)
    const serverErrorMessage = useSelector<AppStateType, string>(state => state.registration.error)

    const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setErrorEmailMessage('')
        setEmail(e.currentTarget.value)
        serverErrorMessage && dispatch(setServerErrorMessageRegistration(''))
    }

    const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setErrorPasswordMessage('')
        setPassword(e.currentTarget.value)
        serverErrorMessage && dispatch(setServerErrorMessageRegistration(''))
    }

    const onChangeCheckPassword = (e: ChangeEvent<HTMLInputElement>) => {
        setErrorPasswordMessage('')
        setCheckPassword(e.currentTarget.value)
        serverErrorMessage && dispatch(setServerErrorMessageRegistration(''))
    }

    const onRegistration = () => {
        if (!emailValidation(email)) {
            setErrorEmailMessage('incorrect email')
        } else if (!passwordValidation(password)) {
            setErrorEmailMessage('minimum 8 charters')
        } else if (password !== checkPassword) {
            setErrorPasswordMessage('enter the same password')
        } else {
            dispatch(setRegistration(email, password))
        }
    }

    useEffect(() => {
        return () => {
            dispatch(setServerErrorMessageRegistration(''))
            dispatch(setRegistrationAC(false))
        }
    }, [])


    if (isRegistration) {
        return <Redirect to={'/login'}/>
    }

    const goBack = () => {
        window.history.go(-1);
    }

    return (
        <div className={s.registrationContainer}>
            <div className={s.inputFields}>
                <CommonInput title={'Email'}
                             typeInput={'email'}
                             value={email}
                             changeValue={onEmailChange}
                             errorMessage={errorEmailMessage}/>

                <CommonInput title={'password'}
                             typeInput={'password'}
                             value={password}
                             changeValue={onPasswordChange}
                             errorMessage={errorPasswordMessage}/>
                <CommonInput title={'Confirm password'}
                             typeInput={'password'}
                             value={checkPassword}
                             changeValue={onChangeCheckPassword}
                             errorMessage={errorPasswordMessage}/>
            </div>

            <div className={s.positionBtnsAndError}>
                <span className={s.errorMessageContainer}>{serverErrorMessage}</span>

                <div className={s.btns}>
                    <a className={s.btnCancel} onClick={goBack}>Cancel</a>
                    <div className={s.blueBtnContainer}>
                        <CommonButton
                            actionClick={onRegistration}
                            disabledBtnSubmit={disabledBtnSubmit}
                            title={'Register'}
                            loadingStatus={loadingStatus}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registration