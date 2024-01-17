import { useState, memo, useCallback } from "react";
import { Child1 } from "./components/Child1";
import { Child4 } from "./components/Child4";

export const App = memo(() => {
  console.log("App 렌더링");

  const [num, setNum] = useState(0);

  const onClickButton = () => {
    setNum(num + 1);
  };

  //const onClickReset = () => {      //하위 항목이 재렌더링됨.
  const onClickReset = useCallback(() => {  //함수 메모이제이션
    setNum(0);
  }, []);

  return(
    <>
      <button onClick={onClickButton}>버튼</button>
      <p>{num}</p>
      {/* <Child1 /> */}
      {/* Probs로 함수 설정 */}
      <Child1 onClickReset={onClickReset}/>
      <Child4 />
    </>
  );
});
