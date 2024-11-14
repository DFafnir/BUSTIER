//PRODUCTOS DE BUSTIER
const productos = [
    //Accesorios
    {
        id:1,
        titulo:"RELOJ",
        precio:180.000,
        imagen:'./assets/img_productos/accesorio1.png',
        categoria: {
            nombre:"Accesorios",
            id:"Accesorios"
            }

    },
    {
        id:2,
        titulo:"COLGANTE",
        precio:90.000,
        imagen:'./assets/img_productos/accesorio2.png',
        categoria:{
            nombre:"Accesorios",
            id:"Accesorios"
        }

    },
    {
        id:3,
        titulo:"COLLAR",
        precio:100.000,
        imagen:'./assets/img_productos/accesorio3.png',
        categoria:{
            nombre:"Accesorios",
            id:"Accesorios"
        }

    },
    {
        id:4,
        titulo:"ANILLO",
        precio:200.000,
        imagen:'./assets/img_productos/accesorio4.png',
        categoria:{
            nombre:"Accesorios",
            id:"Accesorios"
        }

    },
    {
        id:5,
        titulo:"BRAZALETE",
        precio:50.000,
        imagen:'./assets/img_productos/accesorio5.png',
        categoria:{
            nombre:"Accesorios",
            id:"Accesorios"
        }
//CALZADO
    },
    {
        id:6,
        titulo:"CHERRY",
        precio:350.000,
        imagen:'./assets/img_productos/calzado1.png',
        categoria:{
            nombre:"Calzado",
            id:"Calzado"
        }

    },
    {
        id:7,
        titulo:"MOCASINES",
        precio:260.000,
        imagen:'./assets/img_productos/calzado2.png',
        categoria:{
            nombre:"Calzado",
            id:"Calzado"
        }


    },
    {
        id:8,
        titulo:"TACONES",
        precio:200.000,
        imagen:'./assets/img_productos/calzado3.png',
        categoria:{
            nombre:"Calzado",
            id:"Calzado"
        }


    },
    {
        id:9,
        titulo:"BOTINES",
        precio:450.000,
        imagen:'./assets/img_productos/clazado4.png',
        categoria:{
            nombre:"Calzado",
            id:"Calzado"
        }


    },
    {
        id:10,
        titulo:"MOCASINESMARRONES",
        precio:350.000,
        imagen:'./assets/img_productos/clazado5.png',
        categoria:{
            nombre:"Calzado",
            id:"Calzado"
        }
//ROPA

    },
    {
        id:11,
       titulo:"CAMISA1",
        precio:30.000,
        imagen:'./assets/img_productos/oversize elements.png',
        categoria:{
            nombre:"Prendas",
            id:"Prendas"
        }


    },
    {
        id:12,
        titulo:"CAMISA2",
        precio:30.000,
        imagen:'./assets/img_productos/oversize gentleman.png',
        categoria:{
            nombre:"Prendas",
            id:"Prendas"
        }

    },
    {
        id:13,
        titulo:"CORSET",
        precio:69.000,
        imagen:'./assets/img_productos/prenda1.png',
        categoria:{
            nombre:"Prendas",
            id:"Prendas"
        }

    },
    {
        id:14,
        titulo:"DRESS",
        precio:90.000,
        imagen:'./assets/img_productos/prenda2.png',
        categoria:{
            nombre:"Prendas",
            id:"Prendas"
        }

    },
    {
        id:15,
        titulo:"GABARDINA",
        precio:200.000,
        imagen:'./assets/img_productos/prenda3.png',
        categoria:{
            nombre:"Prendas",
            id:"Prendas"
        }

    },
    {
        id:16,
        titulo:"PANTALONES",
        precio:50.000,
        imagen:'./assets/img_productos/prenda4.png',
        categoria:{
            nombre:"RPrendas",
            id:"Prendas"
        }

    },
    {
        id:17,
        titulo:"LADIES",
        precio:90.000,
        imagen:'./assets/img_productos/prenda5.png',
        categoria:{
            nombre:"Prendas",
            id:"Prendas"
        }

    },
    {
        id:18,
        titulo:"TOTE",
        precio:15.000,
        imagen:'./assets/img_productos/totebag.png',
        categoria:{
            nombre:"prendas",
            id:"Prendas"
        }

    }
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelector(".botones-categoria");



function cargarProductos(){
     productos.forEach (producto =>{

        const div= document.createElement ("div");
        div.classList.add("producto");
        div.innerHTML = `
        <div class="producto">
            <img src="${producto.imagen}" alt="${producto.titulo}">
            <h3>${producto.titulo}</h3>
            <div class="pie_cont">
            <h3>$${producto.precio}</h3>
            <a href="index_carrito.html"><img id="${producto.id}" src="/assets/img/carrito logo.png" alt="carrito"></a>
        </div>  
    `
        contenedorProductos.append(div);
     })
}

cargarProductos();