import { useState, useEffect} from react;
import getData from "../services/asyncMock";

function ItemDetailContainer() {
    const [products, setProducts] = useState({});
}

async function requestProducts() {
    const respuesta = await getData();
    setProducts(respuesta[0]);
}

useEffect(() => {
    requestProducts()
}, []);

return (
    <>
    <div className="ti">
            <div>
                <h1 >{products.titulo}</h1>
            </div>
            <div>
                <img width="100" src={products.img} />
            </div>
            <div>
                <h2>{products.descripcion}</h2>
            </div>
            <div>
                <p className='pi'>$ {products.precio}</p>
            </div>    
        </div>
    </>
)

export default ItemDetailContainer;