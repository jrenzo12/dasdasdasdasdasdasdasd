function Cargar(url,titulo,ancho,alto){
    var anc=screen.width;
    var alt=screen.height;
    // alert(anc);
    // alert(alt);
    var x=(anc/2)-(ancho/2);
    var y=(alt/2)-(alto/2);
    // alert(x);
    // alert(y);
    window.open(url,titulo,"width"+ancho+",height="+alto+"left="+x+",top="+y+",scrollbars=No");
}
window.onload=Cargar("pagina4.html","Ventana Energente",400,400);