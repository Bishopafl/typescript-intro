/**
 * There are every primative type are supported in Typescript:
 *
 * string, number, boolean, null, undefined
 *
 */
var myName = null; // union types being set on variable
;
/**
 *
 * the account variable annotates an object with a list of properties
 * that can be found within the object
 *
 * */
var account = {
    name: 'Adam',
    balance: 10
};
var accounts; // this tells typescript the variable will store an array of objects based on the interface
/**
 * Classes
 *
 * The keyword implements lets typescript know to use the interface created above
 *
 * Constructor method is needed with the account variables created on :50 and :51
 *
 * You can even make methods private such as the withdraw()
 * This is a good usecase to prevent yourself from accidentally
 * calling the wrong method or preventing a library from calling it
 *
 * if public is omitted from the constructor function properties the parameters will not be initalized
 *
 */
var InvestmentAccount = /** @class */ (function () {
    function InvestmentAccount(name, balance) {
        this.name = name;
        this.balance = balance;
    }
    InvestmentAccount.prototype.withdraw = function () {
    };
    return InvestmentAccount;
}());
