function cambiarColorBody(valor_color)
{
	var obj_body=document.getElementsByTagName("body")[0];
	obj_body.style.backgroundColor=valor_color;
}
function mostrarImg1(obj_imagen)
{
	//var obj_imagen=document.getElementsByTagName("img")[0];
	obj_imagen.src="PRUEBA_CAMBIO_IMAGEN/img1.jpg";
}
function mostrarImg2(obj_imagen)
{
	//var obj_imagen=document.getElementsByTagName("img")[0];
	obj_imagen.src="PRUEBA_CAMBIO_IMAGEN/img2.jpg";
}
/***************************************/
function crearParrafo()
{
	var objeto_parrafo=document.createElement("p");
	var objh_body=document.getElementsByTagName("body")[0];
	var texto=document.createTextNode("Buenos días");
	objeto_parrafo.appendChild(texto);
	objh_body.appendChild(objeto_parrafo);
}
function crearSelect()
{
	/*<select id="periodico">*/
	var objeto_select=document.createElement("select");
	objeto_select.id="periodico";
	//objeto_select.onchange=cambiarEnlace;
	objeto_select.onchange=function(){cambiarEnlace();}
	var obj_option1=document.createElement("option");
	var obj_option2=document.createElement("option");
	var obj_option3=document.createElement("option");
	var texto_1=document.createTextNode("El Pais");
	var texto_2=document.createTextNode("El Mundo");
	var texto_3=document.createTextNode("Marca");
	obj_option1.value="http://www.elpais.com";
	obj_option2.value="http://www.elmundo.es";
	obj_option3.value="http://www.marca.com";
	obj_option1.appendChild(texto_1);
	obj_option2.appendChild(texto_2);
	obj_option3.appendChild(texto_3);
	objeto_select.appendChild(obj_option1);
	objeto_select.appendChild(obj_option2);
	objeto_select.appendChild(obj_option3);
	document.getElementsByTagName("body")[0].appendChild(objeto_select);
}
function cambiarEnlace()
{//1ºTengo que cargarme (removeChild)
//Ver si ya hay un a
var lista_enlaces=document.getElementsByTagName("a");
if(lista_enlaces.length!=0)
{
	var padre_enlace=lista_enlaces[0].parentNode;
	padre_enlace.removeChild(lista_enlaces[0]);
}


	var seleccionado=document.getElementById("periodico").value;
	var obj_enlace=document.createElement("a");
	obj_enlace.href=seleccionado;
	obj_enlace.innerHTML="Ir a "+seleccionado;
	document.getElementsByTagName("body")[0].appendChild(obj_enlace);
}