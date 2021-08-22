import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://dry-forest-56016.herokuapp.com/',
    // baseURL: 'https://neko-back.herokuapp.com/2.0/auth/me',
    // withCredentials: true
});



// API
export const loginAPI = {
    logIn: (email: string, password: string, rememberMe: boolean = false) => {
        return instance.post<loginResponseType>('auth/login', {email, password, rememberMe})
    }
}

export const authAPI = {
    me: () => {
        return instance.post<any>('auth/me', {})
    },
    logOut: () => {
        return instance.delete<any>('auth/me', )
    }
}

export const registrationAPI = {
    register(email: string, password: string) {
        return instance.post<RegistrationResponseType>('auth/register', {email, password})
    }
}

export const passwordRecoveryAPI = {
    forgot: (email: string) => {
        return instance.post('auth/forgot', {
            email,
            from: 'test-front-admin <ai73a@yandex.by>',
            message: `<div style="background-color: #00ff00; padding: 15px">password recovery link: 
                        <a href='https://IvanStupchyk.github.io/learning-cards#/new-password/$token$'>link</a></div>`
        })
    }
}

export const setNewPasswordAPI = {
    setNewPassword: (password: string, resetPasswordToken: string) => {
        return instance.post<setNewPasswordDataType>('auth/set-new-password', {password, resetPasswordToken})
    }
}

// TYPES

//loginAPI
export type loginResponseType = {
    _id: string
    email: string
    name: string
    avatar?: string
    publicCardPacksCount: number
    created: Date
    updated: Date
    isAdmin: boolean
    verified: boolean
    rememberMe: boolean
    error?: string
}

type RegistrationResponseType = {
    addedUser: addedUserType
    error?: string
}

type setNewPasswordDataType = {
    info: string
    error: string
}

type addedUserType = {
    _id: string,
    email: string,
    rememberMe: boolean,
    isAdmin: boolean,
    name: string,
    verified: boolean,
    publicCardPacksCount: 0,
    created: string,
    updated: string,
    __v: number
}