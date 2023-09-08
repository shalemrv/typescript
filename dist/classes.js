"use strict";
class EmployeeC {
    constructor(id, name, deptNumber) {
        this.id = id;
        this.name = name;
        this.deptNumber = deptNumber;
    }
    display() {
        console.log({
            id: this.id,
            name: this.name,
            deptNumber: this.deptNumber
        });
    }
}
let emp1 = new EmployeeC(1, 'Shalem', 2);
emp1.display();
//# sourceMappingURL=classes.js.map