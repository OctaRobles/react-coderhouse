import ItemListContainer from "../ItemListContainer/ItemListContainer"
import item from "../Item/Item"

const ItemList = ({products}) => {
    return (
        <div>
            {products.map( prod => <Item key={prod.id} {...prod} />) }
        </div>
    )
}

export default ItemList