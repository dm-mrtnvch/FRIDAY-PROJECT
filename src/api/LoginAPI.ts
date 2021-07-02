import {instance} from './base-url';

export const loginAPI = {
    login: (email: string, password: string) => {
        return instance.post('/auth/login', {email, password})
    }
};
