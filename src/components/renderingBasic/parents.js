import React, { useState } from "react";

const style = { margin: "10px", padding: "10px" };

const HelpName = React.memo(() => {
  return <span>Name 변경 컴포넌트 입니다.</span>;
});

const HelpNickName = () => {
  return <span>NickName 변경 컴포넌트 입니다.</span>;
};

export const Name = () => {
  const [name, setName] = useState("");
  return (
    <div style={style}>
      <HelpName />
      <input onChange={(e) => setName(e.target.value)} placeholder="이름" />
      <span>{name}</span>
    </div>
  );
};

export const NickName = () => {
  const [nickName, setNickName] = useState("");
  return (
    <div style={style}>
      <HelpNickName />
      <input onChange={(e) => setNickName(e.target.value)} placeholder="별명" />
      <span>{nickName}</span>
    </div>
  );
};
