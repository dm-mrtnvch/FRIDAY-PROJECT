import React, {ChangeEvent, useState} from 'react'
import {Redirect, useParams} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../../../../redux/store';
import {passwordValidation} from '../../../../../assets/password-validation';
import {setNewPasswordThunk, setServerErrorMessage} from '../../../../../redux/reducers/new-password-reducers';
import CommonInput from '../../../../common/input/input';
import CommonButton from '../../../../common/button/button';
import s from './create-new-pass.module.css'


const NewPassword = (props: any) => {


    const [password, setPassword] = useState<string>('')
    const [error, setError] = useState<string>('')
    const {token} = useParams<{token: string}>()

    const dispatch = useDispatch()
    const loadingStatus = useSelector<AppStateType, boolean>(state => state.newPassword.loadingRequest)
    const successResponse = useSelector<AppStateType, boolean>(state => state.newPassword.success)
    const serverErrorMessage = useSelector<AppStateType, string>(state => state.newPassword.error)

    const setNewPassword = () => {
        if(!passwordValidation(password)){
            setError('Minimum 8 characters')
        } else {
            dispatch(setNewPasswordThunk(password, token))
        }
    }

    const inputPassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
        setError('')
        serverErrorMessage && dispatch(setServerErrorMessage(''))
    }

    if(successResponse) {
        return <Redirect to={'/login'}/>
    }

    return (
        <div className={s.containerNewPassword}>
            <CommonInput title={'Password'}
                         value={password}
                         changeValue={inputPassword}
                         errorMessage={error}
                         typeInput={'password'}/>

            <p className={s.textAction}>Create new password and we will send you further instructions to email</p>
            <div className={s.positionActionBtn}>
                <span className={s.errorMessageContainer}>{serverErrorMessage}</span>
                <div className={s.blueBtnContainer}>
                    <CommonButton actionClick={setNewPassword}
                                  disabledBtnSubmit={!password}
                                  title={'Create New Password'}
                                  loadingStatus={loadingStatus}/>
                </div>
            </div>
        </div>
    )
}

export default NewPassword