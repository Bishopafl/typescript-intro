/**
 * There are every primative type are supported in Typescript:
 * 
 * string, number, boolean, null, undefined
 * 
 */
let myName: string | null = null; // union types being set on variable

// Arrays

/**
 * When using the [] next to the primative type, typescript 
 * assumes all of the items within the array will be objects 
 * 
 * the example below will let typescript know that the items variable 
 * has an array of items that can be either strings or numbers
 * let items: string[] | number[] = []; 
 */

// let items: [5, 'adam']; 

/**
 * Interface:
 * Allows to create a custom type foreign object
 * 
 * Instead of putting the types within the variable, 
 * we can extract the types to an interface.
 * 
 * Most devs use pascal casing for interfaces... 
 * Some even put a capital 'i' in front to identify interfaces
 * 
 * types can even have methods! (line 39) No business logic tho
 * :39 is set to a 
 */

interface IAccount {
    name: string,
    balance: number,
    status?: string,
    deposit?: () => void // optional return type special for functions
};

/**
 * 
 * the account variable annotates an object with a list of properties 
 * that can be found within the object
 * 
 * */
const account: IAccount = {
    name: 'Adam',
    balance: 10,
};

let accounts: IAccount[]; // this tells typescript the variable will store an array of objects