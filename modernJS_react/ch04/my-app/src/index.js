import ReactDOM from "react-dom"; //모듈 import
import {App} from "./App";

// const App = () =>{
//   //return null;
//   //return <h1>안녕하세요!</h1>;
//   return (
//                         // 또는 <div>, <Fragment> 태그 사용. 추가적인 DOM을 생성하느냐 마느냐의 차이(<>, <Fragment>)
//     <>                       
//       <h1>안녕하세요!</h1>
//       <p>잘 지내시죠?</p>  
//     </>
//   );

// };

ReactDOM.render(<App />, document.getElementById("root"));  //root : index.html에 존재.
