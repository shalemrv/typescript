"use strict";
let sales = 35520;
let product = 'Laptops';
let inStock = true;
let level;
function render(someVar) {
    console.log(someVar);
}
let nums = [1, 2, 3, 4, 5];
let user;
user = [1, "Shalem"];
user[0] = 1;
user[1] = "Shalem";
user.push(54);
const SMALL = 1;
const MEDIUM = 1;
const LARGE = 1;
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
;
let lSize = Size.Large;
render(lSize);
function calculateSize(height, offset = 0.25) {
    height += offset;
    if (height < 3)
        return Size.Small;
    if (height < 4)
        return Size.Medium;
    return Size.Large;
}
let myHeight = 3;
let mySize = calculateSize(myHeight);
render(`myHeight = ${myHeight}, mySize = ${mySize}`);
let employee = { id: 1, name: 'Raj', retire: (date) => {
        console.log(date);
    } };
employee.name = "Shalem";
render(employee);
employee.retire(new Date);
//# sourceMappingURL=index.js.map