import {instance} from './base-url';

export const сreateNewPasswordAPI = {
    createNewPassword: (password: string, resetPasswordToken: string ) => {
        instance.post(' /auth/set-new-password', {password, resetPasswordToken})
    }
};