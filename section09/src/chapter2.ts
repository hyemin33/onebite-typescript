/** infer -> inference 추론하다 */

// type Func = () => string;
type FuncA = () => string;
type FuncB = () => number;

// 위 함수의 리턴값 타입만 가져오고 싶을때
type ReturnType<T> = T extends () => string ? string : never;

// string
type A = ReturnType<FuncA>;
// never -> number이길 바랬는데 never이 나옴 -> string인지 아닌지를 체크하는 구문이 고정되어 있어서
type B = ReturnType<FuncB>;




// infer을 사용하면 위의 상황에서 리턴값만 가져올 수 있다. 
// 추론 할 수 있으면 R 아니면 never
type ReturnType2<T> = T extends () => infer R ? R : never;

// string
type A2 = ReturnType2<FuncA>;

type B2 = ReturnType2<FuncB>;

// type R을 추론할 수 없어서 never가 된다.
type C2 = ReturnType2<number>;





/** 다른 예제 */
type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
// 1. T는 프로미스 타입이어야 한다.
// 2. 프로미스 타입의 결과값 타입을 반환해야 한다.

type PromiseA = PromiseUnpack<Promise<number>>;

