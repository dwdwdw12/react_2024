import { useState } from "react";
import { ColoredMessage } from "./components/ColoredMessage";

//const App = () =>{
export const App = () => {      //export해야 index.js에서 사용 가능. 컴포넌트 파일은 jsx 확장자 사용하기
  console.log("렌더링");

  //State 정의
  const [num, setNum] = useState(0);
  
  //버튼 클릭시 실행되는 함수 정의
  const onClickButton = () => {
    //alert();
    setNum(num+1);
  }; 

  // //CSS 객체.
  // const contentStyle = {
  //   color: "blue",
  //   fontSize: "20px"
  // };

  //분홍색 용으로 추가.
  // const contentPinkStyle = {
  //   color: "pink",
  //   fontSize: "20px"
  // };
  
  return (
      <>             
        {/* {console.log("TEST")} js 작성은 이런식으로            */}
        <h1 style={{color:"red"}}>안녕하세요!</h1>
        {/* <p style={contentStyle}>잘 지내시죠?</p>   */}
        {/* <ColoredMessage /> */}
        {/* <ColoredMessage color="blue" message="잘 지내시죠?"/> */}
        <ColoredMessage color="blue">잘 지내시죠?</ColoredMessage>
        {/* <p style={contentPinkStyle}>잘 지냅니다</p> */}
        {/* <ColoredMessage color="pink" message="잘 지냅니다"/> */}
        <ColoredMessage color="pink">잘 지냅니다</ColoredMessage>
        <button onClick={onClickButton}>버튼</button>
        <p>{num}</p>
      </>
    ); 
};