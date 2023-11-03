function saludarUsuario() {
    alert("¡Bienvenidos a Vestimenta Deportiva!");
    console.log("¡VD te da la bienvenida a nuestra tienda online!");
}

saludarUsuario()

let nombre;

while (true) {
    nombre = prompt("Ingrese su nombre completo");

    // Verifica si la entrada es un string (no está vacía y no es un número)
    if (nombre !== null && isNaN(nombre)) {
        break; // Salir del bucle si la entrada es válida
    } else {
        alert("Por favor, ingrese un nombre válido.");
    }
}

alert("¡Bienvenido/a, " + nombre + "!");
console.log("Un placer tener tu visita");

let usuario;
let registrado = false; // Variable para rastrear si el usuario se ha registrado

while (true) {
    usuario = prompt("Hola! ¿Eres un usuario registrado? (si/no)");

    if (usuario.toLowerCase() === "si" || usuario.toLowerCase() === "no") {
        break; // Salir del bucle si la respuesta es válida
    } else {
        alert("Por favor, responde 'si' o 'no'.");
        console.log("Inténtalo nuevamente");
    }
}

if (usuario.toLowerCase() === "si") {
    console.log("Perfecto. Te encuentras registrado");
    registrado = true;  // Configura la variable 'registrado' como verdadera si el usuario está registrado
} else if (usuario.toLowerCase() === "no") {
    console.log("¡Regístrate en menos de 1 minuto!");

    let nuevoUsuario = prompt("Elige tu nombre de usuario. Debe tener al menos 4 caracteres");

    while (nuevoUsuario.length < 4) {
        nuevoUsuario = prompt("Elige tu nombre de usuario. Debe tener al menos 4 caracteres");
        console.log("Inténtalo nuevamente");
    }

    alert("Tu usuario fue registrado correctamente como: " + nuevoUsuario);
    console.log("Registro exitoso, " + nuevoUsuario);

    // Si el usuario se registró, configuramos la variable 'registrado' como verdadera
    registrado = true;
}

// Preguntar al usuario si desea realizar una compra (fuera del bucle principal)
let compra = prompt("¿Deseas realizar una compra en nuestra tienda VD? (si/no)");

if (compra.toLowerCase() === "si") {
    alert("¡Veamos qué producto/s te interesan!");
    console.log("¿Difícil elegir entre tantos productos, verdad?");
} else if (compra.toLowerCase() === "no") {
    alert("Muy bien! Puedes echar un vistazo a la tienda online y volver en otro momento!");
    console.log("El usuario no desea realizar una compra");
} else {
    alert("Respuesta inválida. Por favor, ingresa -si- o -no-");
    while (true) {
        let compra = prompt("¿Deseas realizar una compra en nuestra tienda VD? (si/no)");
        if (compra.toLowerCase() === "si" || compra.toLowerCase() === "no") {
            break;
        } else {
            alert("Por favor, responde 'si' o 'no'.");
            console.log("Inténtalo nuevamente");
        }
    }
}

// Establezco los productos como objetos y luego preguntar al usuario qué producto le interesa

const camisetas = {
    nombre: "camisetas",
    precio: 12000,
    marca: "Adidas",
    stock: true
}

const shorts = {
    nombre: "shorts",
    precio: 3500,
    marca: "Adidas",
    stock: true
}

const medias = {
    nombre: "medias",
    precio: 2500,
    marca: "Nike",
    stock: true
}

const botines = {
    nombre: "botines",
    precio: 30000,
    marca: "Puma",
    stock: true
}

const guantes = {
    nombre: "guantes",
    precio: 6000,
    marca: "Under Armour",
    stock: true
};

let eleccion = prompt(`Elige un producto:
1: Camisetas
2: Shorts
3: Medias
4: Botines
5: Guantes`
);

let productoElegido;

switch (eleccion) {
    case "1":
        productoElegido = camisetas;
        break;
    case "2":
        productoElegido = shorts;
        break;
    case "3":
        productoElegido = medias;
        break;
    case "4":
        productoElegido = botines;
        break;
    case "5":
        productoElegido = guantes;
        break;
    default:
        productoElegido = null;
}

