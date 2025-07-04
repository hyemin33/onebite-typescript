/** Pick<T, K>
 *  -> 뽑다, 고르다
 *  -> 객체 타입으로부터 특정 프로퍼티만 골라내는 타입
 */

interface Post {
    title: string;
    tags: string[],
    content: string;
    thumbnailURL?: string;
};


// T = Post, K = 'title' | 'content'
// K extends keyof T로 K의 범위를 제한한다.
// 'title' | 'content' extends 'title' | 'content' | 'thumbnailURL' | 'tags'
type Pick<T, K extends keyof T> = {
    [key in K]: T[key];
}


// 옛날 글이라 tag나 Url이 없을 경우.. pick 해와야함
const legacyPost: Pick<Post, 'title' | 'content'> = {
    title: '옛날 글입니다',
    content: '옛날 컨텐츠'
}




/** Omit<T, K>
 *  -> 생략하다, 빼다
 *  -> 객체 타입으로부터 특정 프로퍼티를 제거하는 타입
 */


type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// T = Post, K = 'title'
// Pick<Post, Exclude<keyof Post, 'title'>>
// Pick<Post, Exclude<'title' | 'content' | 'tags' | 'thumbnailURL', 'title>>
// Pick<Post, 'content' | 'tags' | 'thumbnailURL'>

// title만 제거한 타입들을 제공한다.
const noTitlePost: Omit<Post, 'title'> = {
    content: '옛날 컨텐츠',
    tags: [],
    thumbnailURL: ''
}





/** Record<K, V> 
 *  -> 실무에서 많이 쓰임
*/

// 버전마다 중복코드가 생긴다. -> Record 타입을 사용한다
type ThumbailLegacy = {
    large: {
        url: string;
    },
    medium: {
        url: string;
    },
    small: {
        url: string;
    }
}


// 어떤 타입인지는 모르겠지만 어떤 객체 타입의 키를 가져온거야~ 의미
type Record<K extends keyof any, V> = {
    [key in K]: V;
}


// Record를 사용해서 위의 코드를 아래처럼 줄일 수 있다.
type Thumbail = Record<'large' | 'medium' | 'small', {url: string, size: number}>;