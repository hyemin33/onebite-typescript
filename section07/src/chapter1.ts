/** 첫번째 */

// a, b가 타입이 다를 경우 타입을 하나 더 추가한다.
function swap<T, U>(a: T, b: U){
    return [b, a];
}

const [a, b] = swap('1', 2);



/** 두번째 
 * 
 * 1. 배열 요소가 튜플인건 안다.
 * 2. 첫번째는 T이고 그 이후는 몇개가 들어오는지 모른다.
 * 3. 또한 그 뒤에 오는 타입이 어떤 타입인지도 모른다.
 * ->  [T, ...unknown[]]
*/
function returnFirstValue<T>(data: [T, ...unknown[]]){
    return data[0];
}

// 0
let num = returnFirstValue([0, 1, 2]);

// hi
let str = returnFirstValue([1, 'hi', 'hello'])




/** 세번째 
 * 마지막 var4만 오류가 나도록 타입을 설정해보자.
 * getLength<T>(data: T) 로 하게되면 T의 값이 unknown이라 .length를 할 수 없어서 타입오류가 난다.
 * 그렇다면..!!
 * 
 * 
 * T를 제한한다 -> T를 확장한다. <T extends {length: number}>
 * ===> length가 number 타입인 T로 제한한다.
*/
function getLength<T extends {length: number}>(data: T){
    return data.length;
}

let var1 = getLength([1, 2, 3]);
let var2 = getLength('1234');
let var3 = getLength({length: 10});
// let var4 = getLength(10); 10은 length가 없으므로 오류가 난다.