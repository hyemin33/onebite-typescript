/** keyof 연산자 -> 객체타입 연산자 */

// 변수 person의 타입들을 뽑아서 추론해준다.
type Person = typeof person;

// interface Person {
//     name: string;
//     age: number;
// }

// 모든 프로퍼티의 키를 union으로 추출한다.
// function getPropertyKey(person: Person, key: keyof Person){
function getPropertyKey(person: Person, key: keyof typeof person){
    return person[key];
}

const person = {
    name: '홍길동',
    age: 30
};

getPropertyKey(person, 'name');


