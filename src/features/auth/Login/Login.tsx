import {toast} from "react-toastify";
import {useAppDispatch} from "../../../app/hooks";
import {authThunks} from "../auth.slice";
import {useNavigate} from "react-router"


export const Login = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const loginHandler = () => {

        const payload = {
            email: "paskinho@gmail.com",
            password: "Paskinho123",
            rememberMe: false
        }
          dispatch(authThunks.login(payload)).then((res: any)=> {
              toast.success("Successfully login!")
              // setTimeout(()=> {
              //     navigate('/')
              // }, 1000)
          }).catch((err: any)=>{
              toast.error(err.e.response.data.error)
          })

    }

    const registerHandler = () => {
        return navigate('/register')
    }


    return (
        <div>
            <div>
            <input type={'checkbox'}/>
            <input/>
            <input type={'password'}/>
            </div>
            <button onClick={loginHandler}> Sign In</button>
            <div>Don't have account?</div>
            <button onClick={registerHandler}>Register</button>
           </div>
    )
}