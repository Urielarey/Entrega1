let nombre = prompt("Nombre");

if(nombre){
    alert("BIENVENIDO  " + nombre)
}

const gasto1 = parseInt(prompt("¿Cuánto gastaste en comida?"));

const gasto2 = parseInt(prompt("¿Cuánto gastaste en transporte?"));

const gasto3 = parseInt(prompt("¿Cuánto gastaste en servicios?"));

const gasto4 = parseInt(prompt("¿Cuánto gastaste en entretenimiento?"));

const gastos = [gasto1, gasto2, gasto3, gasto4]

let nombres = ["comida", "transporte", "servicios", "entretenimiento"]

for (const gasto of gastos) {
    console.log(gasto)
}

function sumarGastos (gasto1, gasto2, gasto3, gasto4) {
    let resultado = gasto1 + gasto2 + gasto3 + gasto4
    alert("Lo gastado en total fue:  " + resultado)
    if(resultado >= 100000){
        alert("Cuidado! Estas gastando mucho")
    } else if(resultado < 100000){
        alert("Muy bien! no estas gastando tanto")
}
}

sumarGastos(gasto1, gasto2, gasto3, gasto4)

function calcularPromedio (gasto1, gasto2, gasto3, gasto4) {
    let suma = gasto1 + gasto2 + gasto3 + gasto4
    let total = suma / 4
    alert("Tu promedio de lo gastado fue:  " + total)
}

calcularPromedio(gasto1, gasto2, gasto3, gasto4)

let mayor = gastos[0]

let indiceMayor = 0

for (let i = 1; i < gastos.length; i++) {
    if (gastos[i] > mayor) {
        mayor = gastos[i]
        indiceMayor = i
    }
}

alert("El gasto más alto fue en " + nombres[indiceMayor] + ", con $" + mayor)

