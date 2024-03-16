/*Referências para a troca
A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"
*/

var textoEntrada = document.querySelector('.texto__digite__aqui');
var textoSaida = document.querySelector('.texto__traduzido');

function criptografar(){
    var texto = textoEntrada.value;

    var resultadoTexto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober")
    .replace(/u/g, "ufat");

    textoSaida.innerHTML = resultadoTexto;

}

function desccriptografar(){
    var texto = textoEntrada.value;

    var resultadoDesTexto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a")
    .replace(/ober/g, "o").replace(/ufat/g, "u");

    textoSaida.innerHTML = resultadoDesTexto;
}

function copiar(){
    
    textoSaida.select(); 
    document.execCommand('copy');
    console.log("Texto copiado!");
    var divOculta = document.getElementById('texto__saida__alerta');
    divOculta.style.display = 'block';
    
}