// enum 타입 -> 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
    ADMIN,
    USER = 1,
    GUEST 
}

enum Language {
    korea = "ko",
    english = "en"
}

const user1 = {
    name: "홍길동",
    role: Role.ADMIN, // 관리자
    language: Language.korea
}

const user2 = {
    name: "김수연",
    // role: 1  일반 유저
    role: Role.USER,
    language: Language.korea
}

const user3 = {
    name: "박지유",
    // role: 2 게스트
    role: Role.GUEST,
    language: Language.english
}
