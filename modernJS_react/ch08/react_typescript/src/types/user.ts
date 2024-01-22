export type User = {
    id: number;
    name: string;
    age: number;
    personalColor?: string; // ?: -- 생략 가능할 경우.
    hobbies?: string[];
};