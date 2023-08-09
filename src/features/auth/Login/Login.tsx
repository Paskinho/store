import { toast } from "react-toastify";
import {useAppDispatch} from "../../../app/hooks";
import {authApi} from "../auth.api";

export const Login = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()



    const loginHandler = () => {

        const payload = {
            email: "virgil@gmail.com",
            password: "virgil",
            rememberMe: false
        }

          dispatch(authApi.login(payload)).then((res: any)=> {
              toast.success("Successfully login!")
              setTimeout(()=> {
                  navigate('/')
              }, 1000)
          }).catch((err: any)=>{
              toast.error(err.e.response.data.error)
          })

    }

    return (

        <div>
            <button onClick={loginHandler}> Sign In</button>
           </div>
    )
}