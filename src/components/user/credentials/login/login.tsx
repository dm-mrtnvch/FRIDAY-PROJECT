import React, {ChangeEvent, useCallback, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {loginTC} from '../../../../redux/reducers/login-reducer';
import {RECOVER_PASSWORD_PATH, REGISTER_PATH} from '../../../../constants/constants';

const Login = React.memo((props: any) => {

    const dispatch = useDispatch()
    const response = useSelector<any>(state => state.login.response)
    const isLoading = useSelector<any>(state => state.login.isLoading)


    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [rememberMe, setRememberMe] = useState<boolean>(false)

    const onEmailChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }, [setEmail])
    const onPasswordChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    }, [setPassword])
    const onRememberMeChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setRememberMe(e.currentTarget.checked)
    }, [setRememberMe])
    const onSubmitForm = useCallback(() => {
        dispatch(loginTC(email, password))
    }, [email, password, dispatch])



    return (
        <>

            <div>LOGIN</div>

            <input type="email" onChange={onEmailChange} placeholder='email' value={email}/>
            <br/>
            <input type="password" onChange={onPasswordChange} placeholder='password' value={password}/>
            <br/>
            <a href={RECOVER_PASSWORD_PATH}>FORGOT PASSWORD?</a>
            <br/>
            {/*найти как задать title checkbox'y без колхоза как в примере ниже*/}
            <input type="checkbox" onChange={onRememberMeChange}/> Remember Me
            <br/>
            <button onClick={onSubmitForm} disabled={!!isLoading}>Login</button>
            <br/>
            <a href={REGISTER_PATH}>REGISTRATION</a>
        </>
    )
})

export default Login