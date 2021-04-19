/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function (root) {
    if (root == null) {
        return 0;
    }
    let dep = 0;
    for (let child of root.children) {
        dep = Math.max(dep, maxDepth(child));
    }
    console.log(dep);
    return dep + 1;
};

function Node(val, children) {
    this.val = val;
    this.children = children;
};
let n = [];
let lst = [new Node(3, []), new Node(2, []), new Node(4, [])]
n.push(new Node(1, lst));

console.log(maxDepth(n[0]));