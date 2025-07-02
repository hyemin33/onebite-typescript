/** 접근 제어자
 *  access modifier
 * -> public private protected
 */

class Employee {
    // 필드
    private name: string; // private로 설정시 접근이 불가하다. 파생클래스도 접근 불가.
    public age: number;
    protected position: string; // 파생클래스 접근 가능

    // 생성자
    constructor(name: string, age: number, position: string){
        this.name = name;
        this.age = age;
        this.position = position;
    }

    // 메서드
    wort(){
        console.log('일함');
    }
}



// 생성자에서 접근 제어자 설정 시 필드설정과 초기설정을 안해도 된다.
class Employee2 {
    // 생성자
    constructor(
        private name: string, 
        public age: number, 
        protected position: string){}

    // 메서드
    wort(){
        console.log('일함');
    }
}



const employee = new Employee('김만만', 30, '개발자');

// 접근제어자의 기본값이 public이라 접근이 가능하다
// employee.name = '홍길동'; private라 접근 불가
employee.age = 24;
// employee.position = '디자이너';