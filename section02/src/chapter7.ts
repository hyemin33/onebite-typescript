// void -> 공허 -> 아무것도 없음을 의미

function func1(): string{
    return "void"
}

function funcv2(): void {
    console.log('이건 무슨 타입')
}

let a: void;
// a = 1 오류남
a = undefined;




// never -> 존재하지 않는, 불가능한 타입
function func3(): never { // 정상적으로 종료될 수 없어 반환값이 있는게 모순이다 싶을때
    while (true) {}
}

function func4(): never { // 에러로 중단되기 때문에 받을 수 있는게 없다.
    throw new Error();
}