import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          console.log("클릭 감지됨");
          setCount(count - 1);
        }}
      >
        - 1
      </button>
      <span> </span>
      <button
        onClick={() => {
          console.log("클릭 감지됨");
          setCount(0);
        }}
      >
        초기화
      </button>
      <span> </span>
      <button
        onClick={() => {
          console.log("클릭 감지됨");
          setCount(count + 1);
        }}
      >
        + 1
      </button>      
    </div>
  );
}

export default App;
