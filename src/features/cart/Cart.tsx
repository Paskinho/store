import {useAppDispatch} from "../../app/hooks";
import {toast} from "react-toastify";
import {useNavigate} from "react-router";
import {Formik} from "formik";

export const Cart = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const orderHandler = () => {
        toast.success('Successfully order!')
        // navigate('order')
    }

 const initialValue = {firstName:''}

    return (
        <Formik initialValues={initialValue} onSubmit={()=> {
            console.log('successfully')
        }}>
        <div>
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
                <button onClick={orderHandler}>ORDER</button>
            </div>
        </div>
        </Formik>
    )
}