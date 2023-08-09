import {instance} from "../../common/api/common.api";

export const authApi = {
    register: (arg: ArgLoginType) => {
        return instance.post('auth/register', arg)
    },
    login: (arg: ArgLoginType) => {
        return instance.post('auth/login', arg)
    },
    logout: () => {

    },
    forgotPassword: () => {

    },
    resetPassword: () => {

    },
    profile: () => {

    }
}

export type ArgLoginType = {
    email: string,
    password: string,
    rememberMe: boolean,
};

export type ProfileType = {
    _id: string,
    email: string,
    rememberMe: boolean,
    name: string
}