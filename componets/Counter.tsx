"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCounter] = useState(0);
  return (
    <>
      <h1>카운터 페이지 </h1>;<p>{count} </p>
      <button
        onClick={() => {
          setCounter((num) => num + 1);
        }}
      >
        숫자 증가 시키기
      </button>
    </>
  );
}
