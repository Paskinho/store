import {instance} from "../../common/api/common.api";

export const authApi = {
    register: (arg: ArgLoginType) => {
        return instance.post('auth/register', arg)
    },
    login: (arg: ArgLoginType) => {
        return instance.post('auth/login', arg)
    },
    logout: () => {
        return instance.delete('auth/me')
    },
    forgotPassword: (arg: ArgForgotType) => {
     return instance.post('auth/forgot', arg)
    },
    resetPassword: () => {
      return instance.post('auth/set-new-password') // можно сюда arg
    },
    profile: () => {

    }
}

export type ArgLoginType = {
    email: string,
    password: string,
    rememberMe: boolean,
};

export type ArgForgotType = {
    email: string,
    from?: string,
    message: string
}

export type ProfileType = {
    _id: string,
    email: string,
    rememberMe: boolean,
    name: string
}