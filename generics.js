/**
 * The letter T in the angle brackets is a placeholder for
 * any datatype. below, we are adding the generic type to the item parameter.
 * this will let the script know that we are assigning a generic datatype to
 * our array.
 *
 * If we used the skip(), we are restricting the datatype to string and would
 * not be scalable within our Queue class
 *
 *
 *
 */
var Queue = /** @class */ (function () {
    function Queue() {
        this.data = [];
    }
    Queue.prototype.add = function (item) {
        this.data.push(item);
    };
    // skip(vip: string) {
    //     this.data.push(vip);
    // }
    Queue.prototype.remove = function () {
        this.data.shift();
    };
    return Queue;
}());
var nameQueue = new Queue();
nameQueue.add('Adam');
nameQueue.add('lopez');
var numberQueue = new Queue();
numberQueue.add(10);
numberQueue.add(144);
