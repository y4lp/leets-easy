import java.util.ArrayList;

class MyHashMap {
    ArrayList<ArrayList<int[]>> map;

    /** Initialize your data structure here. */
    public MyHashMap() {
        map = new ArrayList<>(103);
        for(int i = 0; i < 103; i++) {
            map.add(new ArrayList<>());
        }
    }
    
    /** value will always be non-negative. */
    public void put(int key, int value) {
        int hash = key % 103;
        if (map.get(hash).isEmpty()) {
            map.get(hash).add(new int[] {key, value});
            return;
        }
        for (int[] a : map.get(hash)) {
            if (a[0] == key) {
                a[1] = value;
                return;
            }
        }
        map.get(hash).add(new int[] {key, value});
    }
    
    /** Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key */
    public int get(int key) {
        int hash = key % 103;
        if (map.get(hash).isEmpty()) {
            return -1;
        }
        for (int[] a : map.get(hash)) {
            if (a[0] == key) {
                return a[1];
            }
        }
        return -1;
    }
    
    /** Removes the mapping of the specified value key if this map contains a mapping for the key */
    public void remove(int key) {
        int hash = key % 103;
        if (map.get(hash).isEmpty()) {
            return;
        }
        for (int[] a : map.get(hash)) {
            if (a[0] == key) {
                map.get(hash).remove(a);
                return;
            }
        }
    }
}
