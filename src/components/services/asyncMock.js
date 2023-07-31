const products = [
    {
        titulo: "Dragon Blanco de Ojos Azules",
        id: "LOB-001",
        precio: "200",
        category:"comunes",
        stock: 3,
        imagen: "/assets/dragonblanco.bmp"
    },
    {
        titulo: "Mago Oscuro",
        id: "SDY-006",
        precio: "250",
        category:"comunes",
        stock: 5,
        imagen: "https://ejemplo.com/mago_oscuro.jpg"
    },
    {
        titulo: "Exodia, el Prohibido",
        id: "LOB-E101",
        precio: "150",
        category:"raras",
        stock: 1,
        imagen: "https://ejemplo.com/exodia_el_prohibido.jpg"
    },
    {
        titulo: "Dragón Metálico de Oscuridad",
        id: "SDK-001",
        precio: "90",
        category:"raras",
        stock: 2,
        imagen: "https://ejemplo.com/dragon_metalico_oscuridad.jpg"
    },
    {
        titulo: "Hada Arcoíris",
        id: "MRL-099",
        precio: "280",
        category:"muy-raras",
        stock: 10,
        imagen: "https://ejemplo.com/hada_arcoiris.jpg"
    },
    {
        titulo: "Cabeza Exodia",
        id: "LOB-E102",
        precio: "300",
        category:"muy-raras",
        stock: 0,
        imagen: "https://ejemplo.com/cabeza_exodia.jpg"
    },
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)

        }, 1000)
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) =>{
        setTimeout(() =>{
            resolve(products.find(product => product.id  === productId))
        }, 1000)
    })
}

export const getProductsByCategory = (productCategory) => {
    return new Promise ((resolve) => {
        setTimeout(() =>{
            resolve(products.filter(product => product.category === productCategory))
        }, 1000)
    })
}












function getData() {
    return new Promise ( (resolve,reject)  =>{
        
        setTimeout( () => {resolve(productos)}, 2000) 
    });
}

export default getData;