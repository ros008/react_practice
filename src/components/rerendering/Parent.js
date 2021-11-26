import React, { useEffect, useState } from "react";

export const Parent = ({ children }) => {
  console.log("부모 렌더링 시작");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("부모 리렌더링");
  });
  return (
    <div>
      <h1>부모</h1>
      <button onClick={() => setCounter(counter + 1)}>
        부모 버튼 {counter}
      </button>
      {children}
    </div>
  );
};
