// 타입 추론

let a = 10;
let b = "이건 string으로 추론 중이다.";

// 암묵적으로 any타입으로 추론 후 점점 진화를 하게 된다!
let c;
c = 10;
c.toFixed();

c = "여기부터는 string으로 됨";
c.toUpperCase();
// c.toFixed() number가 아니기 때문에 오류