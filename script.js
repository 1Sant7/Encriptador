var botonEncriptar = document.querySelector(".boton_encriptar");
var botonDesencriptar = document.querySelector(".boton_desencriptar");
var muniecoImg = document.querySelector(".cuadro_munieco");
var muniecoText = document.querySelector(".texto_munieco");
var contenedor = document.querySelector(".cuadro_muñeco_resultado");
var resultado = document.querySelector(".texto_resultado");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar(){
    ocultarAdelante();
    var ingrese_texto = recuperarTexto();
    resultado.textContent = encriptarTexto(ingrese_texto);
}

function desencriptar(){
    ocultarAdelante();
    var ingrese_texto = recuperarTexto();
    resultado.textContent = desencriptarTexto(ingrese_texto);
}

function recuperarTexto(){
    var ingrese_texto = document.querySelector(".ingrese_texto");
    return ingrese_texto.value;
}

function ocultarAdelante(){
    muniecoImg.classList.add("ocultar");
    muniecoText.classList.add("ocultar");
}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai";
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter";
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes";
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober";
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat";
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i=0; i<texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a";
            i = i + 1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e";
            i = i + 4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i";
            i = i + 3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o";
            i = i + 3;
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u";
            i = i + 3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }   
    return textoFinal;
}

const botonCopiar = document.querySelector(".btn_copiar");
    botonCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".texto_resultado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("hola");
})


