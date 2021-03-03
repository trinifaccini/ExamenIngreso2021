function mostrar()
{
	let respuesta;
	let nombre;
	let edad;
	let sexo; 
	let estadoCivil;
	let temp;

	let pasaje = 600;
	
	let viudos = 0;

	let flagMS = 0;
	let mujerSoltera;
	let minEdadMS = 0;
	
	let pasajeros = 0;
	let precioViaje = 0;
	let precioViajeDcto = 0;
	

	do{

		nombre = prompt("Ingrese su nombre");
		while(isNaN(nombre) == false){
			nombre = prompt("Por favor, ingrese su nombre");
		}

		estadoCivil = prompt("Ingrese su estado civil (soletero, casado o viudo)");
		while(estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo"){
			estadoCivil = prompt("Por favor, ingrese su estado civil (soletero, casado o viudo");
		}

		edad = parseInt(prompt("Ingrese su edad (mayor a 17)"));
		while(edad <= 17 || isNaN(edad)){
		  edad = parseInt(prompt("Por favor, ingrese su edad (mayor a 17)"));
		}

		temp = parseInt(prompt("Ingrese su temperatura corporal (maayor a 0)"));
		while(temp <= 0 || isNaN(temp)){
			temp = parseInt(prompt("Por favor, ingrese su temperatura"));
		}

		sexo = prompt("Ingrese su sexo (f o m)");
		while(sexo != "f" && sexo != "m"){
			sexo = prompt("Por favor, ingrese su sexo (f o m)");
		}
	

		if(edad > 60){

			if(estadoCivil == "viudo"){
				viudos++;
			}
			contMayores++;
		}

		if(sexo == "f"){

			if(flagMS == 0 || edad < minEdadMS){ 
				minEdadMS = edad;
				mujerSoltera = nombre;
				flag = 1;
			}
		}

		pasajeros++;
		respuesta = prompt("¿Desea ingresar otro pasajero?(s/n)");

	} while(respuesta == "s");

	//a)
	if(viudos != 0){
		alert("La cantidad de personas mayores de 60 viudos/as es de: " + viudos);
	}

	if(flagMS != 0){
		alert("La mujer soltera mas joven es: " + mujerSoltera + " y su edad es: " + minEdadMS);
	}

	if(contMayores != 0){
		alert("La cantidad de personas mayores a 60 años con mas de 38 de temperatura es de: " + contMayores);
	}

	if(acumHombresS != 0){
		alert("El promedio de edad de hombres solteros es de: " + (acumEdadHombresS/acumHombresS));
	}

	//c)
	precioViaje = pasaje * pasajeros;
	if(pasajeros > 0){
		alert("El precio total del viaje sin descuentos es de: " + precioViaje);
	}

	//d)
	if((pasajeros/2) < contMayores){
		precioViajeDcto = precioViaje - (precioViaje * 0.25);
		alert("El precio total del viaje con descuento es de: " + precioViajeDcto);
	}


}


