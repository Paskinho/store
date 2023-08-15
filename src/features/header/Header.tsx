import s from "./styles.module.css"
import {useNavigate} from "react-router";

export const Header = () => {

    // const navigate = useNavigate()

    const addInCart = () => {
        // return navigate('cart')
    }

    const login = () => {
        return alert('Login successfully')
    }

    return (
        <div className={s.header}>
            <div className={s.button}>
                <button onClick={login}>Login</button>
        <button onClick={addInCart}>CART</button>

            </div>
        </div>
    )
}





