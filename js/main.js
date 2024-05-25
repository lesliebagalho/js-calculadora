function clean(){
    document.getElementById("resultado").innerHTML = "";
}

function back(){
    let voltarNum = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = voltarNum.substring(0, voltarNum.length - 1);
}

function insert(num){
    let resultado = document.getElementById("resultado").innerHTML
    document.getElementById("resultado").innerHTML = resultado + num;
}

function calcular(){
    let resultado = document.getElementById("resultado").innerHTML;
    if(resultado){
        document.getElementById("resultado").innerHTML = eval(resultado);
    } else {
        document.getElementById("resultado").innerHTML = "";
    }
}