var resultado;
var texto="";
var textoAuxiliar="";
var numero1=null;
var numero2=null;
var operando ="";
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
    if (numero1!=null) {
        textoAuxiliar=textoAuxiliar+a;
    }
}

function operador(a) {
    numero1=parseInt(texto);
    texto=texto+a;
    operando=a;
    document.getElementById("mostrar").innerHTML=texto; 
    textoAuxiliar="";
}
function resultadoFinal()
{
    
    numero2=parseInt(textoAuxiliar);
    alert(numero2);
    if (operando=="+") {
        resultado=sumaNumeros(numero1,numero2);   
    }
    else if (operando=="-")
    {
        resultado=restaNumeros(numero1,numero2);
    }

    else if (operando=="*")
    {
        resultado=multiplicaNumeros(numero1,numero2);
    }
    else if (operando=="//")
    {
        resultado=divideNumeros(numero1,numero2);
    }
    document.getElementById("mostrar").innerHTML=resultado;
}


































/*var uno=document.getElementById("uno").value;
var dos=document.getElementById("dos").value;
var tres=document.getElementById("tres").value;
var cuatro=document.getElementById("cuatro").value;
var cinco=document.getElementById("cinco").value;
var seis=document.getElementById("seis").value;
var siete=document.getElementById("siete").value;
var ocho=document.getElementById("ocho").value;
var nueve=document.getElementById("nueve").value;*/