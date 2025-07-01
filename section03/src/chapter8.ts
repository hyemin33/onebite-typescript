/** 서로소 유니온 타입
 * 교집합이 없는 타입들로만 만든 유니온 타입을 말한다.
 */

type Admin = {
    tag: 'ADMIN';
    name: string;
    kickCount: number;
};
type Member = {
    tag: 'MEMBER';
    name: string;
    point: number;
};
type Guest = {
    tag: 'GUEST';
    name: string;
    visitCount: number;
};

type User = Admin | Member | Guest;

function login(user:User) {
    switch(user.tag) {
        case 'ADMIN': {
            console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
            break;
        }
        case 'MEMBER': {
            console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`);
            break;
        }
        case 'GUEST': {
            console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문했습니다.`);
            break;
        }
    }


    // if('kickCount' in user){
    //     console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
    // } else if('point' in user){
    //     console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`);
    // } else {
    //     console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문했습니다.`);
    // }
}



/** 다른 상황 
 * 비동기 작업의 결과를 처리하는 객체


1) 처음에는 한번에 만들어서 사용했으나 fail과 success일때는 state를 제외한 값들이
선택적 property이기 때문에 옵셔널 체이닝을 쓰지 않으면 오류가 뜬다.

!!! 해결방법으로 각각 다른 type을 만들고 그것을 서로소 union타입으로 해야한다.

type AsyncTask = {
    state: 'LOADING' | 'FAILED' | 'SUCCESS',
    error?: {
        message: string;
    },
    response?: {
        data: string;
    };
};

*/


type LoadingTask = {
    state: 'LOADING',
}

type FailedTask = {
    state: 'FAILED',
    error: {
        message: string;
    }
}

type SuccessTask = {
    state: 'SUCCESS',
    response: {
        data: string;
    };
}

type AsyncTask = LoadingTask | FailedTask | SuccessTask;


function processResult(task:AsyncTask){
    switch(task.state){
        case 'LOADING': {
            console.log('로딩중');
            break;
        }
        case 'FAILED': {
            console.log(`에러 발생: ${task.error.message}`);
            break;
        }
        case 'SUCCESS': {
            console.log(`성공: ${task.response.data}`);
            break;
        }
    }
}

const loading:AsyncTask = {
    state: 'LOADING',
};

const filed:AsyncTask = {
    state: 'FAILED',
    error: {
        message: '오류가 발생했습니다.'
    }
};

const success:AsyncTask = {
    state: 'SUCCESS',
    response: {
        data: '데이터'
    }
};


