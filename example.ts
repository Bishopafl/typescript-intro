// union types that allow for booleans or numbers on the addShipping()
function addShipping(price: number, shipping: number) : number | boolean {
    return price + shipping;
    
}

addShipping(3, 5);