import {useAppDispatch} from "../../app/hooks";
import {catalogReducer, catalogThunks} from "./cart.slice";
import {toast} from "react-toastify";
import {useNavigate} from "react-router";

export const Cart = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()



    return (
        <div>
            {/*<button onClick={getCatalog}>Get Catalog</button>*/}
            This your cart. Please check
        </div>
    )
}