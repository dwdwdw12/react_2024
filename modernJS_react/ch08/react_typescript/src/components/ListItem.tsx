import type { User } from "../types/user";
import type { FC } from "react";

//Props 타입 정의
// type User = {
//     id: number;
//     name: string;
//     age: number;
//     personalColor: string;
// };

//export const ListItem = props => {
//export const ListItem = (props: User) => {
export const ListItem: FC<User> = props => {
    //const {id, name, age} = props;
    const {id, name, age, personalColor, hobbies} = props;
    //const {id, name, age, personalColor="grey"} = props;    //분할대입. 디폴트 값 설정

    return(
        //<p>
        <p style={{color: personalColor}}>
            {id} : {name}({age}) {hobbies?.join("/")}
        </p>
    );
};

ListItem.defaultProps = {   //디폴트 설정 2번째 방법
    personalColor: "grey"
};