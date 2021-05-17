//Variables globales
var dato;
var oper;
//Funciones
function operacion(operador){
    dato= parseInt(document.getElementById("resultado").value);
    document.getElementById("resultado").value=0;
    oper=operador;
}

function igual(){
    var num = parseInt(document.getElementById("resultado").value);
    switch(oper){
        case "+":
            document.getElementById("resultado").value=dato+num;
            break;
        case "-":
            document.getElementById("resultado").value=dato-num;
            break;
        case "*":
            document.getElementById("resultado").value=dato*num;
            break;
        case "÷":
            document.getElementById("resultado").value=dato/num;
            break;

    }
}

function col(num){
    var antes=document.getElementById("resultado").value;
    if (antes==0){
        document.getElementById("resultado").value=num;
    }
    else{
        document.getElementById("resultado").value=antes+num;
    }
}

function limpiar(){
    document.getElementById("resultado").value=0;
}