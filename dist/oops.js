"use strict";
class Meta {
}
Meta.DEPARTMENTS = [
    'None',
    'Accounting',
    'HR',
    'Engineering'
];
Meta.LANGUAGES = [
    'ENGLISH',
    'FRENCH',
    'GERMAN'
];
class EmployeeC extends Meta {
    constructor(id, name, deptNumber) {
        super();
        this.id = id;
        this.name = name;
        this.deptNumber = deptNumber !== null && deptNumber !== void 0 ? deptNumber : this.deptNumber;
    }
    display() {
        console.log({
            id: this.id,
            name: this.name,
            deptNumber: this.deptNumber
        });
    }
    mustSpeak(language) {
        return EmployeeC.LANGUAGES.indexOf(language.toUpperCase()) !== -1;
    }
    getDepartment() {
        var _a;
        return (_a = EmployeeC.DEPARTMENTS[this.deptNumber]) !== null && _a !== void 0 ? _a : '';
    }
}
let checkForLanguage = (emp, lang) => {
    if (emp.mustSpeak(lang))
        console.log(`Must Speak ${lang}`);
    else
        console.log(`Need not speak ${lang}`);
};
let emp1 = new EmployeeC(1, 'Shalem', 2);
emp1.display();
console.log(emp1.getDepartment());
checkForLanguage(emp1, 'EnGLish');
checkForLanguage(emp1, 'Spanish');
//# sourceMappingURL=oops.js.map