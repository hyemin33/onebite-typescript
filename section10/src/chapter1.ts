/** Partial<T>
 *  -> 부분적인, 일부분의
 *  -> 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔줌
 */

interface Post {
    title: string;
    tags: string[],
    content: string;
    thumbnailURL?: string;
};

// Partial<T>를 직접 만들어보자
type Partial<T> = {
    [key in keyof T]?: T[key];
};

// 임시저장 게시글이라 tags나 다른 값이 없으면 타입 오류가 난다. 이럴때 Partial을 사용하면 선택적 프로퍼티로 바꿔준다.
const draft: Partial<Post> = {
    title: '제목 작성 중',
    content: '초안..'
};






/** Required<T> 
 *  -> 필수의, 필수적인
 *  -> 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입
*/


// ? 앞에 -를 붙이면 필수가 된다.
type Required<T> = {
    [key in keyof T]-?: T[key]
};

const withThumbnailPost : Required<Post> = {
    title: '제목 제목',
    tags: ['ts', 'js'],
    content: '!!!!!!',
    thumbnailURL: 'https://www.naver.com'
};




/** Readonly<T> 
 *  -> 읽기전용 수정불가
 *  -> 특정 객체 타입에서 모든 프로퍼티를 읽기 전용 프로퍼티로 만들어주는 타입
*/

type Readonly<T> = {
    readonly [key in keyof T]: T[key];
}

const readonlyPost: Readonly<Post> = {
    title: '제목 제목',
    tags: ['ts', 'js'],
    content: '!!!!!!',
    thumbnailURL: 'https://www.naver.com'
};

// 수정 불가
// readonlyPost.contet = "";