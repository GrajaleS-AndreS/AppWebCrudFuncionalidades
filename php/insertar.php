<?php

    require_once('conexion.php');
    
    $nombre = $_POST['nombre'];
    print($nombre);
    print('<br>');
    $apellido = $_POST ['apellido'];
    print($apellido);
    print('<br>');
    $email = $_POST ['email'];
    print($email);
    print('<br>');
    $iden = $_POST ['iden'];
    print($iden);

    $sql = ("INSERT INTO `estudiante` (`nombre`, `apellido`, `email`, `identificacion`) 
    VALUES ('$nombre', '$apellido', '$email', '$iden')");

    if (mysqli_query($conn, $sql)) 
    {
      echo "Exito en la insercion";
      header("Location: ../index.html", TRUE, 301);
      exit();
      mysqli_close($conn);
    } else {
      echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }

?>
