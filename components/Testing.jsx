"use client";
import React, { useEffect } from "react";

import { useRef } from "react";

export default function Testing() {
  const divRef = useRef();
  const check = useRef();
  useEffect(() => {
    const div = divRef.current;

    window.addEventListener("scroll", () => {
      const fraction = div.scrollTop / 4000;
      console.log(fraction, window.scrollTop);
    });
  });
  return (
    <>
      <div className="h-[200vh] bg-black">
        <div></div>
      </div>
      <div className="h-[4000px] bg-slate-700" ref={divRef}></div>
      <div className="h-[200vh] bg-slate-200" ref={check}></div>
    </>
  );
}
