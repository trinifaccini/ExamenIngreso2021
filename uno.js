
function mostrar()
{

	let nombre;
	let tipo;
	let precio;
	let unidades;
	let marca;
	let inflamable;

	let totalAlcohol = 0;
	let totalIac = 0;
	let totalQuat = 0;

	let totalIacBarato = 0;

	let comprasAlcohol = 0;
	let comprasIac = 0;
	let comprasQuat = 0;

	let promedioAlc = 0;
	let promedioIac = 0;
	let promedioQuat = 0;

	let totalIgnifugo = 0;
	let totalCombustible = 0;
	let totalExplosivo = 0;

	let maxInflamable = 0;

	let flag = 0;
	let masCaro = 0;
	let marcaCaro;
	let tipoCaro; 


	for(let i = 0; i < 5; i++){

		nombre = prompt("Ingrese el nombre del producto");
		while(isNaN(nombre) == false){
			nombre = prompt("Eso no es un nombre, ingrese el nombre del producto");
		}

		tipo = prompt("Ingrese el tipo de producto (ALCOHOL, IAC o QUAT)");
		while(tipo != "ALCOHOL" && tipo != "IAC" && tipo != "QUAT"){ 
			tipo = prompt("Ingrese un tipo de producto valido (ALCOHOL, IAC o QUAT)");
		}

		precio = parseInt(prompt("Ingrese el precio del producto (entre 100 y 300 pesos)"));
		while(isNaN(precio)== true || precio < 100 || precio > 300){
			precio = parseInt(prompt("Ingrese un precio de producto valido (entre 100 y 300 pesos)"));
		}

		unidades = parseInt(prompt("Ingrese la cantidad de unidades del producto (entre 1 y 1000"));
		while(isNaN(unidades)== true || unidades <= 0 || unidades > 1000){
			unidades = parseInt(prompt("Ingrese una cantidad valida (entre 1 y 1000"));
		}

		inflamable = prompt("Ingrese el tipo de inflamable del producto (ignifugo, combustible o explosivo)");
		while(inflamable != "ignifugo" && inflamable != "combustible" && inflamable != "explosivo"){ //no es necesario verficiar que NO sea un numero
			inflamable = prompt("Ingrese un tipo de producto valido (ignifugo, combustible o explosivo)");
		}

		marca = prompt("Ingrese la marca del producto");
		while(isNaN(marca) == false){
			marca = prompt("Por favor, ingrese una marca");
		}

		if(tipo == "ALCOHOL"){

			totalAlcohol += unidades;
			comprasAlcohol++;
		}

		else if(tipo == "IAC"){
			totalIac += unidades;
			comprasIac++;

			if(precio <= 200){
				totalIacBarato += unidades;
			}
		}
		
		else {
			totalQuat += unidades;
			comprasQuat++;
		}

		if(inflamable == "ignifugo"){
			totalIgnifugo += unidades;
		}

		else if(inflamable == "combustible"){
			totalCombustible += unidades;
		}
		
		else {
			totalExplosivo += unidades;
		}

		if(flag == 0 || precio > masCaro){
			masCaro = precio;
			tipoCaro = tipo;
			marcaCaro = marca;
			flag = 1;
		}


	}


	//a)
	if(totalAlcohol > 0){
		promedioAlc = totalAlcohol/comprasAlcohol;
		alert("El promedio de alcoholes comprados es de: " + promedioAlc);
	}

	if(totalIac > 0){
		promedioIac = totalIac/comprasIac;
		alert("El promedio de Iac comprados es de: " + promedioIac);
	}

	if(totalQuat > 0){
		promedioQuat = totalQuat/comprasQuat;
		alert("El promedio de Quat comprados es de: " + promedioQuat);
	}

	//b)
	if(totalIgnifugo > totalCombustible && totalIgnifugo > totalExplosivo){
		maxInflamable = "ignifugo";
	}

	else if(totalCombustible >= totalIgnifugo && totalCombustible > totalExplosivo){
		maxInflamable = "combustible"
	}

	else{
		maxInflamable = "explosivo"
	}

	if(maxInflamable != 0){
			alert("El tipo de producto inflabale mas comprado es " + maxInflamable);
	}

	//c)
	if(totalIacBarato != 0){
		alert("La cantidad de unidades de Iac compradas con precio menor o igual a 200 es de: " + totalIacBarato);
	}

	//d)
	if(flag == 1){
		alert("La marca del tipo mas caro de producto es: " + marcaCaro + "y su tipo es: " + tipoCaro);
	}
}

