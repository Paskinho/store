import {useAppDispatch} from "../../app/hooks";
import {toast} from "react-toastify";
import {useNavigate} from "react-router";
import {Formik} from "formik";
import s from './styles.module.css'
import {useState} from "react";

export const Cart = () => {

    const [cartProduct, setCartProduct] = useState([])

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const orderHandler = () => {
        toast.success('Successfully order!')
        alert('Successfully order!')
        // navigate('order')
    }

 const initialValue = {firstName:''}

    return (
        <div>
        <Formik initialValues={initialValue} onSubmit={()=> {
            console.log('successfully')
        }}
        >
        <div className={s.cart}>
            <div>{cartProduct}</div>

            <div>
                <input placeholder={'NAME'}></input>
            </div>
            <div>
                <input placeholder={'SURNAME'}></input>
            </div>
            <div>
                <input placeholder={'ADDRESS'}></input>
            </div>
            <div>
                <input placeholder={'PHONE'}></input>
            </div>
            <div>
                <button type={'submit'} className={s.orderButton} onClick={orderHandler}>ORDER</button>
            </div>
        </div>
        </Formik>
            <div>
                Your cart is empty!
            </div>
        </div>

    )
}