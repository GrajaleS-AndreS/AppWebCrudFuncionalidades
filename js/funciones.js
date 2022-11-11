function calculovelocidad() 
{
    var distancia = parseFloat(document.getElementById("cajadistancia").value);
    var tiempo = parseFloat(document.getElementById("cajatiempo").value);
    var velocidad = distancia/tiempo;
    
    alert("La velocidad es: " +velocidad +" km/h");
}

function calcularedad() 
{
    var añodenacimiento = parseFloat(document.getElementById("cajaañodenacimiento").value);
    var edad = 2022-añodenacimiento;

    alert("Su edad es " +edad +" años");
}

function calcularmayor()
{
    var num1 = parseFloat(document.getElementById("caja1num").value);
    var num2 = parseFloat(document.getElementById("caja2num").value);

    if (num1>num2)
       alert("El " +num1 +" es mayor")
    else 
       alert("El " +num2 +" es mayor")
}


