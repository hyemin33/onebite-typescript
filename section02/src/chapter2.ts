let numArr: number[] = [1,2,3];
let strARr: string[] = ["오", "이것도", "알아요"];

// <>를 쓰는것을 제네릭이라 한다.
let boolArr: Array<boolean> = [true, false, true]

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (number | string)[] = [1, "이건 무엇인가"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
    [1,2,3],
    [4,5]
]

// 튜플 타입 = 길이와 타입이 고정된 배열
let tup1: [number, number] = [1,2];
let tup2: [number, string, boolean] = [1, "2", true];

let users: [string, number][] = [
    ['홍길동', 34],
    ['김만만', 20],
    ['이아무개', 18],
    // [5, '토리'] 여기서 타입 순서가 맞지 않아 오류
]