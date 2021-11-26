import React, { useEffect } from "react";

export const Child = () => {
  console.log("자식 렌더링 시작");
  useEffect(() => {
    console.log("자식 리렌더링");
  });
  return <div>자식</div>;
};
