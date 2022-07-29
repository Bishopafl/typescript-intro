/**
 * the decorator will live within the function in this file
 * 
 * Decorator functions are written in Pascal case, not necessary but standard practice
 * 
 * Decorators can also be added before other classes within your typescript file
 * 
 */

function MenuItem(itemID: string) {
    return (target: Function) => {
        target.prototype.id = itemID;
    }
}
// decorators sit on top of class they are assigned to and can be identified with an @ symbol in front
@MenuItem('noah')
class Pizza {
    id: string;
}
@MenuItem('adam')
class Hamburger {
    id: string;
}

console.log(new Pizza().id);