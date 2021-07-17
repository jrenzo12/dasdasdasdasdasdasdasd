//declarando variable para los controles
var txtCor=document.getElementById("txtCor");
var txtCon=document.getElementById("txtCon");
var btnRegistrar=document.getElementById("btnRegistrar");
function Limpiar(){
    txtCor.value="";
    txtCon.value="";
    txtCor.focus()
}
function registrarUsuario(){
    if(txtCor.value=="" || txtCor.value==null){
        alert("Ingresa el correo");
        txtCor.focus();
    }else if(txtCon.value=="" || txtCon.value==null){
        alert("Ingrese la contraseña");
        txtCon.focus();
    }else{
        var cor=txtCor.value;
        var con=txtCon.value;
        // llamamos a la funcion de firebase
        auth.createUserWithEmailAndPassword(cor,con)
    .then((userCredential) => {
    // Signed in
    alert("se registro el usuario en firebase");
    // ...
    })
    .catch((error) => {
    alert("no se pudo registrar el usuario en firebase");
    // ..
    });
    }
};
btnRegistrar.addEventListener("click",registrarUsuario);