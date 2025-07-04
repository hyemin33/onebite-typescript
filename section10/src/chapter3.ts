/** Exclude<T, U>
 *  -> 제외하다, 추방하다
 *  -> T에서 U를 제거함
 */

// Exclude<string, boolean> | Exclude<boolean, boolean> 
// -> string | never 이므로 결과값은 string
type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<string | boolean, boolean>;





/** Extrack<T, U>
 *  -> T에서 U를 추출한다
 */

type Extrack<T, U> = T extends U ? T : never;

type B = Extract<string | boolean, boolean>



/** ReturnType
 *  -> 함수의 반환값 타입을 추출하는 타입
 */

type ReturnType<T extends (...args: any) => any> = T extends (...agrs: any) => infer R ? R : never;

function funcA() {
    return 'hi';
}

function funcB() {
    return 10;
}

type ReturnA = ReturnType<typeof funcA>;
type ReturnB = ReturnType<typeof funcB>;