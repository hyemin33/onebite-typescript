/** 프로미스 
 * 제네릭 클래스를 기반으로 타입이 선언되어 있기 때문에
 * 비동기의 결과값을 타입으로 넣으면 알아서 추론이 된다. 
 * 하지만 실패했을때 타입은 정해질 수 없다.
*/

// 
const promise = new Promise<number>((resolve, reject) => {
    setTimeout(() => {
        // resolve(20);
        reject('실패');
    }, 3000);
});


promise.then((response) => {
    console.log(response * 10);
});

promise.catch((err) => {
    if(typeof err === 'string'){
        console.log(err);
    }
});


/** 프로미스를 반환하는 함수의 타입을 정의 */
interface Post {
    id: number;
    title: string;
    content: string;
}

// 함수 뒤에 반환값 타입을 선언하는 것을 추천한다.
function fetchPost(): Promise<Post>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: 1,
                title: '게시글 제목',
                content: '게시글 컨텐츠'
            });
        }, 3000)
    })
}

const postRequest = fetchPost();

postRequest.then((post) => {
    post.id
})