if (productoElegido) {
    console.log("Producto seleccionado: " + productoElegido.nombre);
    console.log("Precio: $" + productoElegido.precio);
    console.log("Marca: " + productoElegido.marca);
    console.log("Disponibilidad: " + (productoElegido.stock ? "Disponible" : "No disponible"));
} else {
    console.log("Producto no válido");
}

let modalidad;
let domicilio;


if (productoElegido !== "este producto") {
    alert(`Quieres comprar ${productoElegido.nombre}`);
    console.log("Muy buena elección!");
    modalidad = prompt("¿Deseas retirar en el local o que enviemos a domicilio? (R ó E)");
    console.log("¿Retiro en el local o envío a domicilio?");

    if (modalidad.toLowerCase() === "r") {
        alert("Has seleccionado retiro en el local");
        console.log("Te esperamos aquí!");
    } else if (modalidad.toLowerCase() === "e") {
        alert("Has seleccionado envío a domicilio");
        console.log("Quédate en tu casa y nosotros te lo enviamos!");

        domicilio = prompt("Ingresa tu domicilio");
        alert("Listo! Dentro de 3 días te llegará tu compra!");
        console.log(`Tu compra será enviada a ${domicilio}` + ", gracias por tu compra!");

    } else {
        alert("Respuesta inválida");
        console.log("No has seleccionado una respuesta válida");
    }
    while (true) {
        modalidad = prompt("¿Deseas retirar en el local o que enviemos a domicilio? (R ó E)");
        if (modalidad.toLowerCase() === "r" || modalidad.toLowerCase() === "e") {
            break;
        } else {
            alert("Por favor, responde 'r' o 'e'.");
            console.log("Inténtalo nuevamente");
        }
    }
    // Preguntar al usuario en qué sucursal retirará el pedido
    const sucursales = [
        "Centro",
        "Norte",
        "Sur",
        "Este",
        "Oeste"
    ];

    const seleccionSucursal = prompt(`¿En cuál sucursal harás el retiro?
              1: Centro
              2: Norte
              3: Sur
              4: Este
              5: Oeste`);

    const sucursalElegida = buscarSucursal(seleccionSucursal);

    if (sucursalElegida !== "sucursal inexistente") {
        alert(`Harás el retiro en la sucursal ${sucursalElegida}`);
        console.log(`Entendido. Te esperamos en la sucursal ${sucursalElegida}`);
        agradecimiento();
    } else {
        alert("Sucursal inexistente. Introduce un número válido.");
    }

    function buscarSucursal(seleccion) {
        const indiceSeleccion = parseInt(seleccion) - 1;
        let sucursalEncontrada = "sucursal inexistente";

        if (indiceSeleccion >= 0 && indiceSeleccion < sucursales.length) {
            sucursales.forEach((s, index) => {
                if (index === indiceSeleccion) {
                    sucursalEncontrada = s;
                }
            });
        }

        return sucursalEncontrada;
    }
    function agradecimiento() {
        alert("¡Muchas gracias por visitar Vestimenta Deportiva!");
        console.log("¡Te esperamos pronto!");
    }
}

const productos = document.querySelector(".productos");
// console.log(productos);

let productosOfrecidos = [
    { id: 1, titulo: "Camisetas", precio: 12000 },
    { id: 2, titulo: "Shorts", precio: 3500 },
    { id: 3, titulo: "Medias", precio: 2500 },
    { id: 4, titulo: "Botines", precio: 30000 },
    { id: 5, titulo: "Guantes", precio: 6000 }
];

// console.log(productosOfrecidos);

for (let p of productosOfrecidos) {
    let container = document.createElement("div");
    container.innerHTML = `
        <h3 class="estiloP">Producto: ${p.titulo}</h3>
        <p class="estiloP">Precio: ${p.precio}</p>

        <button class="botonCarrito">Añadir al carrito</button>
    `;
    productos.appendChild(container);
}

const carrito = [
    {nombre: "Camisetas", precio: 12000},
    {nombre: "Shorts", precio: 3500}
]

let resultado = carrito.reduce((accum,p) => {
    return accum + p.precio
}, 0)

