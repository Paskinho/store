import {useAppDispatch} from "../../app/hooks";
import {catalogThunks} from "./catalog.slice";
import {toast} from "react-toastify";
import s from "./styles.module.css"
import {useState} from "react";


export const Catalog = () => {

    const [products, setProducts] = useState([
        {id: 1, title: 'water', price: 2, img: ''}
    ])


    const [product, setProduct] = useState(0)

    const dispatch = useAppDispatch()

    const getCatalog = () => {

        dispatch(catalogThunks.getCatalog()).then((res) => {
            toast.success('Successfully ')
        })

    }




    const addToCart = () => {
       const product = {id:2, title: 'milk', price: 3, img: '' }
        const newProducts = [{products, ...product}]
        setProducts(newProducts)
        console.log(newProducts)
    }


    return (
        <div>
            <h1 style={{color:'green' }}> Water</h1>
            <p><img className={s.img} src={'https://gastronomia.by/upload/iblock/cfd/flmanv0t4djnk76qgqzdjo6lcxicapmc.jpg'} /></p>
            <p>Price: {2}</p>
            <button onClick={addToCart}>Add to cart</button>
            <button onClick={getCatalog}>Get Catalog</button>

        </div>
    )
}