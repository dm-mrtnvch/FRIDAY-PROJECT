import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://dry-forest-56016.herokuapp.com/',
    // withCredentials: true
});



// API
export const loginAPI = {
    logIn: (email: string, password: string, rememberMe: boolean = false) => {
        return instance.post<any>('auth/login', {email, password, rememberMe})
    }
}

export const authAPI = {
    me: () => {
        instance.post<any>('auth/me', {})
    },
    logOut: () => {
        return instance.delete<any>('auth/me', {})
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