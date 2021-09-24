alert('Bienvenido a HardBuy - Tienda de hardware')

do{
    let option = showMainMenu();
    let choice = showProducts(option);

    if(option === 5) break;
    let qty = parseInt(prompt(SelectedQty));

    addToCart(choice, qty, option);

    resp = prompt('¿Desea agregar mas productos a la cuenta? SI/NO');

    console.log(resp);

}while(resp === "SI");



if(cart > 0){
    alert(`Su compra tiene un total de $${cart}`);
    let pay = showPaymentMethods();
    methodPayment(pay);
    alert('Gracias por su compra :)');
}

