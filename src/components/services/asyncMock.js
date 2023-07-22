const productos = [
    {
        "titulo": "Dragon Blanco de Ojos Azules",
        "id": "LOB-001",
        "precio": "200",
        "stock": 3,
        "descripcion": "Un poderoso dragón con ojos azules que puede destruir a cualquier enemigo.",
        "imagen": "/assets/dragonblanco.bmp"
    },
    {
        "titulo": "Mago Oscuro",
        "id": "SDY-006",
        "precio": "250",
        "stock": 5,
        "descripcion": "El poderoso mago de Yugi con una gran sabiduría y habilidades mágicas.",
        "imagen": "https://ejemplo.com/mago_oscuro.jpg"
    },
    {
        "titulo": "Exodia, el Prohibido",
        "id": "LOB-E101",
        "precio": "150",
        "stock": 1,
        "descripcion": "La combinación de cinco poderosas cartas que garantiza la victoria instantánea.",
        "imagen": "https://ejemplo.com/exodia_el_prohibido.jpg"
    },
    {
        "titulo": "Dragón Metálico de Oscuridad",
        "id": "SDK-001",
        "precio": "90",
        "stock": 2,
        "descripcion": "Un dragón metálico imbuido con poder oscuro y destructivo.",
        "imagen": "https://ejemplo.com/dragon_metalico_oscuridad.jpg"
    },
    {
        "titulo": "Hada Arcoíris",
        "id": "MRL-099",
        "precio": "280",
        "stock": 10,
        "descripcion": "Un hermoso hada que protege a los aliados con su mágico escudo arcoíris.",
        "imagen": "https://ejemplo.com/hada_arcoiris.jpg"
    },
    {
        "titulo": "Cabeza Exodia",
        "id": "LOB-E102",
        "precio": "300",
        "stock": 0,
        "descripcion": "Una de las partes de Exodia, el monstruo definitivo.",
        "imagen": "https://ejemplo.com/cabeza_exodia.jpg"
    },
]

function getData() {
    return new Promise ( (resolve,reject)  =>{
        
        setTimeout( () => {resolve(productos)}, 2000) 
    });
}

export default getData;