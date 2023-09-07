
// let greeting : string;

// greeting = "Hello, Shalem !!";

// console.log(greeting);

// let age : number =  20;

// if (age < 30)
//     age += 10;

// console.log(age);

let sales: number = 35_520;
let product: string = 'Laptops';
let inStock: boolean = true;

// Any type

let level: any;

function render(someVar: any) {
    console.log(someVar);
}

// Arrays

let nums: number[] = [1, 2, 3, 4, 5];

// Tuples

// User data with id and name

let user: [number, string];

user = [1, "Shalem"];

user[0] = 1;
user[1] = "Shalem";

user.push(54);

// Enums

const SMALL = 1;
const MEDIUM = 1;
const LARGE = 1;

enum Size {Small=1, Medium, Large};

let lSize: Size = Size.Large;

render(lSize);


// Functions

function calculateSize(height: number, offset = 0.25) : number {
    height += offset;
    if (height < 3)
        return Size.Small;
    if (height < 4)
        return Size.Medium;

    return Size.Large;
}

let myHeight: number = 3;
let mySize: number = calculateSize(myHeight);

render(`myHeight = ${myHeight}, mySize = ${mySize}`);

// Objects

let employee:{
    readonly id: number,
    name: string,
    fax?: string
    retire: (date: Date) => void
} = { id: 1, name: 'Raj', retire: (date: Date) => {
    console.log(date);
}};

employee.name = "Shalem";

render(employee);
employee.retire(new Date);