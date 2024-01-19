//react에서 useContext를 import
import { useContext } from "react";

//작성한 Context를 import
import { AdminFlagContext } from "./providers/AdminFlagProvider";

const style = {
    width: "100px",
    padding: "6px",
    borderRadius: "8px"
};

export const EditButton = props => {
    //const {isAdmin} = props;
    //Context 안의 isAdmin을 얻는다
    const {isAdmin} = useContext(AdminFlagContext);

    //useContext의 인수의 참조할 Context를 지정
    //const contextValue = useContext(AdminFlagContext);
    //console.log(contextValue);

    return (
        <button style={style} disabled={!isAdmin}>
            수정
        </button>
    );
};