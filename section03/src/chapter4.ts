// 대수 타입

// 합집합 - Union 타입
let a: string | number;
a = "이건 좀 쉽네요"
a = 33

let arr:(number | string | boolean)[] = [1, '33', true];

type Dog = {
    name: string;
    color: string;
};

type Person = {
    name: string;
    language: string;
}

type Union1 = Dog | Person

let union1: Union1 = {
    name: "",
    color: "",
}

let union2: Union1 = {
    name: "",
    language: "",
}

let union3: Union1 = {
    name: "",
    color: "",
    language: "",
}

// 합집합도, 교집합도 아니라서 에러가 남
// let union4: Union1 = {
//     name: "",
// }


// 교집합 타입 - Intersection 타입 -> 보통 never 타입이 되기 때문에 객체에서 자주 쓴다.

let varialbe: number & string;

type Intersection = Dog & Person;

let intersection1: Intersection ={
    name: "",
    color: "",
    language: ""
}