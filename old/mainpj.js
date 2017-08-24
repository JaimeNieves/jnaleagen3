// Generador aleatorio JN
// v0.3

function ComprobarModo (){
	// Comprueba qué radiobutton está activo
	
	rad = $("#select1 option:selected").val();
	console.log("Se eligió " + rad);
	return rad;
}

function Generar ( ) {
	
	var personaje = "";
	
	var miMotivacion = aleajn.chooseTwo(motivacionPrincipal,motivacionPrincipalEx);
	personaje += "<<b>Motivación principal: </b></th><th>" + miMotivacion[0] + " <i>(" + aleajn.choose(conector) + " " + miMotivacion[1] + ")</i></th><br><br>";
	personaje += "<b>Tendencia emocional: </b>" + aleajn.cap(aleajn.choose(tendenciaEmocional)) + ".<br>";
	
	var miEstabilidad = aleajn.chooseTwo(estabilidadCaracter,estabilidadCaracterEx);
	personaje += "<b>Estabilidad de carácter: </b>" + aleajn.cap(miEstabilidad[0]) + " <i>(" + miEstabilidad[1] + ")</i><br><br>";
	
	personaje += "<b>Visión del mundo: </b>" + aleajn.cap(aleajn.choose(visionMundo)) + ".<br>";
	personaje += "<b>Integridad: </b>" + aleajn.cap(aleajn.choose(integridad)) + ".<br>";
	personaje += "<b>Impulsividad: </b>" + aleajn.cap(aleajn.choose(impulsividad)) + ".<br>";
	personaje += "<b>Valentía: </b>" + aleajn.cap(aleajn.choose(valor)) + ".<br>";
	personaje += "<b>Trato con los demás: </b>" + aleajn.cap(aleajn.choose(trato)) + ".<br>";
	personaje += "<b>En la relaciones es: </b>" + aleajn.cap(aleajn.choose(relaciones)) + ".<br>";
	personaje += "<b>Comportamiento social: </b>" + aleajn.cap(aleajn.choose(comportamiento)) + ".<br>";
	personaje += "<b>Sentido del humor: </b>" + aleajn.cap(aleajn.choose(sentidoHumor)) + ".<br>";
	personaje += "<b>Tema de conversación preferido: </b>" + aleajn.cap(aleajn.choose(conversacion)) + ".<br><br>";
	
	personaje += "<b>Afición: </b>" + aleajn.cap(aleajn.choose(aficionesHobbies)) + ".<br>";
	
	personaje +="</table>";
	
	
	
	
	return personaje;
}