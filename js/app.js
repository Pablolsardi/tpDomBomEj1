let numeroElegido;
let numeroRandom;

const generarRandom = () =>{
    numeroRandom = Math.floor(Math.random() * 10) + 1;
    
    console.log("Número aleatorio: ", numeroRandom);
}

const obtenerNumero = (e)=>{
    e.preventDefault();
    let numero = document.getElementById('inputNumero');
    numeroElegido = parseInt(numero.value);

    console.log("Número elegido: ", numeroElegido);
    compararNumeros();
  }

const compararNumeros = () =>{
    if(numeroElegido==numeroRandom){
        alert("¡LOS NÚMEROS COINCIDEN!");
    }else if(numeroElegido>numeroRandom){
        alert("El número elegido es mayor al random ;(");
    }else{
        alert("El número elegido es menor al random ;(");
    }

}