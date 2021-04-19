/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function (employees, id) {
    let sum = 0;
    for (let emp of employees) {
        if (emp.id == id) {
            sum = emp.importance;
            for (let subid of emp.subordinates) {
                sum += GetImportance(employees, subid);
            }
            break;
        }

    }
    return sum;
};