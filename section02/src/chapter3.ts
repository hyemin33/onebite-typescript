let user: { 
    id?: number, 
    name: string 
} = {
    id: 1,
    name: '홍길동'
}


let config: {
    readonly apiKey: string;
} = {
    apiKey: "MY API KEY",
};

// readonly를 사용하면 값을 바꾸는 것을 막아준다.
// config.apiKey = "change"