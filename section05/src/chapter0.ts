/** 인터페이스 */

// 오버로딩을 하고 싶다면 sayHi(a: number, b: number): void; 형태로 써야한다. 화살표는 먹히지 않음.
interface Person {
    readonly name: string;
    age?: number;
    sayHi(): void;
    sayHi(a: number, b: number): void;
}

// interface로는 union이나 intersection 사용은 어렵다.
type Type1 = number | string;

const person: Person | number = {
    name: '홍길동',
    age: 29,
    sayHi: function (){
        console.log('Hi');
    }
}

person.sayHi();
person.sayHi(1, 2);
// person.name = '홍길동'
