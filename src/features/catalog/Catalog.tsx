import {useAppDispatch} from "../../app/hooks";
import {catalogThunks} from "./catalog.slice";
import {toast} from "react-toastify";
import {useState} from "react";

export const Catalog = () => {


    const [productsList, setProductsList] = useState([])

    // New product state

    const [newProduct, setNewProduct] = useState('')
    const [newPrice, serNewPrice] = useState(0)
    const [newAvailable, setNewAvailable] = useState(false)
    const [newPhoto, setNewPhoto] = useState('')

    //Update name State
    const [updatedName, setUpdatedName] = useState('')


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