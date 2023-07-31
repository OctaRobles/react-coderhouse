import { useState, useEffect} from "react";
import getData, { getProductById, getProducts, getProductsByCategory } from "../services/asyncMock";
import Item from "../Item/Item"
import './estilosItemListContainer.css'

const  ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([false])
    const { categoyId } = useParams()

    useEffect(() => {
        const asyncFunc = categoyId ? getProductsByCategory : getProducts
        
        asyncFunc(categoyId)
        .then(response => {
        })

        .catch(error => {
            console.error(error)
        })
    },[categoryId])

    return(
        <div>
            <h1>{greeting}</h1>

            <div>
                <ItemList products = {products} />
            </div>
        </div>    
    )
}

export default ItemListContainer;S


/*function ItemListContainer () {
    console.log("renderizado item list container")
    const [products, setProducts] = useState ([]);

    async function requestProducts() {
        const respuesta = await  getData();
        setProducts(respuesta);
    }
    useEffect(
        () => {
        requestProducts();
        },
        []
    );
    

    return (
        <div>
            <h1 className="tit">Listado de Productos</h1>
            {products.map((item) => (
                <Item key={item.id} {...item} />
            ))}
        </div>
    );
}*/

