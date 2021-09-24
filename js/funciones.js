/*Funciones necesarias para tienda HardBuy*/

/* Validador entre intervalos */
const validator = (numMin, number, numMax) => {
    while (number < numMin || number > numMax || number == ""){
        number = parseInt(prompt(`Error! se le ha pedido un número entre ${numMin} y ${numMax} ingrese nuevamente: `))
    }
    return number
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
    if (instalments <= 3){
        cart *= 1.07;
        alert(`El precio final es $${Math.round(cart)} quedando un total de $${Math.round(cart/instalments)} por cuota`);
    }
    else if(instalments>3 && instalments <= 6){
        cart *= 1.14;
        alert(`El precio final es $${Math.round(cart)} quedando un total de $${Math.round(cart/instalments)}  por cuota`);
    }
    else if(instalments>6 && instalments <= 12){
        cart *= 1.24;
        alert(`El precio final es $$${Math.round(cart)} quedando un total de $${Math.round(cart/instalments)}  por cuota`);
    }
}


/* Devuelve un booleano en función de si hay stock (true) o no (false) */
const isStock = (quantity, stock)=>{
    if (quantity > stock ){
        alert (`No tenemos suficiente stock, el stock disponible es ${stock}`);
        return false;
    }
    else return true;
}

/* Añade al carrito un producto */
const addToCart = (optionItem , quantity , optionCategory) => {
    const found = products.find((producto) => (producto.item === optionItem) && (producto.itemCategory === optionCategory)) //Se crea un array que contenga los productos de una categoría determinada
    if(isStock (quantity, found.stock)){
        cart += (quantity* found.price);
        products[optionItem-1].stock -= quantity;
        alert ("Producto agregado a la cuenta");
    }
    return true;
}
    
/* Muestra el menú principal que contiene los tipos de productos que se ofrecen */
const showMainMenu = () =>{
    let menu = "¿Qué tipo de producto estas buscando?: \n";
    productTypes.forEach((product)=>{
        menu += product.id + ".-" + product.name + "\n";
    });
    menu += (productTypes.length + 1) + ".-Salir" ;
    let test = parseInt(prompt(menu));
    return test;
};

/* Muestra un sub-menú que contiene los productos que hay disponibles dentro de la categoría elegida anteriormente*/
const showProducts = (choice) => {
    let menuProducts = "Elija el producto que desea agregar al carrito: \n";
    const productChoice = products.filter ((product)=>product.itemCategory == choice)
    productChoice.forEach((cat, i)=>{
        menuProducts +=  i+1 + ".- " + cat.name  + "  --->  " + " $" +cat.price + "\n";
    })
    return parseInt (prompt(menuProducts))
}

/* Muestra las opciones correspondientes al menú de opciones de pago */
const showPaymentMethods= () => {
    let menu = "Elija la forma en que desea realizar el pago: \n";
    paymentMethods.forEach((product)=>{
        menu += product.id + ".-" + product.methodName + "\n";
    });
    menu += (paymentMethods.length + 1) + ".-Salir" ;
    let test = parseInt(prompt(menu));
    return test;
};
    

/* Ordenar listado de productos por precios */
products.sort(function (a, b) {
    if (a.price > b.price) {
      return 1;
    }
    if (a.price < b.price) {
      return -1;
    }
    return 0;
  });




