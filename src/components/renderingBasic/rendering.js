import React from "react";
import { Name, NickName } from "./parents";
// import { Name, NickName } from './props';
// import { Name, NickName } from './info';

// 렌더링 시점
// state가 변경될 때
// props가 변경될 때
// 부모 컴포넌트가 변경될 때
// forceUpdate()가 호출될 때

const RenderingBasic = () => {
  return (
    <div>
      <Name />
      <NickName />
    </div>
  );
};

export default RenderingBasic;
