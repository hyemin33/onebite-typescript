function func(a: number, b: number) {
    return a + b;
}

function introduce(name = '홍길동', tall?: number) {
    console.log(`name: ${name}`);
    console.log(`tall: ${tall}`);
    if(typeof tall === 'number'){
        console.log(tall+3);
    }
}

