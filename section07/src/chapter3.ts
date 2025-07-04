/** 제네릭 인터페이스 */

// 타입 변수 = 타입 파라미터 = 제네릭 타입 변수 = 제네릭 타입 파라미터
interface KeyPair<K, V> {
    key: K;
    value: V;
}

let keyPair: KeyPair<string, number> ={
    key: 'key',
    value: 0
}


let keyPair2: KeyPair<boolean, string[]> = {
    key: true,
    value: ['1']
}


/** 인덱스 시그니처 */

interface NumberMap {
    [key: string]: number;
}


let numberMap1: NumberMap = {
    key: -123,
    key2: 123455,
}

interface Map<v> {
    [key: string]: v;
}

let stringMap: Map<string> = {
    key: 'value'
}

let booleanMap: Map<boolean> = {
    key: true
}


/** 제네릭 타입 별칭 */
type Map2<V> = {
    [key: string]: V;
};

let stringMap2: Map2<string> = {
    key: 'hi'
}

/** 제네릭 인터페이스 활용 예시 
 * -> 유저 관리 프로그램
 * -> 유저 구분 : 학생 유저 / 개발자 유저
*/

interface Student {
    type: 'student';
    school: string;
}

interface Developer {
    type: 'developer';
    skill: string;
}

interface User<T> {
    name: string;
    profile: T;
}


// function goToSchool(user: User){ 를 아래와 같이 쓸 수 있다.
function goToSchool(user: User<Student>){

    // User<T>를 사용하면 자동으로 profile이 구분이 되므로 아래 가드를 쓸 필요가 없다.
    // if(user.profile.type !== 'student'){
    //     console.log('잘 못 오셨습니다');
    //     return;
    // }

    const school = user.profile.school;
    console.log(`${school}로 등교 완료`);
}


const developerUser: User<Developer> = {
    name: '홍길동',
    profile: {
        type: 'developer',
        skill: 'typescript'
    }
}

const studentUser: User<Student> = {
    name: '김만만',
    profile: {
        type: 'student',
        school: '경희대학교'
    }
}
