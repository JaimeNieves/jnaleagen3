// Generador aleatorio JN
// v0.3

function ComprobarModo (){
	// Comprueba qué radiobutton está activo
	
	rad = $("#select1 option:selected").val();
	console.log("Se eligió " + rad);
	return rad;
}

function ComprobarModoNombre(){
	nmbelec = $("#selectnom option:selected").val();
	console.log("Se eligieron los nombres de la lista " + $("#selectnom option:selected").text());
	return nmbelec;
}

function Generar ( modo , modonombre ) {
	// Genera un resultado en función del modo elegido.
	// Debe añadirse código según se añadan generadores
	
	switch ( modo ){
		
		case "Nada":
		
			return "Elige una opción";
			break;
		
		case "Trama":
			var trama = "<b>En esta aventura...</b><br><br>";
			
			trama += "La misión de los personajes implica " + aleajn.choose(tramaAccion) + ".<br>";
			trama += "Tiene que ver con " + aleajn.choose(tramaPersonaje) + " y con " + aleajn.choose(tramaObjeto) + ".<br>";
			trama += "Les ha contratado " + aleajn.choose(tramaPersonaje) + ".<br>";
			trama += "Sin embargo, " + aleajn.choose(tramaComplicacion) + ".";
			
			return trama;
			break;
			
		case "Prestigio":
			var prestigio = aleajn.title(aleajn.choose(cpClase));
			prestigio += " " + aleajn.choose(cpClase);
			
			if (aleajn.d20(10)){ 
				prestigio += " " + aleajn.choose(cpObjeto); 
			} else { 
				prestigio += " " + aleajn.choose(cpAdjetivo); 
			}
			
			return aleajn.title(prestigio);
			break;
		
		case "Personaje":
			var personaje = "";
			personaje += aleajn.title(aleajn.choose(pj1raza)) + ", ";
			
			var clase = aleajn.choose (cpClase) +" " + aleajn.choose(cpClase);
			
			if (aleajn.d20(12)){ 
				clase += " " + aleajn.choose(cpObjeto); 
			} else { 
				clase += " " + aleajn.choose(cpAdjetivo); 
			}
			
			personaje += " " + aleajn.title(clase);
			
			personaje += ".<br><br>";
			
			personaje += aleajn.cap(aleajn.choose(pj2origen)) + ", " + aleajn.choose(pj3infancia);
			personaje += " " + aleajn.choose(pj4juventud) + ". ";
			personaje += aleajn.cap(aleajn.choose(pj5porello)) + " ";
			personaje += aleajn.choose(pj6persigue) + " " + aleajn.choose(pj7loquepersigue) + ".";
			
			return personaje;
			break;
			
		case "Dungeon":
			var dungeon = "Este lugar parece ser utilizado como <b>" + aleajn.choose(dungeonUso) + "</b>.";
			dungeon += "<br><br>" + "Puedes ver " + aleajn.choose(dungeonObjeto) + " y " + aleajn.choose(dungeonObjeto) + ".";
			dungeon += "<br>" + "Además, " + aleajn.choose(dungeonEvento) + ".";
			
			return dungeon;
			break;

	
		/*case "Gancho": 
			var medieval = [];
			var respuesta = "<b>Esta historia trata sobre:</b><br><br>";
			
			medieval.push(primeraEnMays(anadeArticulo(elegir(lista[30]))));
			medieval.push(primeraEnMays(elegir(lista[31])));
			for (i=32; i < 37; i++){
				medieval.push(primeraEnMays(anadeArticulo(elegir(lista[i]))));
			}
			
			for (j=0; j < medieval.length; j++){
				respuesta = respuesta + medieval[j] + "<br>";
			}
			
			return respuesta;
			break;
			
		
		case "Personaje":
			var personaje = [];
			var respuesta = "<b>Mira a quiénes te has encontrado:</b><br><br>";
			
			personaje.push(computeMarkov(aleatEntre(1,32),1) + " es un " + elegir(lista[25]) + " " + elegir(lista[26]) + ", ");
			personaje.push(elegir(lista[27]));
			personaje.push(" y " + elegir(lista[27]) + ".<br>");
			personaje.push(primeraEnMays (elegir(lista[28]) )+ " y " + elegir(lista[29]) + ".<br><br>");
			
			personaje.push(computeMarkov(aleatEntre(1,32),1) + " es un " + elegir(lista[25]) + " " + elegir(lista[26]) + ", ");
			personaje.push(elegir(lista[27]));
			personaje.push(" y " + elegir(lista[27]) + ".<br>");
			personaje.push(primeraEnMays (elegir(lista[28]) )+ " y " + elegir(lista[29]) + ".");
			personaje.push();
			
			for (j=0; j < personaje.length; j++){
				respuesta = respuesta + personaje[j];
			}
			
			return respuesta;
			break;

		case "Cuentos":
			var cuento = [];
			var respuesta = "<b>Érase una vez...</b><br><br>";
			
			cuento.push("El protagonista de este cuento es " + elegir(lista[5]) + " que desea con todas sus fuerzas " + elegir(lista[6]) + ".<br>");
			cuento.push("Su mejor amigo es " + elegir(lista[5]) + ", y su enemigo es " + elegir(lista[7]) + ".<br>");
			cuento.push("La historia transcurre en " + elegir(lista[11]) + ", y nuestro héroe tendrá que enfrentarse a " + elegir(lista[8]) + ".<br>");
			cuento.push("Para lograr lo que desea necesitará " + elegir(lista[9]) + ", y al final " + elegir(lista[10]) + ".");
			
			for (j=0; j < cuento.length; j++){
				respuesta = respuesta + cuento[j];
			}
			
			return respuesta;
			break;
			
		case "Trampas":
			var trampa = [];
			var respuesta = "<b>¡Acabas de activar una trampa!</b><br><br>";
			
			trampa.push("Esta trampa emplea los siguientes elementos: <b>" + elegir(lista[22]).toLowerCase() + ", " + elegir(lista[22]).toLowerCase() + "</b>.<br>");
			trampa.push("La trampa te va a <b>" + elegir(lista[23]).toLowerCase() + "</b>.<br>");
			trampa.push("Qué desencadenó la trampa: <b>" + anadeArticulo(elegir(lista[24]))+ "</b>.<br>");
			
			for (j=0; j < trampa.length; j++){
				respuesta = respuesta + trampa[j];
			}
			
			return respuesta;
			break;
			
		case "Dungeon":
			var dungeon = [];
			var respuesta = "<br>";
			
			dungeon.push("Este lugar parece ser utilizado como <b>" + elegir(lista[39]) + "</b>.<br>");
			dungeon.push("Puedes ver " + elegir(lista[37])+ " y " + elegir(lista[37]) + ".<br>");
			dungeon.push("Además, " + elegir(lista[38])+ ".<br>");
			
			for (j=0; j < dungeon.length; j++){
				respuesta = respuesta + dungeon[j];
			}
			
			return respuesta;
			break;		
		
		case "Motivacion":
			var motivacion = [];
			var respuesta = "<br>";
			
			motivacion.push("En esta historia, " + elegir(lista[44]) + " " + elegir(lista[45]) + " " + elegir(lista[44]) + ".<br>");
			motivacion.push("Todo tiene que ver con " + elegir(lista[2]) + " en " + anadeArticulo(elegir(lista[32])) + ".");
			
			for (j=0; j < motivacion.length; j++){
				respuesta += motivacion[j];
			}
			
			return respuesta;
			break;
		
		case "Simbolo":
			var respuesta =  "<br>";
			
			respuesta += "Este escudo tiene " + elegir(lista[40]) + " " + elegir(lista[41]) +" sobre campo " + elegir(lista[42]) + ".<br><br>";
			respuesta += "Este emblema representa " + elegir(lista[40]) + " y " + elegir(lista[40]) + " de color " + elegir(lista[43]) + ".<br>";
			
			return respuesta;
			break;
		
		case "Deidad":
			var deidad = "<br>";
			
			var deidadg = "esta diosa";
			var adorarg = "adorada";
			if ( d20(10) ) { 
				deidadg = "este dios";
				adorarg = "adorado";
			}
			
			deidad += "Las esferas de poder de " + deidadg +  " son " + elegir(lista[46]) + " y " + elegir(lista[46]) + ". ";
			deidad += "Es " + adorarg + " comúnmente por " + elegir(lista[47]) + ".<br>";
			deidad += "Sus clérigos suelen " + elegir(lista[48]) + ", y sus rituales incluyen " + elegir(lista[49]) + " y " + elegir(lista[49]) + ".<br>";
			deidad += "Su símbolo sagrado es " + elegir(lista[40]) + " y " + elegir(lista[40]) + " de color " + elegir(lista[43]) +  ". Construyen sus templos " + elegir(lista[50]) + ".";
			
			return deidad;
			break;
			
		case "Taberna":
			var taberna = "¡Bienvenidos a la taberna de <b>";
			
			var tabernombre = elegir(lista[15]) + " y " + elegir(lista[15]);
			if ( d20 (10 )){
				var tabernombre1 = elegir(lista[15]);
				var tabernombre2 = elegir(lista[16]);
				var miGen = generoConArticulo (tabernombre1);
				
				var tabernombre3 = elegirGeneroAdjetivo( tabernombre2, miGen );
				tabernombre = tabernombre1 + " " + tabernombre3;
			}
			
			taberna += maysTitulo(tabernombre) + "</b>!<br><br>";
			
			var propietario = "El tabernero";
			//if ( d20(10) ){ propietario = "La tabernera"; }
			
			taberna += propietario + " se llama " + computeMarkov(aleatEntre(1,32),1) + " y es un " + elegir(lista[26]) + " " + elegir(lista[27]) + ", que en otros tiempos fue un " + elegir(lista[25]) + ".<br><br>";
			taberna += "Aquí sirven " + elegir(lista[17]) + " de " + elegir(lista[18]) + " con " + elegir(lista[19]) + " y " + elegir(lista[19]) + ", regado con " + elegir(lista[20]) + " de " + elegir(lista[21]) + ".<br><br>";
			var numMesas = aleatEntre(1,10)+aleatEntre(1,10);
			var numCamas = aleatEntre(1,8)+aleatEntre(1,8);
			taberna += "Esta taberna dispone de " + numMesas + " mesas y " + numCamas + " camas.<br><br>";
			taberna += "Se encuentra cerca de " + maysTitulo(elegir(lista[55])) + " " + maysTitulo(elegir(lista[56])) + ".";
			
			return taberna;
			break;
		
		case "Objeto":
			var objeto = "Has encontrado:<br><br>";
			
			objeto1 = elegir(lista[12]);
			objeto2 = elegir(lista[13]);
			if ( objeto1.substring(0,2).toLowerCase() == "la" ){
				objeto2 = convierteAdjetivoAFemenino(objeto2);
			}
			
			objeto += objeto1 + " " + objeto2 + " " + elegir(lista[14]) + "<br>";
				
			objeto1 = elegir(lista[14]);
			objeto2 = elegir(lista[13]);
			switch (genero(objeto)){
				case "ms":
					objeto2 = objeto2;
					break;
					
				case "mp":
					objeto2 = objeto2 + "s";
					break;
					
				case "fs":
					objeto2 = convierteAdjetivoAFemenino(objeto2);
					break;
					
				case "fp":
					objeto2 = convierteAdjetivoAFemenino(objeto2) + "s";
					break;
			}
			
			objeto += elegir(lista[12]) + " " + objeto1 + " " + objeto2 + " " + "<br>";
				
			
			return objeto;
			break;
			
		case "Leyenda":
			var leyenda = "<b>Los bardos hablan de...</b><br><br>";
			
			var ls = [];
			ls[0] = primeraEnMays(elegir(lista[57]));
			leyenda += ls[0];
			var lsAnt = 0;
			
			for (r=1;r < aleatEntre(2,5);r++){
				
				if ( d20(12) ){ 
					// Cogemos un adjetivo
					var miAdj = elegir(lista[58]);
					var miGen = generoConArticulo (ls[lsAnt]);
					ls[r] = elegirGeneroAdjetivo( miAdj, miGen );
					leyenda += " " + ls[r];
					
				} else {
					// Cogemos otro objeto
					ls[r] = elegir(lista[57]);
					if ( ls[r].slice(0,3) == "el " ){ 
						leyenda += " d" + ls[r];
					}
					else {
						leyenda += " de " + ls[r];
					}
					lsAnt = r;
				}
				
			}
			
									
			return leyenda + ".";
			break;
			
		case "Pocion":
			var pocion = "<br>";
			
			pocion += elegir(lista[52]) + " es de color " + elegir(lista[43]) + ", y " + elegir(lista[51]) + ".<br>";
			pocion += "Un efecto secundario es que " + elegir(lista[53]) + ".";
		
			return pocion;
			break;

		case "Nombres":
		
			var nombre = "<br>";
			var ln = Number(modonombre);
			
			var miLista = computeMarkov(ln,7);
			
			for ( yy = 0; yy < miLista.length ; yy++ ){
				nombre += "<br>" + miLista[yy] ;
			}
			
			return nombre;
			break;
			
		case "Frases":
		
			var frase ="<br>Crea una historia que incluya las siguientes frases:<br><br>";
			
			for (f=1; f<4; f++){
				frase += elegir(lista[59]) + ".<br>";
				} 
			
			return frase;
			break;
		
		case "Lugar":
			
			var lugar = "<br>";
			
			lugar += elegir(lista[54]) + "...<br><br>"
		
			lugar += maysTitulo(elegir(lista[55])) + " " + maysTitulo(elegir(lista[56])) + "<br>";
			lugar += maysTitulo(elegir(lista[55])) + " " + maysTitulo(elegir(lista[56])) + "<br>";
			
			return lugar;
			break;*/
	}

}


