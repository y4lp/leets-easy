import java.util.*;

//import org.w3c.dom.Node;

//import com.sun.org.apache.bcel.internal.classfile.Node;

/*
//Definition for a Node.
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
    public List<Integer> postorder(Node root) {
        Node t;
        if (root == null) {
            return new ArrayList<Integer>();
        }
        Deque<Node> s = new ArrayDeque<>();
        List<Integer> res = new ArrayList<>();
        s.push(root);
        while (s.size() > 0) {
            t = s.pop();
            res.add(t.val);
            for (Node child : t.children) {
                s.push(child);
            }
        }
        Collections.reverse(res);
        return res;
    }
}
