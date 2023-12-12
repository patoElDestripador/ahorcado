

let palabras = ["desarrollador","codigo","computador","ingles","riwi","aprender","python","javascript","html","css","pinkfly","oportunidad","reto","creatividad","innovacion","futuro","code","tecnologia","software","trasnformacion"];
var seleccionarPalabra;
let palabrasArray = [];
let nombreUsuario = prompt(`Coder ingresa tu nombre!!`);
generarPalabra()
let seleccionarPalabra2 = seleccionarPalabra.join("")
alert(`${nombreUsuario} tienes 7 intentos, si ganas mataras a Pepe el grillo :c`);
var intento = 7

function validarLetra(param) {
let pos = seleccionarPalabra.findIndex(e => e == param)
if(pos != -1){
    delete(seleccionarPalabra[pos]);
    cambiarPalabra(pos, param);
    validarLetra(param);
}else {
    return 0;
}
}

function generarPalabra(){
    //reinciio de caracteres
    seleccionarPalabra = palabras[Math.trunc(Math.random() * palabras.length)].split("");
    palabrasArray = [];
/*     seleccionarPalabra2 = seleccionarPalabra */
    intento = 7;
    let palabra = document.getElementById("palabra")
    palabra.innerHTML = "";
    for (let index = 0; index < seleccionarPalabra.length; index++) {
        palabrasArray.push(`_`);
    }
    palabra.innerHTML = palabrasArray.join(" ");
}

function cambiarPalabra(posicion,palabra){
    let palabras = document.getElementById("palabra")
    palabrasArray[posicion] = palabra
    console.log("las palabra son",palabrasArray)
    palabras.innerHTML = palabrasArray.join("")
    if(palabrasArray.join("") == seleccionarPalabra2){
        alert(`${nombreUsuario} jmm pai mero teso le gano al sistema la palabra era ${seleccionarPalabra2}`);
        document.getElementById("palabra").innerHTML = seleccionarPalabra2
        //volver a jugar 
        alert("la palabra cambio!!")
        generarPalabra()
    }
}

function jugar() {
    console.log(`Te quedan ${intento} intentos fallidos`);
    let letra = document.getElementById("palabraInput")
    letra = letra.value.toLowerCase().trim()
    document.getElementById("palabraInput").value = ""


if(seleccionarPalabra2 == letra ){
        alert(`${nombreUsuario} jmm pai mero teso le gano al sistema con toda la palabra si era ${seleccionarPalabra2}`);
        document.getElementById("palabra").innerHTML = seleccionarPalabra2
        //volver a jugar 
        alert("la palabra cambio!!")

        generarPalabra()
    }else if(validarLetra(letra) == 0 && intento >= 0 ){
        alert(`${nombreUsuario} esa no existe pai`);
        intento--;
    }else if(seleccionarPalabra.length == 0){
        alert(`${nombreUsuario} jmm pai mero teso le gano al sistema la palabra era ${seleccionarPalabra2}`);
        //volver a jugar 
        alert("la palabra cambio!!")
        generarPalabra()
    }
    if(intento == 0){
        alert(`${nombreUsuario} JMMMM mero malo pai la proxima ni lo intente dediquese a vender bon ice mejor, la palabra era ${seleccionarPalabra2}`);
        alert("la palabra cambio!!")
        //volver a jugar 
        generarPalabra();
    }
    
}

/* document.getElementById("palabratext")
    .addEventListener("keyup", function(e) {
        if (e.keyCode === 13) {
            document.getElementById("btnGuardar").click();
        }
    });
 
document.getElementById("btnGuardar").onclick = function() {
    jugar();
} */