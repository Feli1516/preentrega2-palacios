const comidas = [
    {nombre: "milanesa", precio: 2000},
    {nombre: "pizza", precio: 1700},
    {nombre: "hamburguesa", precio: 1900},
    {nombre: "fideos", precio: 1600},
];

const bebidas = [
    {nombre: "agua", precio: 600},
    {nombre: "jugos", precio: 600},
    {nombre: "gaseosa", precio: 700},
    {nombre: "vino", precio: 1500},
    {nombre: "cerveza", precio: 850},
];

let total = 0;

function consultar(consulta){
        let continuar = "si";
        while(continuar === "si" && consulta === "si"){
            let elegir = prompt("qué quiere consultar, bebidas o comidas?");
            if(elegir === "comidas"){
                comidas.forEach((item) => {
                    alert(`${item.nombre}\nPrecio: ${item.precio}`);
                });
                }else if(elegir === "bebidas"){
                    bebidas.forEach((item) => {
                        alert(`${item.nombre}\nPrecio: ${item.precio}`);
                    });
                    }else{
                        alert("nombre incorrecto");
                    }
            continuar = prompt(`desea continuar consultando? escriba "si"`);
        }
}

let consulta = prompt(`quiere consultar nuestro menú? escriba "si"`);

consultar(consulta);

function carrito(compra){
    let entrada = "si";
    
    while(entrada === "si" && compra === "si"){
        let comprar = prompt("quiere comprar comida o bebida?");
        if(comprar === "comida"){
            let nombre = prompt(`Menú:\n-milanesa\n-pizza\n-hamburguesa\n-fideos\nQue quiere comprar?`);
            let cant = parseInt(prompt("Ingrese la cantidad a comprar"));
            let producto;
            for (let index = 0; index < comidas.length; index++) {
                if (comidas[index].nombre === nombre) {
                producto = comidas[index];
                }
            }
            total = total + (producto.precio * cant);
        }else if(comprar === "bebida"){
            let nombre = prompt(`Menú:\n-agua\n-jugos\n-gaseosa\n-vino\n-cerveza\nQue quiere comprar?`);
            let cant = parseInt(prompt("Ingrese la cantidad a comprar"));
            let producto;
            for (let index = 0; index < bebidas.length; index++) {
                if (bebidas[index].nombre === nombre) {
                producto = bebidas[index];
                }
            }
            total = total + (producto.precio * cant);
        }else{
            alert("palabra incorrecta");
        }
        alert(`Hasta ahora el total a pagar es : ${total}`);
        entrada = prompt(`quiere continuar agregando al carrito? escriba "si"`);
}
    alert(`Total a pagar : ${total}`);
}

let compra = prompt(`quiere comenzar a comprar? escriba "si"`);

carrito(compra);

function descuento(edad){
    if(edad === "mayor"){
        return (total) => total - (total / 10);
    }

    if(edad === "menor"){
        return (total) => total - ((total * 20) / 100);
    }
}

alert("tenemos un descuento del 20% para las personas menores de edad, y del 10% a las mayores de edad");
let mayorMenor = prompt("eres mayor o menor de edad?");
const mayor = descuento("mayor");
const menor = descuento("menor");
if(mayorMenor === "mayor"){
    alert(`total a pagar con descuento del 10%: ${mayor(total)}`);
}if(mayorMenor === "menor"){
    alert(`total a pagar con descuento del 20%: ${menor(total)}`);
}