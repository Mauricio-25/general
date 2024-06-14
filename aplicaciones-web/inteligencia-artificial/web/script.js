
let modelo = new brain.NeuralNetwork();

// ! ELEMENTOS DEL DOM

const btnEntrenamiento = document.getElementById("botonEntrenamiento");
const preguntar = document.getElementById("preguntar");
const btnResultado = document.getElementById("btnResultado");
const color = document.getElementById("colorSeleccionado");
const resultadoFinal = document.getElementById("resultadoFinal");


// ! ENTRENAR A LA IA

function generarListaEntrenamiento() {
    let lista = [];

    // Blanco (255,255,255)
    lista[0] = {input: [255/255, 255/255, 255/255], output: {claro: 1}};

    // Negro (0,0,0)
    lista[1] = {input: [0, 0, 0], output: {oscuro: 1}};

    console.log(JSON.stringify(lista));

    return lista;
}


// ! EVENTOS

btnEntrenamiento.addEventListener("click", ()=>{
    modelo.train(generarListaEntrenamiento());
    preguntar.classList.remove("hidden");
    btnEntrenamiento.classList.add("hidden");
})

btnResultado.addEventListener("click", ()=>{
    let entrada = color.value;

    let r = parseInt(entrada.substr(1,2), 16);
    let g = parseInt(entrada.substr(3,2), 16);
    let b = parseInt(entrada.substr(5,2), 16);

    let salida = modelo.run([r/255, g/255, b/255]);
    //console.log(JSON.stringify(salida));

    let porcentajeOscuro = Number((salida.oscuro*100).toFixed(4));
    let porcentajeClaro = Number((salida.claro*100).toFixed(4));
    

    console.log(porcentajeClaro + "%")
    console.log(porcentajeOscuro + "%")

    let resultado = validar(porcentajeClaro, porcentajeOscuro);

    if(resultado == "oscuro") {
        resultadoFinal.classList.remove("text-emerald-500");
        resultadoFinal.classList.add("text-rose-700");
    } else {
        resultadoFinal.classList.add("text-emerald-500");
        resultadoFinal.classList.remove("text-rose-700");
    }

    resultadoFinal.innerHTML = `El color seleccionado es un color ${resultado}`;
})

// ! FUNCIONES

function validar(claro, oscuro) {
    if(claro > oscuro) {
        return "claro";
    } else {
        return "oscuro";
    }
}