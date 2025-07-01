// 타입 단언

type Person = {
    name: string;
    age: number;
}

let person = {} as Person;
person.name = "홍길동";
person.age = 28;


type Dog = {
    name: string;
    color: string;
}

// Dog의 타입 외에 다른 타입이 있어서 초과 프로퍼티 상태이다. 이때도 as Dog를 사용하여 단언할 수 있다.
let dog: Dog = {
    name: "돌돌이",
    color: "black",
    breed: "허스키" 
} as Dog;

/** 타입 단언의 규칙 
 * 
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 * 
*/

let num1 = 10 as never;
let num2 = 10 as unknown;
let num3 = 10 as unknown as string; // 다중 단언 -> 정말 어쩔 수 없는 상황일때 사용하기


/** const 단언
 * 
 */

let num4 = 10 as const;

let cat = {
    name: "냥냥",
    color: "yellow",
} as const;

// cat.name = ''  const 단언되어서 name값을 바꿀 수 없음


/**Non Null 단언
 * 
 */

type Post = {
    title: string;
    author?: string;
};

let post: Post = {
    title: "게시글 타이틀",
    author: "홍길동"
}

// 옵셔녈 체이닝이라 undefined가 발생할 수 있어서 오류가 생긴다.
// const len: number = post.author?.length; 


// !를 사용하여 null이거나 undefined가 아니라고 표현해준다.
const len: number = post.author!.length; 

