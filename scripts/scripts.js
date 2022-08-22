const entrada1 = document.getElementById("entrada1");
const btn = document.getElementById("guardar");
const pResult = document.getElementById("textoFinal");

function editarTexto() {    
    document.getElementById("entrada1").style.display="block";
    document.getElementById("guardar").style.display="block";
       
}
function btnOnClick(){

    pResult.innerText = entrada1.value;
    document.getElementById("guardar").style.display="none";
    document.getElementById("entrada1").style.display="none";
}
/*
const h1=document.querySelector('h1');
const input1=document.querySelector('#calculo1');
const input2=document.querySelector('#calculo2');
const btn=document.querySelector('#btnCalcular');
const pResult=document.querySelector('#result');
function btnOnClick(){
    //const sumaInputs=input1.value+input2.value;
    //pResult.innerText="Resultado: "+sumaInputs;
    pResult.innerText=input1.value;
}


function myFunction(valor){
    document.getElementById("textoFinal").innerHTML = valor;
}
function logMessage(message){
    console.log(message + "<br>");
}
let textarea = document.getElementById("edit-acercade")
textarea.addEventListener('keyup',(e) =>{
    logMessage('key "${e.key}" released {event: keyup}');
    if(e.key=="Enter"){
        document.getElementById("edit-acercade").style.display="none"
    }
});
*/