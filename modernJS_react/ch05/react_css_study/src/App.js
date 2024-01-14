import { CssModules } from "./components/CssModules";
import { StyledJsx } from "./components/StyledJsx";
import { StyledComponents } from "./components/StyledComponents";
import { Emotion } from "./components/Emotion";
import { TailwindCss } from "./components/TailwindCss";

function App() {
  return (
    <div>
      <CssModules/>
      <StyledJsx/>
      <StyledComponents />
      <Emotion/>
      <TailwindCss/>  
    </div>
    //tailwindcss 적용 문제...
  );
}

export default App;
