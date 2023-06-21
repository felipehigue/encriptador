var btn_encriptar = document.querySelector(".boton_encriptar");
var btn_desencriptar = document.querySelector(".boton_desencriptar");
var ilustracion = document.querySelector(".ilustracion");
var parrafo = document.querySelector(".parrafo");
var resultado = document.querySelector(".texto_final");
var texto = document.querySelector(".cajatexto");

btn_encriptar.onclick = encriptar;
btn_desencriptar.onclick = desencriptar;

function encriptar() {
    ocultarDelante();
    var texto = recuperarTexto();
    var encripta = encriptarTexto(texto);
    resultado.textContent = encripta;


}


function desencriptar() {
    ocultarDelante();
    var texto = recuperarTexto();
    var desencripta = desencriptarTexto(texto);
    resultado.textContent = desencripta;


}

function recuperarTexto() {
    var texto = document.querySelector(".cajatexto");
    return texto.value;




}

function ocultarDelante() {
    ilustracion.style.display = "none";
    parrafo.style.display = "none";

}

function encriptarTexto(mensaje) {
    var resultado = mensaje;
    var resultadof = "";
    for (let i = 0; i < resultado.length; i++) {

        if (resultado[i] == "a") {
            resultadof += "ai";


        } else if (resultado[i] == "e") {
            resultadof += "enter";


        } else if (resultado[i] == "i") {
            resultadof += "imes";


        } else if (resultado[i] == "o") {
            resultadof += "ober";


        } else if (resultado[i] == "u") {
            resultadof += "ufat";

        } else {
            resultadof += resultado[i];
        }

    }
    return resultadof;
}

function desencriptarTexto(mensaje) {
    var resultado = mensaje;
    var resultadof = "";
    for (let i = 0; i < resultado.length; i++) {

        if (resultado[i] == "a") {
            resultadof += "a";
            i += 1;


        } else if (resultado[i] == "e") {
            resultadof += "e";
            i += 3;


        } else if (resultado[i] == "i") {
            resultadof += "i";
            i += 3;

        } else if (resultado[i] == "o") {
            resultadof += "o";
            i += 3;

        } else if (resultado[i] == "u") {
            resultadof += "u";
            i += 3;
        } else {
            resultadof += resultado[i];
        }

    }
    return resultadof;
}

var boton_copiar = document.querySelector(".copiar");
boton_copiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".texto_final").textContent;
    navigator.clipboard.writeText(contenido);


})