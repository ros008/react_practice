import React, { useEffect, useState } from "react";
import { Parent } from "./Parent";
import { Child } from "./Child";

const Rerendering = () => {
  console.log("렌더링 시작");
  useEffect(() => {
    console.log("리렌더링");
  });
  return (
    <Parent>
      <Child />
    </Parent>
  );
};

export default Rerendering;
