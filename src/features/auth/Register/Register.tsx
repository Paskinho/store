import {useDispatch} from "react-redux";
import {authThunks} from "../auth.slice";

export const Register = () => {
    const dispatch = useDispatch()

    const registerHandler = () => {
        dispatch(authThunks.register)
    }

    dispatch(authThunks.register)

    return <div>
        <button onClick={registerHandler}>SignUp</button>

    </div>

}
