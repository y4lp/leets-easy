/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function (root) {
    if (root == null) return [];
    let res = [];
    let s = [root];
    let t;
    while (s.length > 0) {
        t = s.pop();
        res.push(t.val);
        for (let child of t.children) {
            s.push(child);
        }
    }
    res.reverse();
    return res;
};

let a = [1, 2, 3].indexOf(2)
console.log(typeof a);
console.log(a instanceof Array);
console.log(a);
const formatPeople = function (name, age) {
    return '# name: ' + name + ', age: ' + age + '\n';
};
let b = formatPeople('John Doe', 36);
console.log(b);