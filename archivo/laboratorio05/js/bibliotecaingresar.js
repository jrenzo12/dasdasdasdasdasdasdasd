var txtCor=document.getElementById("txtCor");
var txtCon=document.getElementById("txtCon");
var btnIngresar=document.getElementById("btnIngresar");
function Limpiar(){
    txtCor.value="";
    txtCon.value="";
    txtCor.focus="";

}
function ValidarUsuario(){
    if(txtCor.value=="" || txtCor.value==null){
        alert("ingrese su correo");
        txtCor.focus();
    }else if(txtCon.value=="" || txtCon.value==null){
        alert("ingrese su contraseña");
        txtCon.focus();
    }else{
        var cor=txtCor.value;
        var con=txtCon.value;
        auth.signInWithEmailAndPassword(cor,con)
  .then((userCredential) => {
    alert("Bienbenido al sistema");
    window.location="pagina11.html"
  })
  .catch((error) => {
    alert("usuario o contraseña no valida");
    Limpiar();
  });
    }
};
btnIngresar.addEventListener("click",ValidarUsuario);
