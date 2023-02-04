"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
class Company {
    constructor(employees) {
        this.employees = employees;
    }
    addEmployee(empl) {
        this.employees.push(empl);
    }
    removeEmployee(id) {
        const index = this.employees.findIndex(empl => empl.id == id);
        const res = index > -1;
        if (res) {
            this.employees.splice(index, 1);
        }
        return res;
    }
    // getEmployee(id: number) {
    //     return this.employees.find(empl => empl.id === id);
    // }
    getEmployee(id) {
        const result = this.employees.find(empl => empl.id === id) || null;
        return result;
    }
    getEmployeesBySalary(salaryFrom, salaryTo) {
        const result = this.employees.filter(empl => {
            const salary = empl.computeSalary();
            return salary >= salaryFrom && salary <= salaryTo;
        });
        result.sort((e1, e2) => e2.birthYear - e1.birthYear);
        return result;
    }
    computeBudget() {
        return this.employees.reduce((res, empl) => res + empl.computeSalary(), 0);
    }
}
exports.Company = Company;
//# sourceMappingURL=Company.js.map