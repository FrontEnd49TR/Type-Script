"use strict";
//  Eugene Kuzenko
Object.defineProperty(exports, "__esModule", { value: true });
const WageEmployee_1 = require("./WageEmployee");
const employee = new WageEmployee_1.WageEmployee(123, "Vasya", 2000, "QA", 10000, 100, 50);
console.log(`id : ${employee.id}`); // this get
employee.basicSalary = 10000; // this have set
//# sourceMappingURL=app.js.map