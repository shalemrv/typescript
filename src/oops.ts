interface IsPerson {
    name: string;

    mustSpeak(lang: string): boolean;
}

class Meta {
    protected static readonly DEPARTMENTS = [
        'None',
        'Accounting',
        'HR',
        'Engineering'
    ];

    protected static readonly LANGUAGES: string[] = [
        'ENGLISH',
        'FRENCH',
        'GERMAN'
    ];
}

class EmployeeC extends Meta implements IsPerson{
    public id: number;
    public name: string;
    public deptNumber!: number;

    constructor(id: number, name: string, deptNumber?: number) { 
        super();

        this.id = id;
        this.name = name;
        this.deptNumber = deptNumber ?? this.deptNumber;
    }

    display(): void {
        console.log({
            id: this.id,
            name: this.name,
            deptNumber: this.deptNumber 
        });
    }

    mustSpeak(language: string): boolean {
        return EmployeeC.LANGUAGES.indexOf(language.toUpperCase()) !== -1;
    }

    getDepartment() : string {
        return EmployeeC.DEPARTMENTS[this.deptNumber] ?? '' 
    }
}

let checkForLanguage = (emp: EmployeeC, lang: string) => {
    if(emp.mustSpeak(lang))
        console.log(`Must Speak ${lang}`);
    else
        console.log(`Need not speak ${lang}`);
}

let emp1 = new EmployeeC(1, 'Shalem', 2);

emp1.display();

console.log(emp1.getDepartment());

checkForLanguage(emp1, 'EnGLish');
checkForLanguage(emp1, 'Spanish');
