import { ChangeEvent, useState, FC, useCallback } from "react";
import styled from "styled-components";
import { MemoList } from "./MemoList";
import { useMemoList } from "../hooks/useMemoList";

export const App: FC = () => {
  //사용자 정의 훅으로 각각 얻기
  const {memos, addTodo, deleteTodo} = useMemoList();

  //텍스트 박스 State
  const [text, setText] = useState<string>(""); //string 대문자 아님...
  //메모 목록 State
  //const [memos, setMemos] = useState<string[]>([]); //string 대문자 아님...

  //텍스트 박스 입력 시 입력 내용을 State에 설정
  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => setText(e.target.value);

  //[추가] 버튼 클릭 시
  const onClickAdd = () => {
    // //State 변경을 정상적으로 감지하기 위해 새로운 배열을 생성
    // const newMemos = [...memos];
    // //텍스트 박스 입력 내용을 메모 배열에 추가
    // newMemos.push(text);
    // setMemos(newMemos);

    //사용자 정의 훅의 메모 추가 로직 실행
    addTodo(text);

    //텍스트 박스 비움
    setText("");
  };

  //[삭제] 버튼 클릭 시(몇 번째 버튼이 클릭되었는지 인수로 전달)
  //const onClickDelete = (index: number) => {
  const onClickDelete = useCallback((index: number) => {  
    // //State 변경을 정상적으로 감지하기 위해 새로운 배열을 생성
    // const newMemos = [...memos];
    // //메모 배열로부터 해당 요소 삭제
    // newMemos.splice(index, 1);
    // setMemos(newMemos);

    //사용자 정의 훅의 메모 삭제 로직 실행
    deleteTodo(index);

  //};
  //}, [memos]);
  }, [deleteTodo]);

  return (
    <div>
      <h1>간단 메모 애플리케이션</h1>
      <input type="text" value={text} onChange={onChangeText}/>
      <SButton onClick={onClickAdd}>추가</SButton>
      <MemoList memos={memos} onClickDelete={onClickDelete}/>
      {/* <SContainer>
        <p>메모 목록</p>
        <ul>
          {memos.map((memo, index) => (
            <li key={memo}>
              <SMemoWrapper>
                <p>{memo}</p>
                <SButton onClick={() => onClickDelete(index)}>삭제</SButton>
              </SMemoWrapper>
            </li>
          ))}
        </ul>
      </SContainer> */}
    </div>  
    );
};

const SButton = styled.button`
  margin-left: 16px;
`;

// const SContainer = styled.div`
//   border: solid 1px #ccc;
//   padding: 16px;
//   margin: 8px;
// `;

// const SMemoWrapper = styled.div`
//   display: flex;
//   align-items: center;
// `;