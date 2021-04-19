/**
 * Initialize your data structure here.
 */
var MyHashMap = function () {
    this.map = new Array(103);
    for (let i = 0; i < 103; i++) {
        this.map[i] = new Array();
    }
};

/**
 * value will always be non-negative. 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
    let hash = key % 103;
    if (this.map[hash].length == 0) {
        this.map[hash].push([key, value]);
        return;
    }

    for (let i = 0; i < this.map[hash].length; i++) {
        let kv = this.map[hash][i];
        if (kv[0] == key) {
            kv[1] = value;
            return;
        }
    }
    this.map[hash].push([key, value]);
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
    let hash = key % 103;
    if (this.map[hash].length == 0) {
        return -1;
    }

    for (let i = 0; i < this.map[hash].length; i++) {
        let kv = this.map[hash][i];
        if (kv[0] == key) {
            return kv[1];
        }
    }
    return -1;
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
    let hash = key % 103;
    if (this.map[hash].length == 0) {
        return;
    }

    for (let i = 0; i < this.map[hash].length; i++) {
        let kv = this.map[hash][i];
        if (kv[0] == key) {
            this.map[hash].splice(i, 1);
            return;
        }
    }
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

// let a = Array.from(new Array(5)).fill([[1, 2], [3, 5]]);
let a = new MyHashMap();
for (let i = 0; i < 2000; i++) {
    a.put(i, i * 42);
}

console.log(a.map);