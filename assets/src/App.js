import "./App.css";
import { useState } from "react";

function App() {
  const [pathXYArr, setPathXYArr] = useState([]);

  const mapPathStr = (arr) => {
    if (arr.length < 2) return "";
    let tempStr = `M ${arr[0]} ${arr[1]}`;
    for (let i = 2; i < arr.length - 1; i += 2) {
      tempStr += `L ${arr[i]} ${arr[i + 1]}`;
    }
    return tempStr;
  };

  return (
    <svg
      width="500"
      height="500"
      viewBox="0 0 500 500"
      onClick={(e) => {
        // console.log(e);
        const { clientX, clientY } = e;
        const _pathXYArr = [...pathXYArr, clientX, clientY];
        setPathXYArr(_pathXYArr);
        console.log(_pathXYArr);
      }}
    >
      <path
        id="polyline"
        d={mapPathStr(pathXYArr)}
        fill="none"
        stroke="black"
        stroke-width="1"
      />
    </svg>
  );
}

// function App() {
//   return <Board />;
// }

export default App;
