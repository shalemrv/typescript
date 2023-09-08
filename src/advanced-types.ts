// Type alias

type Employee = {
    readonly id: number,
    name: string,
    fax?: string
    retire: (date: Date) => void
};

let employee2: Employee = {
    id: 1,
    name: 'Raj',
    retire: (date: Date) => {
        console.log(date);
    }
};

employee2.name = "Shalem";


// Union Types

function kgToPounds(weight: number | string) : number {
    // Narrowing
    if ( typeof weight === 'number')
        return weight * 2.2;
    
    return parseFloat(weight) * 2.2;
}

let p1: number = kgToPounds(15);
let p2: number = kgToPounds('10kg');

console.log(p1, p2);

// Intersection Types

type Draggable = {
    drag: () => void
};

type Resizable = {
    resize: () => void
};

type UiWidget = Draggable & Resizable;

let textbox: UiWidget = {
    drag: () => {},
    resize: () => {}
};

// Literal Types (exact, specific)

type Quantity = 250 | 500 | 750 | 1000; 

let quantity: Quantity;

quantity = 250;

type Length = 'cm' | 'inch';

// Nullable


function greet(name: string) {
    console.log('Hi, ' + name.toUpperCase());
}

greet('Shalem');

// Optional Chaining

type Customer = {
    dob: Date
};

function getCustomer(id: number): Customer | null | undefined {
    return (!id || id < 1)? null : { dob: new Date };
}

let customer = getCustomer(0);
let customer1 = getCustomer(1);

if (customer !== null && customer !== undefined)
    console.log(customer.dob);

// Optional property
console.log(customer?.dob);
console.log(customer1?.dob?.getFullYear());


// Optional array element access
let customers: Customer[] = [];
customers?.[1];

// Optional function call
let log: any = null;
log?.('a');
