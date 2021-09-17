/*Funciones necesarias para tienda HardBuy*/

/* Validador entre intervalos */
const validator = (numMin, number, numMax) => {
    while (number < numMin || number > numMax || number == ""){
        number = parseInt(prompt(`Error! se le ha pedido un número entre ${numMin} y ${numMax} ingrese nuevamente: `))
    }
    return number
}

/* Calcular IVA */
const calcIva = (prize) => {
    prize *= 1.21;
    return prize
}

/* Datos tarjeta de débito */
const tarjetaDebito = () => {
    names = prompt("Ingrese el nombre del titular: ");
    surname = prompt("Ingrese el apellido del titular: ");
    code = prompt("Ingrese los 16 dígitos de su tarjeta: ");
    expirationDate = prompt("Ingrese fecha de vencimiento: ");
    cvc = prompt("Ingrese el código de seguridad: ");
}

/* Datos tarjeta crédito */
const tarjetaCredito = (instalments) => {
    tarjetaDebito()
    let interest = 1;
    if (instalments <= 3){
        cart *= 1.07;
        alert(`El precio final es ${Math.round(cart * 1.07)}`);
    }
    else if(instalments>3 && instalments <= 6){
        cart *= 1.14;
        alert(`El precio final es ${Math.round(cart * 1.14)}`);
    }
    else if(instalments>6 && instalments <= 12){
        cart *= 1.24;
        alert(`El precio final es $${Math.round(cart * 1.24)}`);
    }
}

/* Forma de pago */
const methodPayment = (payment) => {
    switch(payment){
        case 1:
            alert("Para realizar un pago en efectivo dirígase a una sucursal de rapipago/pagofacil y bríndele este código al cajero '0354184484414' ");
            break
        case 2:
            alert("Para realizar un pago en mediante transferencia bancaria utilice el siguiente CBU: '0001547245000124035785' o ALIAS: 'Hardbuy.tienda.hardware' ")
            break
        case 3:
            tarjetaDebito();
            break
        case 4:
            instalments = parseInt(prompt("Ingrese número de cuotas: "));
            tarjetaCredito(instalments);
            break
    }
}

/* Consultar stock */
const isStock = (quantity,stock) =>{
    if(quantity > stock){
        alert(`No tenemos suficiente stock. El stock disponible es ${stock}`);
        return false;
    }
    else return true;
}


/*Esta funcion ejecuta el agregado de los productos seleccionados al carrito*/
/*Contiene en las estructuras de control una condición consultando por el producto elegido, consultando stock y actualizándolo*/

const addToCart = (option, choice,quantity) =>{
    switch(option){
        /* Opción microprocesadores */
        case 1:
            if (choice == 1 && isStock(quantity, ryzen5600Stock)){
                cart += (quantity*calcIva(ryzen5600));
                ryzen5600Stock -= quantity;
                alert("Ryzen 5600x agregado al carrito");
            }
            else if (choice == 2 && isStock(quantity, ryzen5800Stock)){
                cart += (quantity*calcIva(ryzen5800));
                ryzen5800Stock -= quantity;
                alert("Ryzen 5800x agregado al carrito");
            }
            else if (choice == 3 && isStock(quantity, i99900Stock)){
                cart += (quantity*calcIva(i99900));
                i99900Stock -= quantity;
                alert("Intel i9-9900k agregado al carrito");
            }
            break

        /* Opción memorias ram */
        case 2:
            if (choice == 1 && isStock(quantity, hyperx3200Stock)){
                cart += (quantity*calcIva(hyperx3200));
                hyperx3200Stock -= quantity;
                alert("HyperX fury 3200mhz 16gb agregado al carrito");
            }
            else if (choice == 2 && isStock(quantity, patriotViperStock)){
                cart += (quantity*calcIva(patriotViper));
                patriotViperStock -= quantity;
                alert("Patriot viper 16gb 3200mhz agregado al carrito");
            }
            else if (choice == 3 && isStock(quantity, adata3600Stock)){
                cart += (quantity*calcIva(adata3600));
                adata3600Stock -= quantity;
                alert("Adata 3600mhz 8gb agregado al carrito");
            }
            break

        /* Opción motherboards */
        case 3:
            if (choice == 1 && isStock(quantity, gigabyteB450Stock)){
                cart += (quantity*calcIva(gigabyteB450));
                gigabyteB450Stock -= quantity;
                alert("Gigabyte B450 aorus elite agregado al carrito");
            }
            else if (choice == 2 && isStock(quantity, asusB560Stock)){
                cart += (quantity*calcIva(asusB560));
                asusB560Stock -= quantity;
                alert("Asus TUF B560b-plus agregado al carrito");
            }
            else if (choice == 3 && isStock(quantity, msiZ490Stock)){
                cart += (quantity*calcIva(msiZ490));
                msiZ490Stock -= quantity;
                alert("MSI Z490 agregado al carrito");
            }
            break

        /* Opción placas de video */
        case 4:
            if (choice == 1 && isStock(quantity, palitGtx1660Stock)){
                cart += (quantity*calcIva(palitGtx1660));
                palitGtx1660Stock -= quantity;
                alert("Palit GTX 1660 agregado al carrito");
            }
            else if (choice == 2 && isStock(quantity, msiRtx3060tiStock)){
                cart += (quantity*calcIva(msiRtx3060ti));
                msiRtx3060tiStock -= quantity;
                alert("MSI RTX 3060 ti ventus agregado al carrito");
            }
            else if (choice == 3 && isStock(quantity, msiRadeonRx6700Stock)){
                cart += (quantity*calcIva(msiRadeonRx6700));
                msiRadeonRx6700Stock -= quantity;
                alert("MSI Radeon RX 6700 agregado al carrito");
            }
            break
    }
    return true;
} 





