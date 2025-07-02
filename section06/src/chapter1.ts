/** 타입스크립트의 클래스 */

const employee = {
    name: '홍길동',
    age: 30,
    position: 'developer',
    wort(){
        console.log('일함');
    }
}

class Employee {
    // 필드
    name: string;
    age: number;
    position: string;

    // 생성자
    constructor(name: string, age: number, position: string){
        this.name = name;
        this.age = age;
        this.position = position;
    }

    // 메서드
    wort(){
        console.log('일함');
    }
}

// 확장
class ExecutiveOfficer extends Employee{
    officeNumber: number;

    constructor(name: string, age: number, position: string, officeNumber: number){
        super(name, age, position);
        this.officeNumber = officeNumber;
    }
}

const employeeB = new Employee('김만만', 30, '개발자');
console.log(employeeB);

const employeeC: Employee = {
    name: "",
    age: 0,
    position: "",
    wort(){}
}

