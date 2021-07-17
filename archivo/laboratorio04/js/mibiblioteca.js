var txtNom=document.getElementById("txtNom");
var txtApe=document.getElementById("txtApe");
var txtCor=document.getElementById("txtCor");
var rbMas=document.getElementById("rbMas");
var rbFem=document.getElementById("rbFem");
var rbOtr=document.getElementById("rbOtr");
var chkEst=document.getElementById("chkEst");
function validarNombre(){
    if(txtNom.value=="" || txtNom.value==null){
        error.style.display="block";
        error.innerHTML+="<li>Por favor ingresar sus nombres</li>";
    }else{
        error.style.display="none";
    }
}
function validarApellido(){
    if(txtApe.value=="" || txtApe.value==null){
        error.style.display="block";
        error.innerHTML+="<li>Por favor ingresar sus Apellido</li>";
    }else{
        error.style.display="none";
    }
}
function validarCorreo(){
    if(txtCor.value=="" || txtCor.value==null){
        error.style.display="block";
        error.innerHTML+="<li>Por favor ingresar su Correo</li>";
    }else{
        error.style.display="none";
    }
}
function validarSexo(){
    if(rbMas.checked==false && rbFem.checked==false && rbOtr.checked==false){
        error.style.display="block";
        error.innerHTML+="<li>Por favor seleccione un sexo</li>";
    }else{
        error.style.display="none";
    }
}
function validarEstado(){
    if(chkEst.checked==false){
        error.style.display="block";
        error.innerHTML+="<li>Por favor seleccione un Estado</li>";
    }else{
        error.style.display="none";
    }
}
function validar(){
    error.innerHTML="";
    validarNombre();
    validarApellido();
    validarCorreo();
    validarSexo();
    validarEstado();
}
function LlamarClase(m){
    error.style.display="block";
    error.innerHTML+="<li>"+m+"</li>"
}
function Registrar(){
    error.innerHTML="";
    if(txtNom.value=="" || txtNom.value==null){
        LlamarClase("Por favor ingresa tus nombres");
        LlamarClase("Por favor ingresa tus apellidos");
        LlamarClase("Por favor ingrese su correo");
        LlamarClase("Por favor seleccione su sexo");
        LlamarClase("Por favor seleccione el estado");
        txtNom.focus();
    }else if(txtApe.value=="" || txtApe.value==null){
        LlamarClase("Por favor ingresa tus apellidos");
        LlamarClase("Por favor ingrese su correo");
        LlamarClase("Por favor seleccione su sexo");
        LlamarClase("Por favor seleccione el estado");
        txtApe.focus();
    }else if(txtCor.value=="" || txtCor.value==null){
        LlamarClase("Por favor ingrese su correo");
        LlamarClase("Por favor seleccione su sexo");
        LlamarClase("Por favor seleccione el estado");
        txtCor.focus();
    }else if(rbMas.checked==false && rbFem.checked==false && rbOtr.checked==false){
        LlamarClase("Por favor seleccione su sexo");
        LlamarClase("Por favor seleccione el estado");
        rbMas.focus();
    }else if(chkEst.checked==false){
        LlamarClase("Por favor seleccione el estado");
        chkEst.focus();
    }else{
        alert("Se Registro Correctamente");
        error.innerHTML="";
    }
}