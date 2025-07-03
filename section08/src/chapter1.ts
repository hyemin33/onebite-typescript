/** 인덱스드 엑세스 타입
 *  객체일때 
 */

interface Post {
    title: string;
    content: string;
    author: {
        id: number;
        name: string;
        age: number
    };
}

function printAuthorInfo(author: Post['author']){
    console.log(`${author.name}-${author.id}`)
}

const post: Post = {
    title: '제목',
    content: '내용',
    author: {
        id: 3,
        name: '홍길동',
        age: 8
    }
}

printAuthorInfo(post.author);