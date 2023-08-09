import {instance} from "../../common/api/common.api";

export const authApi = {
    register: (arg: any) => {
        return instance.post('auth/register', arg)
    },
    login: (arg: any) => {
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