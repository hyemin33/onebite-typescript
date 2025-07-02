/** 클래스 */
let studentA = {
    name: '홍길동',
    grade: 'A++',
    age: 28,
    study() {
        console.log('열심히 공부해요');
    },
    introduce() {
        console.log('hi');
    },
}


class Student {
    // 필드 : 객체의  property
    name;
    grade;
    age;

    // 생성자: 새로운 객체를 만들라는 메서드
    constructor(name, grade, age){
        this.name = name;
        this.grade = grade;
        this.age = age;
    }

    // 메서드
    study() {
        console.log('열심히 공부해요');
    }

    introduce() {
        console.log(`hi. 저는 ${this.name} 입니다.`);
    }
}


// student 클래스를 확장
class StudentDeveloper extends Student{
    favoriteSkill;

    constructor(name, grade, age, favoriteSkill){
        super(name, grade, age);
        this.favoriteSkill = favoriteSkill;
    }

    programming() {
        console.log(`${this.name}로 프로그래밍 함`)
    }
}

const studentDeveloper = new StudentDeveloper('김만만', 'B', 30, 'Typescript');
studentDeveloper.programming();


// 클래스를 이용해서 만든 객체 -> 인스턴스
// 스튜던트 인스턴스
let studentB = new Student('김만만', 'B', 30);

studentB.study();
studentB.introduce();