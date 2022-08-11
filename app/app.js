function editarTexto() {    
    document.getElementById("edit-acercade").style.display="block";
    const texto = document.getElementById("text-acercade").innerHTML;
    console.log(texto);
       
}
function myFunction(valor){
    document.getElementById("text-acercade").innerHTML = valor;
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
