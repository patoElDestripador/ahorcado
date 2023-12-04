

let palabras = ["desarrollador","codigo","computador","ingles","riwi","aprender","python","javascript","html","css","pinkfly","oportunidad","reto","creatividad","innovacion","futuro","code","tecnologia","software","trasnformacion"];
let seleccionarPalabra = "codigo".split("") //palabras[Math.trunc(Math.random() * palabras.length)].split("");
let seleccionarPalabra2 = seleccionarPalabra.join("")
let palabrasArray = [];
let nombreUsuario = prompt(`Coder ingresa tu nombre!!`);
generarPalabra(1,0)
alert(`${nombreUsuario} tienes 7 intentos, si ganas mataras a Pepe el grillo :c`);
let intento = 7;

function validarLetra(param) {
let pos = seleccionarPalabra.findIndex(e => e == param)
if(pos != -1){
    seleccionarPalabra.splice(pos,1);
    cambiarPalabra(param,pos);// no esta enviado la posicion correcta 
    validarLetra(param);
}else {
    return 0;
}
}

function generarPalabra(valor , posicion){
    let palabra = document.getElementById("palabra")
    palabra.innerHTML = ""
    for (let index = 0; index < seleccionarPalabra.length; index++) {
        palabrasArray.push("_");
    }
    palabra.innerHTML = palabrasArray.toString()
}

function cambiarPalabra(posicion,palabra){
    let palabras =  document.getElementById("palabra");
    palabrasArray[posicion] = palabra
    console.log(palabrasArray)
    palabras.innerHTML = palabrasArray.join(" ")
    //No cambia la poisicon correcta
}

function jugar() {
    console.log(`Te quedan ${intento} intentos fallidos`);
    let letra = document.getElementById("palabraInput").value
    if(seleccionarPalabra2 == letra){
        alert(`${nombreUsuario} jmm pai mero teso le gano al sistema con toda la palabra si era ${seleccionarPalabra2}`);
        document.getElementById("palabra").innerHTML = seleccionarPalabra2
    }else if(validarLetra(letra) == 0 && intento >= 0 ){
        alert(`${nombreUsuario} esa no existe pai`);
        intento--;
    }else if(seleccionarPalabra.length == 0){
        alert(`${nombreUsuario} jmm pai mero teso le gano al sistema la palabra era ${seleccionarPalabra2}`);
    }
    letra = ' ';
    if(intento == 0){
        console.log(`${nombreUsuario} JMMMM mero malo pai la proxima ni lo intente dediquese a vender bon ice mejor, la palabra era ${seleccionarPalabra2}`);
            //No permitir seguir jugando o cambiar de palabra cuando intentos lleguen a 0 
    }
}
