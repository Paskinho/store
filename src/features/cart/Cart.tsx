import {useAppDispatch} from "../../app/hooks";
import {catalogReducer, catalogThunks} from "./cart.slice";
import {toast} from "react-toastify";

export const Cart = () => {

    const dispatch = useAppDispatch()

    const getCatalog = () => {


    }


    return (
        <div>
            <button onClick={getCatalog}>Get Catalog</button>
        </div>
    )
}