/** 분산적인 조건부 타입 */

type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>;

// 결과적으로 거짓이니까 number가 되어야하는데, union 타입이 되면 두개의 타입이 들어간 결과를 유니온으로 묶은 타입이 된다.
let b: StringNumberSwitch<number | string>;

// StringNumberSwitch<boolean> | StringNumberSwitch<number> | StringNumberSwitch<string>이 되는거라
// number | string | number 이 되기 때문에 결과적으로 number | string이 된다.
let d: StringNumberSwitch<boolean | number | string>;



/** 실용적인 예시 */

type Exclude<T, U> = T extends U ? never : T ;


// 1단계
// Exclude<number, string> | Exclude<string, string> | Exclude<boolean, string> 
// 2단계
// number | never | boolean 인데 union타입에 never가 있으면 사라진다. 
// 결과 number | boolean
type A = Exclude<number | string | boolean, string>;





/** 실용적인 예시2 */
type Extrack<T, U> = T extends U ? T : never;

type B = Extrack<number | string |boolean, string>;
