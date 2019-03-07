$(document).ready(
function()
	{
		$("#titulo_contacto").click(function(){tratarContacto();});
		$("#titulo_experiencia").click(function(){tratarExperiencia();});
	}
);
var contacto_oculto=true;
var experiencia_oculta=true;

function tratarContacto()
{//write less do more
$("#contenido_contacto").slideToggle();
var texto=$("#palabra_contacto").html();
if (texto=="Contraer"){
	$("#palabra_contacto").html("Expandir");
	$("#palabra_contacto").attr("class", "letra_verde");
	}else{
		$("#palabra_contacto").html("Contraer");
		$("#palabra_contacto").attr("class", "letra_rojo");
		}
	/*if(contacto_oculto==true)
	{
		//$("#contenido_contacto").show();
		$("#contenido_contacto").slideDown(500);
		$("#palabra_contacto").html("Contraer");
		contacto_oculto=false;//Ya no está oculta la capa de contacto
		//....innerHTML="nuevoi html";
		//("#contenido_contacto").fadeIn();
	}
	else{
		$("#contenido_contacto").slideUp(500);
		$("#palabra_contacto").html("Expandir");
		//Acabo de coultar la capa, por tanto:
		contacto_oculto=true;
		
	}*/
}
function tratarExperiencia()
{
		if(experiencia_oculta==true)
	{
		//$("#contenido_contacto").show();
		$("#contenido_experiencia").slideDown(500);
		$("#palabra_experiencia").html("Contraer");
		experiencia_oculta=false;//Ya no está oculta la capa de contacto
		//....innerHTML="nuevoi html";
		//("#contenido_contacto").fadeIn();
	}
	else{
		$("#contenido_experiencia").slideUp(500);
		$("#palabra_experiencia").html("Expandir");
		//Acabo de coultar la capa, por tanto:
		experiencia_oculta=true;
		
	}
}
