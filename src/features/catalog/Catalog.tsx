import {useAppDispatch} from "../../app/hooks";
import {catalogReducer, catalogThunks} from "./catalog.slice";

export const Catalog = () => {

    const dispatch = useAppDispatch()

    const getCatalog = () => {
        dispatch(catalogThunks.getCatalog).then(()=> {

        })

    }


    return (
        <div>
            <button onClick={getCatalog}>Get Catalog</button>
        </div>
    )
}