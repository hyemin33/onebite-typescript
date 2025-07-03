/** 맵드 타입 => 객체 타입을 조작, interface에서는 쓸 수 없다. 활용도가 높다!! */

interface User {
    id: number;
    name: string;
    age: number;
}


// 왼: key가 id, name, age 중 하나  
// 오: User['id'], User['name'], User['age']; 중 하나
type PartialUser = {
    [key in 'id' | 'name' | 'age']?: User[key];
}

type BooleanUser = {
    // [key in 'id' | 'name' | 'age']?: boolean;

    [key in keyof User]: boolean; // keyof 연산자 이용
}

type ReadonlyUser = {
    readonly [key in keyof User]: User[key];
}

// 한명의 유저 정보를 불러오는 기능
function fetchUser(): User {
    // ... 기능
    return {
        id: 1,
        name: '홍길동',
        age: 30
    };
}

// 한명의 유저 정보를 수정하는 기능
function updateUser(user: PartialUser) {
    // .. 수정하는 기능
}



// 변경되는 값만 보내고 싶은 경우 
updateUser({
    // id: 1,
    // name: '홍길동',
    age: 24
})