class MinHeap {
    constructor() {
        this.heap = [];
        this.size = 0;
    }

    add(val) {
        this.heap.push(val);
        this.size++;
        this.upsift(this.size - 1);
    }

    pop(val) {
        if (this.size > 0) {
            let t = this.heap[0];
            this.heap[0] = this.heap[this.size - 1];
            this.size--;
            this.heap.pop();
            this.downsift();
            return t;
        } else {
            return null;
        }
    }

    upsift(index) {
        while (index > 0) {
            let parent = index - 1 >> 1;
            if (this.heap[parent] > this.heap[index]) {
                [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
                index = parent;
            } else {
                break;
            }
        }
    }

    downsift() {
        let i = 0;
        while (i < this.size) {
            let lc = i * 2 + 1, rc = i * 2 + 2;
            let child = lc;
            if (rc < this.size && this.heap[rc] < this.heap[lc]) {
                child = rc;
            }
            if (this.heap[child] < this.heap[i]) {
                [this.heap[child], this.heap[i]] = [this.heap[i], this.heap[child]];
                i = child
            } else {
                break;
            }

        }
    }
}


/**
 * @param {number} k
 * @param {number[]} nums
 */
 var KthLargest = function(k, nums) {
    this.heap = new MinHeap();
    this.k = k;
    for (let num of nums) {
        this.add(num);
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.heap.add(val);
    if (this.heap.size > this.k) {
        this.heap.pop();
    }
    return this.heap.heap[0];
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */