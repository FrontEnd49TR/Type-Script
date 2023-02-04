import { Employee } from "./Employee";

export class Company {
    constructor(private employees: Array<Employee>) { }
    addEmployee(empl: Employee): void {
        this.employees.push(empl);
    }
    removeEmployee(id: number): boolean {
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
    getEmployee(id: number): Employee | null {
        const result = this.employees.find(empl => empl.id === id) || null;
        return result;
    }
    getEmployeesBySalary(salaryFrom: number, salaryTo: number): Array<Employee> {
        const result: Array<Employee> = this.employees.filter(empl => {
            const salary = empl.computeSalary();
            return salary >= salaryFrom && salary <= salaryTo;
        }
        );
        result.sort((e1, e2) => e2.birthYear - e1.birthYear);
        return result;
    }
    computeBudget(): number {
        return this.employees.reduce((res, empl) => res + empl.computeSalary(), 0);
    }
}