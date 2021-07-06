import {instance} from './base-url';

export const registrationAPI = {
    register: (email: string, password: string) => {
        return instance.post('/auth/register', {email, password})
    }
};



