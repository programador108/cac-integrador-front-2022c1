function descuento() {
    
    let tipoTic = document.getElementById("tipoticket").value;
    let cantidad = document.getElementById("cantidad").value;
    let precio = cantidad * 200;
    
    if(tipoTic == "Estudiante"){
        precio= precio * 0.2;
    }
    else if( tipoTic == "Trainee"){
        precio= precio * 0.5;
    }
    else{
        precio = precio * 0.85;
    }
    
    document.getElementById("totalPagar").innerHTML=" Total a Pagar: $" + precio;
    }
    
    let resumen= document.getElementById("resumen");
    resumen.onclick = descuento;