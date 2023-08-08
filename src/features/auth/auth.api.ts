import {instance} from "../../common/api/common.api";

export const authApi = {
    register: (arg: any) => {
        return instance.post('auth/register', arg)
    },
    login: () => {
        return instance.post('auth/login')
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