// =============================================================================================
// =============================================================================================

/*
 function Iniciar( csvFile, separador ){

	 $.ajax({
			type: "GET",
			url: csvFile,
			dataType: "text",
			success: function(data) { 
				//Parseamos el CSV. Devolvemos un array de filas
				miArray = CSVToArray( data, separador );
				
				//Usamos la primera fila para detectar el nº de columnas
				var numCol = miArray[0].length;
				
				//Creamos un array de arrays para almacenar las columnas
				for (col=0; col < numCol; col++){
					lista[col] = [];
					for (fila=0; fila < miArray.length-1; fila++) {
						
						if (miArray[fila][col] != "" && miArray[fila][col] != null) {
							lista[col].push( miArray[fila][col] );
							}
					}
				}
						
				console.log("Listas creadas");
			}
		
	});
	
}

function MarkovInit ( csv , separador ){
	// Calcula cadenas de Markov a partir de listas de nombres
	
	var numCol = 0;
	
	$.ajax({
			//Parseamos la lista
			type: "GET",
			url: csv,
			dataType: "text",
			success: function(data) { 
				//Parseamos el CSV. Devolvemos un array de filas
				miArray = CSVToArray( data, separador );
				
				//Usamos la primera fila para detectar el nº de columnas
				numCol = miArray[0].length;

				
				//Creamos un array de arrays para almacenar las columnas
				for (col=0; col < numCol; col++){
					nombres[col] = [];
					for (fila=0; fila < miArray.length-1; fila++) {
						
						if (miArray[fila][col] != "" && miArray[fila][col] != null) {
							nombres[col].push( miArray[fila][col] );
							}
					}
				}
						
				console.log("Listas de Markov creadas");
			}
			
	});
	

}

function computeMarkov( indice , numero ){
	
	markov = {};
	var listaNombres = nombres[indice];
	var longitud = [];

	// Iteramos para cada nombre de la lista (la primera fila es el título):
	for ( var n = 1 ; n < listaNombres.length ; n++ ){
		
		var miNombre = listaNombres[n];
		longitud.push(miNombre.length);
		var letras = miNombre.split('');
		var prev = '';
		var letra = '';
		
		// Iteramos para cada letra:
		for ( l = 0 ; l < letras.length ; l++ ){
			if ( !markov[prev]){
				markov[prev] = [];
			}
			letra = letras[l];
			markov[prev].push(letra);
			prev = letra;	
		}
		//Almacenamos el final
		if ( !markov[prev]){
				markov[prev] = [];
			}
		markov[prev].push("."); 

	}
	
	// Creamos tantas palabras como especifique el argumento de la llamada
			
	var respuesta = [];
	for ( ix = 0 ; ix < numero ; ix++){
		
		var nuevaPalabra = "";
		var estado = '';
	

		while ( estado != "." ) {
			var siguiente = markov[estado].random();
			if (siguiente != "." ){
				nuevaPalabra += siguiente;
			}
			estado = siguiente;
		}
		
		// Descartamos las palabras demasiado largas o demasiado cortas
		if ( nuevaPalabra.length < longitud.min() || nuevaPalabra.length > longitud.max()){
			ix = ix-1;
			continue;
		}

		respuesta.push(nuevaPalabra);
	}

	return respuesta;
	

}
	
Array.prototype.random = function(){
	 return this[Math.floor(Math.random() * this.length)];

};

Array.prototype.max = function() {
  return Math.max.apply(null, this);
};

Array.prototype.min = function() {
  return Math.min.apply(null, this);
};
	

function elegir( columna ){
		
	// Seleccionar un elemento aleatoriamente de un array usando el momento actual como semilla
	var instante = new Date();
	
	var miAleatorio = Math.random(instante.getTime());
		
	var miElemento = Math.floor( miAleatorio * ( columna.length - 2 ) ) + 1;
	
	return columna[miElemento];

}



function primeraEnMays(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function maysTitulo ( string ){
	var misPalabras = string.toLowerCase().split(" ");
	var nuevasPalabras = "";
	var excepciones = ["el","la","los","las","de","del","y"];
	for ( i = 0 ; i < misPalabras.length ; i++ ){
		if ( excepciones.indexOf(misPalabras[i]) > -1 ) {
			nuevasPalabras += " " + misPalabras[i];
			continue;
		}
		nuevasPalabras += " " + primeraEnMays(misPalabras[i]);
	}
	return nuevasPalabras.slice(1);
	
}

function d20(cd) {
	if ( aleatEntre (1,20) >= cd){
		return true;
	}	
	else { 
		return false;
	}
	
}

function aleatEntre (inf,sup) {
	var instante2 = new Date();
	
	var miAleatorio2 = Math.random(instante2.getTime());
		
	return Math.round ( inf + Math.floor( miAleatorio2 * (sup - inf) ));
}


function dados(n,m){
	// Tira ndm
	var tirada = 0;
	for ( i = 1; i < n+1; i++){
		tirada += aleatEntre(1,m);
	}
	return tirada;
}

function generoConArticulo( palabra ){
	// Devuelve el género y el número de un término que incluye artículo
	
	var pc = palabra.slice(0,3);
	console.log(pc);
	switch ( pc.toLowerCase() ){
		
		case "el ":
			return "ms";
			break;
		case "la ":
			return "fs";
			break;
		case "los":
			return "mp";
			break;
		case "las":
			return "fp";
			break;
	}
	
}

function elegirGeneroAdjetivo ( adjetivo, genero ){
	// Escoge el género y número adecuado de un objetivo de una lista separada por el carácter "|"
	// Parte de listas de adjetivos en la forma ms|fs|mp|fp (rojo|roja|rojos|rojas)
	
	var adjArr = adjetivo.split("|");
	switch ( genero ){
		case "ms":
			return adjArr[0];
			break;
		case "fs":
			return adjArr[1];
			break;
		case "mp":
			return adjArr[2];
			break;
		case "fp":
			return adjArr[3];
			break;
		
	}
	
}

function genero(palabr){
	
	// Capturando excepciones
	switch ( palabr.toLowerCase()){
		
		case "serpiente":
			return "fs";
			break;
		case "hacha":
			return "ms";
			break;
		case "hachas":
			return "mp";
			break;
		case "serpientes":
			return "mp";
			break;
		case "tribu":
			return "fs";
			break;
		case "tribus":
			return "fp";
			break;
	}
	
	switch ( palabr.charAt(palabr.length-1)){
		case "a":
			return "fs";
		case "s":
			if (palabr.charAt(palabr.length-2) == "a"){
				return "fp";
			}
			else {
				return "mp";
			}
		default:
			return "ms";
		
	}
}

function anadeArticulo(palabra, det){
	det = det || 0;  // el artículo es indeterminado por defecto.

	if (det == 0){
		switch (genero(palabra)){

			case "ms":
				return "un " + palabra.toLowerCase();
			case "fs":
				return "una " + palabra.toLowerCase();
			case "mp":
				return "unos " + palabra.toLowerCase();
			case "fp":
				return "unas " + palabra.toLowerCase();
		}
	}
	if (det == 1){
		switch (genero(palabra)){

			case "ms":
				return "el " + palabra.toLowerCase();
			case "fs":
				return "la " + palabra.toLowerCase();
			case "mp":
				return "los " + palabra.toLowerCase();
			case "fp":
				return "las " + palabra.toLowerCase();
		}	
	}
	
	return;
}

function convierteAdjetivoAFemenino(adjetivo){
	if (adjetivo.substring(adjetivo.length - 1) == "o"){
		adjetivo = adjetivo.slice(0,adjetivo.length-1) + "a";
	}
	return adjetivo;
	
}*/



