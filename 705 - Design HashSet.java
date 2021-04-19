import java.util.ArrayList;
import java.util.HashMap;

class MyHashSet {

    HashMap<Integer, ArrayList<Integer>> map = new HashMap<>();

    /** Initialize your data structure here. */
    public MyHashSet() {

    }

    public void add(int key) {
        int hash = key % 37;
        if (!map.containsKey(hash)) {
            ArrayList<Integer> l = new ArrayList<>();
            l.add(key);
            map.put(hash, l);
        }
        if (!map.get(hash).contains(key)) {
            map.get(hash).add(key);
        } else {
            return;
        }

    }

    public void remove(int key) {
        int hash = key % 37;
        if (!map.containsKey(hash)) {
            return;
        }
        if (!map.get(hash).contains(key)) {
            map.get(hash).remove(key);
        } else {
            return;
        }
    }

    /** Returns true if this set contains the specified element */
    public boolean contains(int key) {
        int hash = key % 37;
        if (!map.containsKey(hash)) {
            return false;
        }
        if (!map.get(hash).contains(key)) {
            return true;
        } else {
            return false;
        }
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such: MyHashSet obj
 * = new MyHashSet(); obj.add(key); obj.remove(key); boolean param_3 =
 * obj.contains(key);
 */