/** 인터페이스의 확장 */

interface Animal {
    name: string;
    color: string;
}

// 원본 타입의 서브타입이어야 재정의가 가능하다. dog: 'hhhhi'
interface Dog extends Animal {
    // name: 'hhhhi';
    isBark: boolean;
}

const dog: Dog = {
    name: '',
    color: '',
    isBark: true
}

interface Cat extends Animal {
    isScratch: boolean;
}

interface Chicken extends Animal {
    isFly: boolean;
}

// 여러개 확장이 가능하다
interface DogCat extends Dog, Cat {}

