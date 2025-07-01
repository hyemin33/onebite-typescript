// 객체 타입간의 호환성

// 조건이 적은 타입이 슈퍼타입이 된다.
type Animal = {
    name: string;
    color: string;
}

type Dog = {
    name: string;
    color: string;
    breed: string;
}


let animal: Animal = {
    name: "기린",
    color: "yellow",
}

let dog: Dog = {
    name: "돌돌이",
    color: "brown",
    breed: "허스키",
}

animal = dog;
// dog = animal; 다운캐스팅이라 오류가 난다.


type Book = {
    name: string;
    price: number;
}

type ProgrammingBook = {
    name: string;
    price: number;
    skill: string;
}

let book: Book;
let programmingBook: ProgrammingBook = {
    name: "javascript를 뿌셔 뿌셔",
    price: 330000,
    skill: "javascript"
}

book = programmingBook;

// 오류가 나는 이유: 초과 프로퍼티 검사
let book2: Book = {
    name: "javascript를 뿌셔 뿌셔",
    price: 330000,
    // skill: "javascript"
}