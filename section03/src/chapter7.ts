/** 타입 좁히기
 * 조건문 등을 이용해 넓은 타입에서 좁은 타입으로 타입을 상황에 따라 좁히는 방법
 */

type Person = {
    name: string;
    age: number;
}

function func(value: number | string | Date | null | Person) {
    if(typeof value === 'number'){
        console.log(value.toFixed());
    } else if(typeof value === 'string'){ 
        console.log(value.toUpperCase());
    } else if(value instanceof Date){
        console.log(value.getTime());
    } else if(value && "age" in value){ // age는 Person에만 있으며, value가 null이 아니어야하기 때문에 value &&를 추가한다.
        console.log(`${value.name}은 ${value.age}살 입니다`)
    }
}