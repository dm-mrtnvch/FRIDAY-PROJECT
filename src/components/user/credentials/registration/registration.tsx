import React, {ChangeEvent, useCallback, useState} from 'react'
import {Redirect} from 'react-router-dom';
import {registrationAPI} from '../../../../api/RegistrationAPI';
import {useDispatch, useSelector} from 'react-redux';
import {registerTC} from '../../../../redux/reducers/registration-reducers';
import {LOGIN_PATH} from '../../../../constants/constants';

const Registration = React.memo(() => {

    const dispatch = useDispatch()
    const isLoading = useSelector<any>(state => state.registration.isLoading)
    const response = useSelector<any>(state => state.registration.response)

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    // const [disable, setDisable] = useState<boolean>(false)

    const onEmailChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }, [setEmail])
    const onPasswordChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    }, [setPassword])

    const onSubmitForm = useCallback(() => {
        dispatch(registerTC(email, password))
    }, [email, password, dispatch])

    // Object is of type 'unknown'.  TS2571 - в response.status === 201 ругается на response.
    // if (response && response.status === 201) {
    if (response) {
        return <Redirect to={LOGIN_PATH}/>
    } else {

    }

    return (
        <>
            <div>REGISTRATION</div>
            {
                isLoading
                    ? <div>L-O-A-D-I-N-G...</div>
                    : ''
            }
            <input type="email" placeholder='email' onChange={onEmailChange} value={email}/>
            <br/>
            <input type="password" placeholder='password' onChange={onPasswordChange} value={password}/>
            <br/>
            {/*isLoading ? true : false тож самое что и  !!isLoading*/}
            <button onClick={onSubmitForm} disabled={!!isLoading}>send</button>
        </>
    )
})

export default Registration


// /^[\\w]{1}[\\w-\\.]*@[\\w-]+\\.[a-z]{2,7}$/i.test('x@x.xx')