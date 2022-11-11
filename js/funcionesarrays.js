{
    var vectorglobal=[]; // variable para utilizar en todo cualquier funcion
    var vectorglobal2=[]; // variable para utilizar en todo cualquier funcion
    }
    
    function ingresarvector() // funcion del boton 
    {
        console.log("FUNCION INGRESAR") // mensaje en la consola 
    
        var vector=[]; // variable
        var vector2=[]; // variable
        var subindice=0; // variable
     
    
           while (subindice<3) // inicio del ciclo y expresion logica
           {
             vectorglobal[subindice]=prompt("Ingrese el nombre " +subindice); // pedir dato al usuario 
             console.log("El nombre es "+vector); // mensaje al usuario con el dato 
            
    
             vectorglobal2[subindice]=prompt("Ingrese la edad " +subindice); // pedir dato al usuario 
             console.log("La edad es "+vector2); // mensaje al usuario con el dato 
             subindice++; // ubicacion del dato en el vector
           }
           console.log(vectorglobal); // mensaje en consola
           console.log(vectorglobal2); // mensaje en consola 
    
           document.getElementById("F1C1").innerHTML=vectorglobal.join("<br>"); // ubicacion en la tabla
           document.getElementById("F1C2").innerHTML=vectorglobal2.join("<br>"); // ubicacion en la tabla 
    }
    
    function modificar() // funcion de boton 
    {
       var subindice=0; // variable 
    
       console.log("funcion modificar") // mensaje al usuario en consola 
       console.log(vectorglobal); // mostrar dato en la consola 
       console.log(vectorglobal2); // mostrar dato en la consola 
    
       subindice=prompt("Ingrese el subindice a modificar"); // mensaje pidiendo el subindice a ser modificado 
     
       vectorglobal[subindice]=prompt("Ingrese el nombre " +subindice); // pedir dato al usuario 
       vectorglobal2[subindice]=prompt("Ingrese la edad" +subindice); // pedir dato al usuario 
    
       console.log(vectorglobal); // mensaje en consola  
       console.log(vectorglobal2); // mensaje en consola 
    
       document.getElementById("F1C1").innerHTML=vectorglobal.join("<br>"); // ubicar nuevamente en la consola 
       document.getElementById("F1C2").innerHTML=vectorglobal2.join("<br>"); // ubicar nuevamente en la consola 
    
    }
    
    