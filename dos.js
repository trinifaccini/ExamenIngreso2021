function mostrar()
{
  
  let nombre;
  let cursada;
  let materias;
  let sexo;
  let promedioNota;
  let edad; 

  let respuesta;

  let flagProm= 0;
  let maxPromedio;
  let personaMaxProm;

  let flagLibre = 0;
  let minEdadLibre;
  let personaLibre; 

  let acumNotasF = 0;
  let acumNotasM = 0;
  let acumNotasNB = 0;

  let acumF;
  let acumM;
  let acumNB;

  let promedioF = 0;
  let promedioM = 0;
  let promedioNB = 0;

  let flagMax = 0;
  let maxMaterias;
  let personaMaxMaterias; 
  let edadPersonaMaxMaterias;


  do{

		nombre = prompt("Ingrese su nombre");
		while(isNaN(nombre) == false){
			nombre = prompt("Por favor, ingrese su nombre");
		}

    cursada = prompt("Ingrese su tipo de cursada (libre, presencial o remota)");
		while(cursada != "libre" && cursada != "presencial" && cursada != "remota"){
			cursada = prompt("Por favor ingrese un tipo de cursada valida (libre, presencial o remota)");
		}

    materias = parseInt(prompt("Ingrese la cantidad de materias que cursa (entre 0 y 8, no inclusive)"));
		while(materias <= 0 || materias >= 8 || isNaN(materias)){
      materias = parseInt(prompt("Ingrese la cantidad de materias que cursa (entre 0 y 8, no inclusive)"));
		}

    sexo = prompt("Ingrese su sexo (f, m o no binario)");
    while(sexo != "f" && sexo != "m" && sexo != "no binario"){
      sexo = prompt("Por favor, ingrese su sexo (f, m o no binario)");
    }

    promedioNota = parseInt(prompt("Ingrese su promedioNota (entre 0 y 10, inclusive)"));
		while(promedioNota < 0 || promedioNota > 10 || isNaN(promedioNota)){
		  promedioNota = parseInt(prompt("Ingrese su promedio (entre 0 y 10, inclusive)"));
		}

		edad = parseInt(prompt("Ingrese su edad (mayor a 0)"));
		while(edad <= 0 || isNaN(edad)){
		  edad = parseInt(prompt("Por favor, ingrese su edad"));
		}
	
		
    if(sexo != "m"){

      if(flagProm == 0 || promedio > maxPromedio){ 
        maxPromedio = promedio;
        personaMaxProm = nombre;
        flagProm = 1;
      }
    }

    
    if(cursada == "libre"){

      if(flagLibre == 0 || edad < minEdadLibre){ 
        minEdadLibre = edad;
        personaLibre = nombre;
        flagLibre = 1;
      }
    }
		
    if(sexo == "f"){
      acumNotasF += promedioNota;
      acumF++;
    }

    else if(sexo == "m"){
      acumNotasM += promedioNota;
      acumM++;
    }

    else {
      acumNotasNB += promedioNota;
      acumNB++;
    }

    if(cursada != "remota"){

      if(flagMax == 0 || materias > maxMaterias){ 
        maxMaterias = materias;
        personaMaxMaterias = nombre;
        edadPersonaMaxMaterias = edad;
        flagMax = 1;
      }
    }

    
		respuesta = prompt("¿Desea ingresar otro alumno?(s/n)");

	} while(respuesta == "s");

  //a)
  if(flagProm != 0){
    alert("El nombre del mejor promedio no masculino es " + personaMaxProm);
  }
  else{
    alert("No hay estudiantes de sexo femenino ni no binarios cursando la carrera");
  }

  //b)
  if(flagLibre != 0){
    alert("El nombre del estudiante mas joven cursando libre la carrera es " + personaLibre);
  }
  else{
    alert("Ninguna persona cursa libre");
  }

  //c)
  if(acumF != 0){
    promedioF = acumNotasF/acumF;
    alert("El promedio de notas de estudiantes femeninas es: " + promedioF);
  }
  else{
    alert("No hay estudiantes femeninas cursando la carrera");
  }

  if(acumM != 0){
    promedioM = acumNotasM/acumM;
    alert("El promedio de notas de estudiantes masculinos es: " + promedioM);
  }
  else{
    alert("No hay estudiantes masculinos cursando la carrera");
  }

  if(acumNB != 0){
    promedioNB = acumNotasNB/acumNB;
    alert("El promedio de notas de estudiantes no binarios es: " + promedioNB);
  }
  else{
    alert("No hay estudiantes no binarios cursando la carrera");
  }

  //d)
  if(flagMax != 0){
    alert("El nombre del estudiante cursando la mayor cantidad de materias de forma no remota es " + personaMaxMaterias + " y su edad es: " + edadPersonaMaxMaterias);
  }
  else{
    alert("No existe alumno cursando de manera remota");
  }
}
