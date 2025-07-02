/** 인터페이스와 클래스 */

// 설계도 느낌.
interface CharacterInterface {
    name: string;
    moveSpeed: number;
    move(): void;
}

// Character 클래스는 CharacterInterface를 구현한다는 뜻
// interface는 무조건 public으로만 정의해야한다.
class Character implements CharacterInterface {
    constructor( public name: string, public moveSpeed: number){ }

    move(): void {
        console.log(`${this.moveSpeed}속도로 이동!`)
    }
}