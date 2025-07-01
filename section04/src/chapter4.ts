/** 사용자 정의 타입가드 */

type Dog = {
    name: string;
    isBark: boolean;
}

type Cat = {
    name: string;
    isScratch: boolean;
}

type Animal = Dog | Cat;

// 'isBark' in animal 이 조건문을 아래처럼 바꿔서 쓸 수 있다.
function isDog(animal:Animal): animal is Dog{
    return (animal as Dog).isBark !== undefined;
}

function isCat(animal: Animal): animal is Cat{
    return (animal as Cat).isScratch !== undefined;
}

function warning(animal: Animal){
    if(isDog(animal)){
        console.log('강아지입니다');
    } else if(isCat(animal)){
        console.log('고양이입니다');
    }
}

