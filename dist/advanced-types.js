"use strict";
var _a;
let employee2 = {
    id: 1,
    name: 'Raj',
    retire: (date) => {
        console.log(date);
    }
};
employee2.name = "Shalem";
function kgToPounds(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    return parseFloat(weight) * 2.2;
}
let p1 = kgToPounds(15);
let p2 = kgToPounds('10kg');
console.log(p1, p2);
let textbox = {
    drag: () => { },
    resize: () => { }
};
let quantity;
quantity = 250;
function greet(name) {
    console.log('Hi, ' + name.toUpperCase());
}
greet('Shalem');
function getCustomer(id) {
    return (!id || id < 1) ? null : { dob: new Date };
}
let customer = getCustomer(0);
let customer1 = getCustomer(1);
if (customer !== null && customer !== undefined)
    console.log(customer.dob);
console.log(customer === null || customer === void 0 ? void 0 : customer.dob);
console.log((_a = customer1 === null || customer1 === void 0 ? void 0 : customer1.dob) === null || _a === void 0 ? void 0 : _a.getFullYear());
let customers = [];
customers === null || customers === void 0 ? void 0 : customers[1];
let log = null;
log === null || log === void 0 ? void 0 : log('a');
//# sourceMappingURL=advanced-types.js.map