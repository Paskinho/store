import {useAppDispatch} from "../../app/hooks";
import {catalogThunks} from "./catalog.slice";
import {toast} from "react-toastify";
import s from "./styles.module.css"


export const Catalog = () => {



    const dispatch = useAppDispatch()

    const getCatalog = () => {

        dispatch(catalogThunks.getCatalog()).then((res) => {
            toast.success('Successfully ')
        })

    }


    const addToCart = () => {

    }


    return (
        <div>
            <h1 style={{color:'green' }}> Water</h1>
            <p><img className={s.img} src={'https://gastronomia.by/upload/iblock/cfd/flmanv0t4djnk76qgqzdjo6lcxicapmc.jpg'} /></p>
            <p>Price: {2}</p>
            <button onClick={addToCart}>Add to cart</button>
            {/*<button onClick={getCatalog}>Get Catalog</button>*/}

        </div>
    )
}