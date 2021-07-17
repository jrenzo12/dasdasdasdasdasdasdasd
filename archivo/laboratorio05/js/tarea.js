var registro=[];
function Registrar(nomregistro,aperegistro,corregistro,dnregistro){
    var NuevoRegistro={
        nombre:nomregistro,
        apellido:aperegistro,
        correo:corregistro,
        dni:dnregistro
    };
    registro.push(NuevoRegistro);
}
function Mostrar(){
    return registro;
}