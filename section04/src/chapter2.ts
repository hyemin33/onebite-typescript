/** 함수 타입 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단함
 * 1. 반환값의 타입이 호환되는가
 * 2. 매개변수의 타입이 호환되는가
 */



// 기준1 반환값의 타입이 호환되는가
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b;

// b = a; B는 number 리터럴이라 다운캐스팅이라 오류가 난다.





// 기준2 매개변수가 호환되는가
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

//c = d;  업캐스팅인데 안된다.
d = c; // 다운캐스팅인데 된다.



type Animal = {
    name: string;
}

type Dog = {
    name: string;
    color: string;
}

let animalFunc = (animal: Animal) => {
    console.log(animal.name);
}
let dogFunc = (dog: Dog) => {
    console.log(dog.name);
    console.log(dog.color);
}

/*
animalFunc = dogFunc; 
이게 왜 안되는 이유는 animal에 dog property를 넣으면 당연 오류가 나기때문이다. 
*/

let testFunc = (animal: Animal) => {
    console.log(animal.name);
    // console.log(animal.color); dog의 property가 생김.
}