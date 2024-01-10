import {useDispatch} from "react-redux";
import {authThunks} from "../auth.slice";

export const Register = () => {
    const dispatch = useDispatch()

    const registerHandler = () => {
        const payload = {
            email: "paskinho@gmail.com",
            password: "Paskinho123",
        }

        // dispatch(authThunks.register(payload))
    }


    return <div>
        <form>
            <div>
        <label>Email</label>
        <input placeholder={'Email'} type={'email'}/>
    </div>
            <div>
            <label>Password</label>
            <input placeholder={'Password'} type={'password'}/>
                <label>Confirm password</label>
            <input placeholder={'Confirm password'} type={'password'}/>
        <button onClick={registerHandler}>SignUp</button>
            </div>
        </form>

    </div>

}
