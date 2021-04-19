import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Deque;
import java.util.Stack;
import java.util.Collections;
// import org.w3c.dom.Node;

/*
// Definition for a Node.
class Node {
    public int val;
    public List<Node> children;

    public Node() {}

    public Node(int _val) {
        val = _val;
    }

    public Node(int _val, List<Node> _children) {
        val = _val;
        children = _children;
    }
};
*/

class Solution {
    public List<Integer> preorder(Node root) {
        if (root == null) {
            return new ArrayList<Integer>();
        }
        Deque<Node> s = new ArrayDeque<>();
        List<Integer> res = new ArrayList<>();
        s.push(root);
        Node temp;
        while (s.size() > 0) {
            temp = s.pop();
            res.add(temp.val);
            if (temp.children == null) continue;
            Collections.reverse(temp.children);
            for (Node i: temp.children) {
                s.push(i);
            }
        }
        return res;
    }
}