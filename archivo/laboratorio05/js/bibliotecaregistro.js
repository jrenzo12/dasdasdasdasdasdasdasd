var txtNom=document.getElementById("txtNom");
var txtApe=document.getElementById("txtApe");
var txtCor=document.getElementById("txtCor");
var btnRegistrar=document.getElementById("btnRegistrar");

function MostrarRegistro(){
    var listaregistro=Mostrar();
    var tbody=document.querySelector("#tbRegistro tbody");
    tbody.innerHTML="";
    for(var i=0;i<listaregistro.length;i++){
        var fila=tbody.insertRow(i);
        var titulonom=fila.insertCell(0);
        var tituloape=fila.insertCell(1);
        var titulocor=fila.insertCell(2);
        titulonom.innerHTML=listaregistro[i].nombre;
        tituloape.innerHTML=listaregistro[i].apellido;
        titulocor.innerHTML=listaregistro[i].correo;
        tbody.appendChild(fila);
    }
}
//creamos un procedimiento para registrar los datos
function RegistrarDatos(){
    var nom=txtNom.value;
    var ape=txtApe.value;
    var cor=txtCor.value;
    Registrar(nom,ape,cor);
    MostrarRegistro();
    
}
//agregar evento
// btnRegistrar.addEventListener("click", function(){
//     alert("hola");
// });
// creamos un procedimiento para msotrar el mensaje

// function Mensaje(){
//     alert("hola");
// }
// btnRegistrar.addEventListener("click",Mensaje);



// llamamos al procedimiento registrar en el evento del boton
btnRegistrar.addEventListener("click",RegistrarDatos);