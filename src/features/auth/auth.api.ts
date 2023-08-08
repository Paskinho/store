import {instance} from "../../common/api/common.api";

export const authApi = {
    register: (arg: any) => {
        return instance.post('auth/register', arg)
    },
    login: () => {

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