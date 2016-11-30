window.onload=manejarclick;
var cifra1;
cifra1="";

function manejarclick() {
   
   var num7=document.getElementById("num7");
	num7.addEventListener("click",function() {
								clicEn("7");
								});

	var num8=document.getElementById("num8");
	num8.addEventListener("click",function() {
								clicEn("8");
								});
	var num9=document.getElementById("num9");
	num9.addEventListener("click",function() {
								clicEn("9");
								});
    var division=document.getElementById("division");
	division.addEventListener("click",function() {
								clicEn("/");
								});

    var num4=document.getElementById("num4");
	num4.addEventListener("click",function() {
								clicEn("4");
								});
	var num5=document.getElementById("num5");
	num5.addEventListener("click",function() {
								clicEn("5");
								});
	var num6=document.getElementById("num6");
	num6.addEventListener("click",function() {
								clicEn("6");
								});
    var multipli=document.getElementById("multipli");
	multipli.addEventListener("click",function() {
								clicEn("*");
								});
	var num1=document.getElementById("num1");
	num1.addEventListener("click",function() {
								clicEn("1");
								});
	var num2=document.getElementById("num2");
	num2.addEventListener("click",function() {
								clicEn("2");
								});
	var num3=document.getElementById("num3");
	num3.addEventListener("click",function() {
								clicEn("3");
								});
	var resta=document.getElementById("resta");
	resta.addEventListener("click",function() {
								clicEn("-");
								});
	var num9=document.getElementById("num9");
	num9.addEventListener("click",function() {
								clicEn("9");
								});
    var borrar=document.getElementById("borrar");
	borrar.addEventListener("click",borrarpantalla);
								
	var num0=document.getElementById("num0");
	num0.addEventListener("click",function() {
								clicEn("0");
								});
	var igual=document.getElementById("igual");
	igual.addEventListener("click",operacion);

    var suma=document.getElementById("suma");
	suma.addEventListener("click",function() {
								clicEn("+");
								});
}

function clicEn(num){
	cifra1 +=num;
	var obser=document.getElementById("solucion");
	obser.textContent=cifra1;
}

function operacion(num){
	var resultado=eval(cifra1);
	var obser=document.getElementById("solucion");
	obser.textContent=resultado;
}

function borrarpantalla() { 
   var obser=document.getElementById("solucion"); 
   var ter=cifra1.slice(0,-1); 
   cifra1=ter; 
   obser.textContent=ter; 
}


               


