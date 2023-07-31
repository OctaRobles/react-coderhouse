
import './estilosItem.css'

const Item = ({id, name, img, price }) => {
    return(
        <article>
            <header>
                <h2>{name}</h2>
            </header>

            <picture>
                <img src={img} alt={name} />
            </picture>
            
            <section>
                <p>Precio: ${price}</p>
            </section>

            <footer>
                <link to={'/item/${id}'}>Ver Producto</link>
            </footer>
        </article>
    )
}

export default Item;