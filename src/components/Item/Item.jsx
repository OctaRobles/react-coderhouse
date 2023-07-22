
import './estilosItem.css'

function Item(props) {
    const{ titulo ,precio, descripcion, img} = props;

    return (
        <div className="ti">
            <div>
                <h1 >{titulo}</h1>
            </div>
            <div>
                <img width="100" src={img} />
            </div>
            <div>
                <h2>{descripcion}</h2>
            </div>
            <div>
                <p className='pi'>$ {precio}</p>
            </div>    
        </div>
    )
}

export default Item;