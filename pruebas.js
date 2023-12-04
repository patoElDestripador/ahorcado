let lapalabre = "";
let seleccionarPalabra =  "codigo"
seleccionarPalabra =  seleccionarPalabra.split("")
function generarPalabra(){
    lapalabre = ""
    for (let index = 0; index < seleccionarPalabra.length; index++) {
       // document.getElementById("palabra").innerText += ` _ `
       lapalabre += `_`
    }
}
generarPalabra()

function cambiarPalabra(posicion,palabra){
    let palabras =  document.getElementById("palabra");
    //let aux = palabras.textContent.split("");
    let aux = lapalabre.split("");
    aux[posicion] = palabra
    //palabras.innerHTML = aux.join("")
    palabras = aux.join("")
    return palabras
    //No cambia la poisicon correcta
}

cambiarPalabra(1,"o")
cambiarPalabra(0,"c")
cambiarPalabra(2,"d")