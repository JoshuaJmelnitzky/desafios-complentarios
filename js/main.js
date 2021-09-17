alert('Bienvenido a HardBuy - Tienda de hardware')

do{
    let option = parseInt(prompt(menu));
    let choice = parseInt(prompt(products(option)));
    choiceVal = validator(1, choice, 3);

    if(option === 5) break;
    let qty = parseInt(prompt(SelectedQty));

    addToCart(option, choiceVal, qty);

    resp = prompt('¿Desea agregar mas productos a la cuenta? SI/NO');

    console.log(resp);

}while(resp === "SI");

if(cart > 0){
    alert(`Su compra tiene un total de $${cart}`);
    let pay = parseInt(prompt(payment));
    methodPayment(pay)
    alert('Gracias por su compra :)');
}

