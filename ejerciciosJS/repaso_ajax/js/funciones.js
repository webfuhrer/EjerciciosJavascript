function crearDesplegable()
{
	/*<select id="partida" onchange="hacerPeticion();">
	<option value="1">Partida 1</option>
	<option value="2">Partida 2</option>
	</select>
	*/
	var obj_select=document.createElement("select");
	obj_select.id="partida";
	obj_select.onchange=function(){hacerPeticion();}
	for (i=1; i<432; i++)
	{
		var obj_option=document.createElement("option");
		obj_option.value=i;
		obj_option.innerText="Partida "+i;
		obj_select.appendChild(obj_option);
	}
	document.getElementById("capa_combo").appendChild(obj_select);
	
}
function hacerPeticion()
{
	var numero_partida=document.getElementById("partida").value;
	var url="http://formadorestic.com/MEMORY-CALCULOMENTAL/datosJSON/leeTablas.php?id="+numero_partida;
	var peticion=new XMLHttpRequest();
	//readyState 0 1 2 3 4
	//status 200 404 403
	peticion.onreadystatechange=function(){
		if(this.readyState==4 && this.status==200)
		{
			parsear(this.responseText);
		}
	}
	peticion
	peticion.open( "GET", url, true);
	peticion.send();
	
}
function parsear(texto_json)
{
	var obj_json=JSON.parse(texto_json);
	var indicaciones=obj_json.indicaciones;
	var lista_textos1=obj_json.texto1;
	var lista_textos2=obj_json.texto2;
	var objeto_javascript={indicaciones:indicaciones,texto1:lista_textos1,texto2:lista_textos2};
	//JSON ->Javascript Simple Object Notation
	pintarTabla(objeto_javascript);
}
function pintarTabla(objeto_js)
{
	document.getElementById("capa_tabla").innerHTML="";
	var obj_table=document.createElement("table");
	var obj_tr=document.createElement("tr");
	var obj_td=document.createElement("td");
	obj_td.colspan=2;
	obj_td.innerText=objeto_js.indicaciones;
	obj_tr.appendChild(obj_td);
	obj_table.appendChild(obj_tr);
	var lista_palabras1=objeto_js.texto1;
	var lista_palabras2=objeto_js.texto2;
	for (i=0; i<lista_palabras1.length; i++)
	{
		var objeto_tr=document.createElement("tr");
		var obj_td1=document.createElement("td");
		var obj_td2=document.createElement("td");
		obj_td1.innerText=lista_palabras1[i];
		obj_td2.innerText=lista_palabras2[i];
		objeto_tr.appendChild(obj_td1);
		objeto_tr.appendChild(obj_td2);
		obj_table.appendChild(objeto_tr);
	}
	
	document.getElementById("capa_tabla").appendChild(obj_table);
}

/*<table>
<tr><td colspan=2>...</td></tr>
<tr><td>...</td><td>...</td></tr>
<tr><td>...</td><td>...</td></tr>
</table>*/