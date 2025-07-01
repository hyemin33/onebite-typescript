// 타입 별칭
type User = {
    id: number,
    name: string,
    nickname: string,
    birth: string
}

let user: User = {
    id: 1,
    name: "홍길동",
    nickname: "hong",
    birth: "1994.01.07"
}

// 인덱스 시그니처 = 규칙을 이용해서 타입때 사용
type CountryCodes = {
    [key: string]: string;
}

let countryCodes: CountryCodes = {
    Korea: "ko",
    UnitedState: "us",
    UnitedKingdom: "uk"
}

type CountryNumberCodes = {
    [key: string]: number;
    Korea: number;
}

let countryNumberCodes: CountryNumberCodes = {
    Korea: 410,
    UnitedState: 840,
    UnitedKingdom: 826
}