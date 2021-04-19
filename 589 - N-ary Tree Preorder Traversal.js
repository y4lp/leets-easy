/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
let res = [];
var preorder = function (root) {
    res = [];
    dfs(root);
    return res;
};
function dfs(root) {
    if (root == null) {
        return;
    }
    res.push(root.val);
    for (let child of root.children) {
        dfs(child);
    }
}
let a = {
    value: 1
};
let b = {
    value: 1
};
let c = [1, 'a', {}];
let d = [1, 'a', {}];
console.log(c === d);
console.log(typeof (6 * '2'), typeof '12');
