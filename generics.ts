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
class Queue<T> {
    private data: T[] = [];

    add(item: T) {
        this.data.push(item);
    }

    // skip(vip: string) {
    //     this.data.push(vip);
    // }

    remove() {
        this.data.shift();
    }
}

const nameQueue = new Queue<string>();
nameQueue.add('Adam');
nameQueue.add('lopez');


const numberQueue = new Queue<number>();
numberQueue.add(10);
numberQueue.add(144);