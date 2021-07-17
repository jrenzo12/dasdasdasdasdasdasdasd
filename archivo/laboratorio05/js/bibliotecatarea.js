var txtNom=document.getElementById("txtNom");
var txtApe=document.getElementById("txtApe");
var txtDni=document.getElementById("txtDni");
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
        var titulodni=fila.insertCell(3);
        titulonom.innerHTML=listaregistro[i].nombre;
        tituloape.innerHTML=listaregistro[i].apellido;
        titulocor.innerHTML=listaregistro[i].correo;
        titulodni.innerHTML=listaregistro[i].dni;
        tbody.appendChild(fila);
    }
}
//creamos un procedimiento para registrar los datos
function RegistrarDatos(){
    var nom=txtNom.value;
    var ape=txtApe.value;
    var cor=txtCor.value;
    var dni=txtDni.value;
    Registrar(nom,ape,cor,dni);
    MostrarRegistro();
    
}
btnRegistrar.addEventListener("click",RegistrarDatos);