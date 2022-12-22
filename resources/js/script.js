var uno=document.getElementById("uno").value;
var dos=document.getElementById("dos").value;
var tres=document.getElementById("tres").value;
var cuatro=document.getElementById("cuatro").value;
var cinco=document.getElementById("cinco").value;
var seis=document.getElementById("seis").value;
var siete=document.getElementById("siete").value;
var ocho=document.getElementById("ocho").value;
var nueve=document.getElementById("nueve").value;
var resultado;
var texto="";
function sumaNumeros(num1,num2) {
    return num1+num2;
}

function restaNumeros(num1,num2) {
    return num1-num2;
}

function multiplicaNumeros(num1,num2) {
    return num1*num2;
}

function divideNumeros(num1,num2) {
    return num1/num2;
}

function imprimir(a) {
    texto=texto+a;
    document.getElementById("mostrar").innerHTML=texto;
}
