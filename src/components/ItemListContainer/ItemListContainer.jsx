import { useState, useEffect} from "react";
import getData from "../services/asyncMock";
import Item from "../Item/Item"
import './estilosItemListContainer.css'

function ItemListContainer () {
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
}

export default ItemListContainer;