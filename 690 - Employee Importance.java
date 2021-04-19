/*
// Definition for Employee.
class Employee {
    public int id;
    public int importance;
    public List<Integer> subordinates;
};
*/

class Solution {
    public int getImportance(List<Employee> employees, int id) {
        int sum = 0;
        for (Employee i : employees) {
            if (i.id == id) {
                sum = i.importance;
                for (int subid : i.subordinates) {
                    sum += getImportance(employees, subid);
                }
                break;
            }
        }
        return sum;
    }
}