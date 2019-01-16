
function crearSelect()
{
	var valores_option=[
	{texto: "El Pais", valor: "http://www.elpais.com"},
	{texto: "El Mundo", valor: "http://www.elmundo.es"},
	{texto: "Marca", valor: "http://www.marca.com"},
	{texto: "as", valor: "http://www.AS.com"},
	
	]
	
	/*<select id="periodico">*/
	var objeto_select=document.createElement("select");
	objeto_select.id="periodico";
	
	for (i=0; i<valores_option.length; i++)
	{
		var elemento_option=document.createElement("option");
		var texto=document.createTextNode(valores_option[i].texto);
		elemento_option.appendChild(texto);
		elemento_option.value=valores_option[i].valor;
		objeto_select.appendChild(elemento_option);
	}
	
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