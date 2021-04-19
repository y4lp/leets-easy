/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function(root) {
    let [count , maxcount, curnum] = [0,0,0];
    let ans = [];
    function dfs(o) {
        if (o) {
            dfs(o.left);
            update(o);
            dfs(o.right);
        }
    }
    function update(o) {
        if (o.val == curnum) {
            count ++;
        } else {
            count = 1;
            curnum = o.val;
        }
        if (count == maxcount) {
            ans.push(curnum);
        } else if (count > maxcount) {
            ans = [curnum];
            maxcount = count;
        }
    }
    dfs(root);
    return ans;
};
[a, b, c ]= [0,0,0];
a = [1,2,3];
d = [...a, 4]
console.log(d)