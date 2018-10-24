class ArrayQueue {
    constructor(n) {
        this.items = new Array(n);
        this.n = n;
        this.head = 0;
        this.tail = 0;
    }

    enqueue(item) {
        if (this.tail === this.n) {
            if (this.head === 0) {
                return false;
            }
            for (let i = head; i < this.tail; ++i) {
                this.items[i - head] = this.items[i];
            }
            this.tail = this.tail - this.head;
            this.head = 0;
        }
        this.items[this.tail++] = item;
        return true;
    }

    dequeue() {
        if (this.head === this.tail) {
            return null;
        }
        return this.items[this.head++];
    }
}