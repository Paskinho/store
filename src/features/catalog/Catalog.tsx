import {useAppDispatch} from "../../app/hooks";
import {catalogThunks} from "./catalog.slice";
import {toast} from "react-toastify";

export const Catalog = () => {

    const dispatch = useAppDispatch()

    const getCatalog = () => {

        dispatch(catalogThunks.getCatalog()).then((res) => {
            toast.success('Successfully ')
        })

    }


    return (
        <div>
            <button onClick={getCatalog}>Get Catalog</button>
        </div>
    )
}