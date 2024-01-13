/** @jsxImportSource @emotion/react */      //이거 있어야 동작...
import {jsx, css} from "@emotion/react";    //컴포넌트 파일 안에 css 작성
import styled from "@emotion/styled";   //styled components와 같은 작성법

export const Emotion = () => {
    //scss와 동일하게 작성가능
    const containerStyle = css`
        border: solid 1px #aaa;
        border-radius: 20px;
        padding: 8px;
        margin: 8px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    `;

    //인라인 스타일 작성방법
    const titleStyle = css({
        margin: 0,
        color: "#aaa",
    });

    return (
        <div css={containerStyle}>
            <p css={titleStyle}>Emotion입니다</p>
            <SButton>버튼</SButton>
        </div>
    );
};


//styled-components 작성 방법
const SButton = styled.button`
    background-color: #ddd;
    border: none;
    padding: 8px;
    border-radius: 8px;
    &:hover {
    background-color: #aaa;
    color: #fff;
    cursor: pointer;
    }
`;