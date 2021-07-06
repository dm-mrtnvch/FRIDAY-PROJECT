import React from 'react';
import s from './button.module.css'
import {Preloader} from '../preloader/preloader';


const CommonButton = (props: CommonButtonType) => {
    return (
        <button className={s.blueBtn}
                onClick={props.actionClick}
                disabled={props.loadingStatus || props.disabledBtnSubmit}>{props.loadingStatus ? <Preloader/> : props.title}</button>
    )
}


type CommonButtonType = {
    actionClick: () => void
    loadingStatus?: boolean
    disabledBtnSubmit: boolean
    title: string
}

export default CommonButton