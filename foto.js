function ImagenesAleatorias()
{
  n=0;
  this[n++]="mario11.jpg";
  this[n++]="mario22.jpg";
  this[n++]="mario33.jpg";
  this[n++]="mario44.jpg";
  this[n++]="mario55.jpg";
  this[n++]="mario66.jpg";
  this[n++]="mario77.jpg";
  this[n++]="mario88.jpg";
  this[n++]="mario99.jpg";
  this[n++]="mario100.jpg";

  this.N=n;
}
var Imagenes=new  ImagenesAleatorias();
src= Imagenes[ Math.floor(Math.random() * Imagenes.N) ] ;
document.write("<IMG src="+src+">");


var i = 0;
 
function Contador()
{
i = i + 50;
var btn = document.getElementById("boton");
if(i<=250){
btn.value = "Calificar: (" + i + ")";
}else{
btn.value = "Es la puntuacion maxima: " + 250;
}
}