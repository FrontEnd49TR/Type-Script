import { WageEmployee } from "./WageEmployee";

export const MIN_PERCENT = 0.1;
export const MAX_PERCENT = 5;
export class SalesPerson extends WageEmployee {
    constructor(
        id: number,
        name: string,
        birthYear: number,
        department: string,
        basicSalary: number,
        wage: number,
        hours: number,
        private _sales: number,
        private _percent: number) {
        super(id, name, birthYear, department, basicSalary, wage, hours);
    }
    get sales() {
        return this._sales
    }
    set sales(salesParameter: number) {
        if (salesParameter < 0) {
            throw `Sales cannot be a negative number`
        }
        this._sales = salesParameter;
    }
    get percent() {
        return this._percent;
    }
    set percent(percentParameter: number) {
        if (percentParameter < MIN_PERCENT || percentParameter > MAX_PERCENT) {
            throw `Percent should be in the range [${MIN_PERCENT}-${MAX_PERCENT}]`
        }
    }
    computeSalary(): number {
        return super.computeSalary() + Math.ceil(this.sales * this.percent / 100);
    }

}