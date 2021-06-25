import React, {useState} from 'react'
import {NavLink} from 'react-router-dom';
import styles from './header.module.css'
import {
    LOGIN_PATH,
    PROFILE_PATH,
    RECOVER_PASSWORD_PATH,
    REGISTER_PATH,
    SET_NEW_PASSWORD_PATH
} from '../../constants/constants';

const Header = () => {
    const [active, setActive] = useState(false)

    return (
        <div className={styles.navlinks}>
            <button onClick={() => setActive(!active)}>{active ? 'HIDE HEADER' : 'SHOW HEADER' }</button>

            {active && <NavLink to={PROFILE_PATH}>profile</NavLink>}
            {active && <NavLink to={LOGIN_PATH}>login</NavLink>}
            {active && <NavLink to={REGISTER_PATH}>registration</NavLink>}
            {active && <NavLink to={RECOVER_PASSWORD_PATH}>recover password</NavLink>}
            {active && <NavLink to={SET_NEW_PASSWORD_PATH}>new password</NavLink>}


        </div>
    )
}

export default Header