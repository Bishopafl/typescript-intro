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

let items: [5, 'adam']; 

/**
 * 
 * the account variable annotates an object with a list of properties 
 * that can be found within the object
 * 
 * */
const account: {
    name: string,
    balance: number,
    status?: string,
} = {
    name: 'Adam',
    balance: 10,
};

let accounts: {}[]; // this tells typescript the variable will store an array of objects