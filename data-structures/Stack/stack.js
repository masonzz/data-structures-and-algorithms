class Stack {
    constructor(n) {
        this.count = 0;
        this.n = n;
        this.items = new Array(n);
    }

    push(item) {
        if (this.count === this.n)
            return false;
        this.items[this.count++] = item;
        return true;
    }
    pop() {
        if (this.count === 0) {
            return null;
        }
        return this.items[this.count--];
    }
}