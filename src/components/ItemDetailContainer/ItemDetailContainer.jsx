import { useState } from "react";
import { useEffect } from "react";
import { useParams} from "react-router-dom"
import { getProductById } from "../services/asyncMock";
import ItemDetail from "../itemDetail/itemDetail"

const ItemDetailContainer = () => {
    const [product, setProducts] = useState(null)

    const {itemId} = useParams()
    
    useEffect( () => {
        getProductById(itemId)
        .then(response => {
            setProduct(response)
        })
        
        .catch(error => {
            console.error(error)
        })
    }, [itemId])

    return(
        <div>
            <ItemDetail {...product}/>
        </div>
    )
}





export default ItemDetailContainer;