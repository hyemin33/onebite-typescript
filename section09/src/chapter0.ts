/** 조건부 타입 -> 보통 제네릭과 같이 사용한다. */

// 삼항 연산자로 조건부 타입 표현
type A = number extends string ? string : number;


type ObjA = {
    a: number;
}

type ObjB = {
    a: number;
    b: number;
}

type B = ObjB extends ObjA ? number : string;


/** 제네릭과 조건부 타입 */

type StringNUmberSwitch<T> = T extends number ? string : number;

let varA : StringNUmberSwitch<number>
let varB : StringNUmberSwitch<string>


// string이면 string으로 아니면 undefined 리턴
// function removeSpaces<T>(text: T): T extends string ? string : undefined{

// 오버로드 시그니처를 사용한다.
function removeSpaces<T>(text: T): T extends string ? string : undefined
function removeSpaces(text: any){
    if(typeof text === 'string'){
        return text.replaceAll(' ', '');
    } else {
        return undefined;
    }
}

let result = removeSpaces('hi im homg');
result.toUpperCase();

let result2 = removeSpaces(undefined);