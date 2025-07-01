let num: number = 10;

// unknown -> 사칙연산 등 할 수 없음
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;

// 그럼 어디에 쓰냐 -> 타입이 확실하지 않을때, 데이터를 정제할때
if(typeof unknownVar === 'number'){
    num = unknownVar;
}
