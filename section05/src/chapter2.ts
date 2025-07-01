/** 선언 합침 
 * 모듈 보강할때 사용함
 * 
*/

interface Person {
    name: string;
}

// 합칠때는 무조건 같은 타입이어야 한다.(서브타입도 안됨)
interface Person {
    // name: number;
    age: number;
}

const person: Person = {
    name: "",
    age: 29
}


// 모듈 보강 예시

interface Lib {
    a: number;
    b: number;
}

interface Lib {
    c: string;
}

const lib: Lib = {
    a: 1,
    b: 2,
    c: 'hi'
}