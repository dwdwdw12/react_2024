import { createContext, useState } from "react";

export const AdminFlagContext = createContext({});

export const AdminFlagProvider = props => {
    const {Children} = props;

    //동작 확인을 위해 적절한 객체를 정의
    //const sampleObj = {sampleValue: "테스트"};

    //관리자 플래그
    const [isAdmin, setIsAdmin] = useState(false);

    //AdminFlgContext 안에 Provider가 잇으므로 각각 childeren을 감싼다
    //value 안에 글로벌로 다룰 실제 값을 설정
    // ->
    //Context 객체로서 isAdmin과 setIsAdmin을 설정(객체 생략 표기법)
    return(
        // <AdminFlagContext.Provider value={sampleObj}>
        <AdminFlagContext.Provider value={{isAdmin, setIsAdmin}}>   

            {Children}
        </AdminFlagContext.Provider>
    );
};