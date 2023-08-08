import {useAppDispatch} from "../../../app/hooks";
import {authApi} from "../auth.api";

export const Login = () => {

    const dispatch = useAppDispatch()



    const loginHandler = () => {

        const payload = {
            email: "",
            password: "",
            rememberMe: false
        }

          dispatch(authApi.login(payload)).then(()=> {})

    }

    return (

        <div>
            <button onClick={loginHandler}> Sign In</button>
           </div>
    )
}