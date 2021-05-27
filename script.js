function cargar() {
  document.getElementById("challenge").style.display = "none";
  document.getElementById("seleccion1").style.display = "none";
  document.getElementById("seleccion2").style.display = "none";
}
function genero(){
  document.getElementById("seleccion1").style.display = "initial";
  document.getElementById("bloqueo2").style.display = "none";
}
function bloqueo2(){
  document.getElementById("bloqueo2").style.display = "none";
}
function letras(){
  document.getElementById("seleccion2").style.display = "initial";
  document.getElementById("bloqueo1").style.display = "none";
}
function bloqueo1(){
  document.getElementById("bloqueo1").style.display = "none";
}

function habilitarReto(){

  if (document.getElementById("minombre").value == "") {
    alert("ingrese su nombre,el campo no puede estar vacio");

  } else {
    document.getElementById("challenge").style.display = "initial";
    let nombre = document.getElementById("minombre").value;
    let saludo = "Hola " + nombre;
    document.getElementById("welcome").style.display = "none";
    document.getElementById("nombre").innerHTML = saludo;
    document.getElementById("minombre").value = "";
  }


}