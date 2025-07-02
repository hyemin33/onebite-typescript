/** 제네릭 
 * : 일반적인, 포괄적인
 * 
*/

// 제네릭 함수로 만들어보자
// T : 타입변수 -> 상황에 따라 다른 타입을 담을 수 있다.
function func<T>(value: T): T{
    return value;
}

let num = func(10);
let bool = func(true);
let str = func('hi');

// func 뒤의 타입을 직접 정의할 수 있다. T의 자리에 똑같이 자리잡는다.
let arr =func<[number, number, number]>([1, 2, 3]);