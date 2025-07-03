/** 인덱스드 엑세스 타입
 *  배열일때
 */


// interface는 객체타입에 특화되어 있어서 배열타입일때는 type을 사용한다.
type PostList = {
    title: string;
    content: string;
    author: {
        id: number;
        name: string;
        age: number
    };
}[];

function printAuthorInfo(author: PostList[number]['author']){
    console.log(`${author.name}-${author.id}`)
}

const post: PostList[number] = {
    title: '제목',
    content: '내용',
    author: {
        id: 3,
        name: '홍길동',
        age: 8
    }
}

printAuthorInfo(post.author);



/** 튜플타입 */

type Tup = [number, string, boolean];

type Tup0 = Tup[0];
type Tup1 = Tup[1];

// 최적의 공통 타입을 뽑아온다.  => number, string, boolean
type TupNum = Tup[number];