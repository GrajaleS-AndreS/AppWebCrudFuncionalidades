<?php
    $servername = "localhost";
    $database = "decimoA";
    $username = "root";
    $password = "";

    //Crear conexion
    $conn = mysqli_connect($servername,
    $username, $password, $database);
    //Verificar conexion
    if (!$conn) {
        die ("connection failed: " . mysqli_connect_error());
    }else{
        print "<p>conection succesful</p>\n";
        //header("location: ../index.html", TRUE, 301);
    }
?>
