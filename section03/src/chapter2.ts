function unknownExam(){
    let a: unknown = 1;
}

// 공집합
function neverExam(){
    function neverFunc(): never{
        while(true){}
    }

    let num: number = neverFunc();
    let str: string = neverFunc();
}

function voidExam(){
    function voidFunc():void{
        console.log('음..');
    }

    let voidVar: void = undefined;
}

