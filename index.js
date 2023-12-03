

let palabras = ["desarrollador","codigo","computador","ingles","riwi","aprender","python","javascript","html","css","pinkfly","oportunidad","reto","creatividad","innovacion","futuro","code","tecnologia","software","trasnformacion"];
let seleccionarPalabra = palabras[Math.trunc(Math.random() * palabras.length)].split("");
let seleccionarPalabra2 = seleccionarPalabra.join("")
let nombreUsuario = prompt(`Coder ingresa tu nombre!!`);
generarPalabra()
alert(`${nombreUsuario} tienes 7 intentos, si ganas mataras a Pepe el grillo :c`);
let intento = 7;

function validarLetra(param) {
let pos = seleccionarPalabra.findIndex(e => e == param)
if(pos != -1){
    seleccionarPalabra.splice(pos,1);
    cambiarPalabra(pos,param);// no esta enviado la posicion correcta 
    validarLetra(param);
}else {
    return 0;
}
}

function generarPalabra(){
    document.getElementById("palabra").innerHTML = ""
    for (let index = 0; index < seleccionarPalabra.length; index++) {
        document.getElementById("palabra").innerText += ` _ `
    }
}

function cambiarPalabra(posicion,palabra){
    let palabras =  document.getElementById("palabra");
    let aux = palabras.textContent.split("");
    aux[posicion] = palabra
    palabras.innerHTML = aux.join("")
    //No cambia la poisicon correcta
}
function jugar() {
    console.log(`Te quedan ${intento} intentos fallidos`);
    let letra = document.getElementById("palabraInput").value
    if(seleccionarPalabra2 == letra){
        alert(`${nombreUsuario} jmm pai mero teso le gano al sistema con toda ${seleccionarPalabra2}`);
        
    }else if(validarLetra(letra) == 0){
        alert(`${nombreUsuario} esa no existe pai`);
        intento--;
    }else if(seleccionarPalabra.length == 0){
        alert(`${nombreUsuario} jmm pai mero teso le gano al sistema la palabra era ${seleccionarPalabra2}`);
    }
    if(intento == 0){
        console.log(`${nombreUsuario} JMMMM mero malo pai la proxima ni lo intente dediquese a vender bon ice mejor, la palabra era ${seleccionarPalabra2}`);
            //No permitir seguir jugando o cambiar de palabra cuando intentos lleguen a 0 
    }
    
    letra.innerHTML = ' '

}
