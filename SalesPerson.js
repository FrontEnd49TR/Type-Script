"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesPerson = exports.MAX_PERCENT = exports.MIN_PERCENT = void 0;
const WageEmployee_1 = require("./WageEmployee");
exports.MIN_PERCENT = 0.1;
exports.MAX_PERCENT = 5;
class SalesPerson extends WageEmployee_1.WageEmployee {
    constructor(id, name, birthYear, department, basicSalary, wage, hours, _sales, _percent) {
        super(id, name, birthYear, department, basicSalary, wage, hours);
        this._sales = _sales;
        this._percent = _percent;
    }
    get sales() {
        return this._sales;
    }
    set sales(salesParameter) {
        if (salesParameter < 0) {
            throw `Sales cannot be a negative number`;
        }
        this._sales = salesParameter;
    }
    get percent() {
        return this._percent;
    }
    set percent(percentParameter) {
        if (percentParameter < exports.MIN_PERCENT || percentParameter > exports.MAX_PERCENT) {
            throw `Percent should be in the range [${exports.MIN_PERCENT}-${exports.MAX_PERCENT}]`;
        }
    }
    computeSalary() {
        return super.computeSalary() + Math.ceil(this.sales * this.percent / 100);
    }
}
exports.SalesPerson = SalesPerson;
//# sourceMappingURL=SalesPerson.js.map