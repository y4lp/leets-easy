
# Definition for Employee.
class Employee:
    def __init__(self, id: int, importance: int, subordinates: list[int]):
        self.id = id
        self.importance = importance
        self.subordinates = subordinates



class Solution:
    def getImportance(self, employees: list['Employee'], id: int) -> int:
        for emp in employees:
            if emp.id == id:
                sum = emp.importance
                for sub in emp.subordinates:
                    sum += self.getImportance(employees, sub)
                break
        return sum

