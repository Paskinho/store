import s from "./styles.module.css"

export const Header = () => {

    const addInCart = () => {
        return alert('Add in a cart successfully')
    }

    return (
        <div className={s.header}>
            <div className={s.button}>
        <button onClick={addInCart}>CART</button>
            </div>
        </div>
    )
}





