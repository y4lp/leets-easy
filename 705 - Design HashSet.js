/**
 * Initialize your data structure here.
 */
var MyHashSet = function () {
    this.map = new Map();
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
    let hash = key % 37;
    if (!this.map.has(hash)) {
        this.map.set(hash, Array.from([key]));
        return;
    }
    if (this.map.get(hash).includes(key)) {
        return;
    } else {
        this.map.get(hash).push(key);
    }

};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
    let hash = key % 37;
    if (!this.map.has(hash)) return;
    if (this.map.get(hash).indexOf(key) != -1) {
        this.map.get(hash).splice(this.map.get(hash).indexOf(key), 1);
    } else {
        return;
    }
};

/**
 * Returns true if this set contains the specified element 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
    let hash = key % 37;
    if (!this.map.has(hash)) {
        return false;
    }
    if (this.map.get(hash).indexOf(key) != -1) {
        return true;
    } else {
        return false;
    }
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */



let a = new MyHashSet();
for (let i = 0; i < 200; i++) {
    a.add(i);
}
console.log(a.map);
console.log(a.contains(299));
console.log(a.contains(111));

console.log(a.remove(111));
console.log(a.contains(111));