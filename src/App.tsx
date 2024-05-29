import "./App.css";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  // 0일 때 초기화 버튼 안 보이게
  let reset = (
    <button
      onClick={() => {
        console.log("클릭 감지됨");
        setCount(0);
      }}
    >
      초기화
    </button>
  );
  if (count === 0) {
    reset = <button>❤</button>;
  }

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
      {reset}
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

function App() {
  return(
    <div>
      <h2>Hello, REACT!</h2>
      <p>UseState: Counter</p>
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
  
}

export default App;
