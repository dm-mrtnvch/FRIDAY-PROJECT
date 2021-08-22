import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../../redux/store';
import {AuthUser, logOutUser} from '../../../redux/reducers/login-reducer';
import { Redirect } from 'react-router-dom';

const Profile = (props: any) => {
    const isAuth = useSelector<AppStateType, boolean>( state =>  state.login.logIn)
    const idUser = useSelector<AppStateType, string>(state => state.login._id)
    const dispatch = useDispatch()

    useEffect(() => {
        if(!idUser){
            dispatch(AuthUser())
        }
    }, [dispatch])

    const logOut = () => {
        dispatch(logOutUser())
    }

    if(!isAuth) return <Redirect to ={'/login'}/>

    return (
        <div>
            Profile
            <button onClick={logOut} style={{height: '30px', width: '80px', backgroundColor: 'red'}}>log out</button>
        </div>
    )
}

export default Profile
