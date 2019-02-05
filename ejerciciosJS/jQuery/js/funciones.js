var objetos_pregunta=new Array();
var indice_pregunta=0;
$(document).ready(
function()
		{
			cargarXML();
				$("#btn_comprobar").click(function(){comprobar()});
				$("#texto_pregunta").hide();
		}
);
function cargarXML()
{
	$.get( "http://formadorestic.com/pasapalabra/carga.php?IDpartida=3000", function( data ) {
	tratarXML(data);
  
});
}

function tratarXML(texto_xml)
{
var parser = new DOMParser();
var xmlDoc = parser.parseFromString(texto_xml, "text/xml");
var lista_preguntas=xmlDoc.getElementsByTagName("pregunta");

for (i=0; i<lista_preguntas.length; i++)
	{
		var elemento_pregunta=lista_preguntas[i];
		var elemento_letra=elemento_pregunta.getElementsByTagName("letra")[0];
		var elemento_posicion=elemento_pregunta.getElementsByTagName("posicion")[0];
		var elemento_definicion=elemento_pregunta.getElementsByTagName("definicion")[0];
		var elemento_solucion=elemento_pregunta.getElementsByTagName("solucion")[0];
		var letra=elemento_letra.childNodes[0].nodeValue;
		var posicion=elemento_posicion.childNodes[0].nodeValue;
		var definicion=elemento_definicion.childNodes[0].nodeValue;
		var solucion=elemento_solucion.childNodes[0].nodeValue;
		var pregunta={letra:letra, posicion:posicion, definicion:definicion,solucion:solucion  };
		objetos_pregunta.push(pregunta);
	}
mostrarPregunta();
}
function mostrarPregunta()
{
	//Hasy que conocer la lista(o array) de preguntas y por qué pregunta vamos.
	var pregunta=objetos_pregunta[indice_pregunta];
	var aux=pregunta.posicion+" "+pregunta.letra+":"+pregunta.definicion;
	$("#texto_pregunta").text(aux);
	$("#texto_pregunta").fadeIn(1500);
}
function comprobar()
{
	var respuesta_usuario=$("#respuesta").val();
	var pregunta_actual=objetos_pregunta[indice_pregunta];
	var respuesta_correcta=pregunta_actual.solucion;
	if(respuesta_usuario.toUpperCase()==respuesta_correcta.toUpperCase())
	{		alert("Enhorabuena");	}
	else	{		alert("No, la respuesta era: "+respuesta_correcta);	}
	indice_pregunta++;
	$("#texto_pregunta").fadeOut(500, function(){mostrarPregunta();});
	
}