import React, { useRef, useEffect } from "react";

export default function Onload() {
  const canvasRef = useRef();
  const canvasWidth = 1158;
  const canvasHeight = 770;
  const divRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const frameCount = 148;
    const divTop = divRef.current.getBoundingClientRect().top;
    console.log(divTop);
    // Function to load and draw the image
    const drawImg = (index) => {
      const img = new Image();
      img.src = currentFrame(index);

      img.onload = function () {
        ctx.clearRect(0, 0, canvasWidth, canvasHeight); // Clear the canvas
        ctx.drawImage(img, 0, 0); // Draw the new image
      };
    };

    // Function to generate the image URL based on the frame index
    const currentFrame = (index) => {
      return `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index
        .toString()
        .padStart(4, "0")}.jpg`;
    };

    // Initial image
    drawImg(1);

    // Scroll event listener to change the frame based on scroll position
    window.addEventListener("scroll", () => {
      const scrollTop = window.scrollY - canvasHeight;

      const scrollFraction = scrollTop / (scrollTop + 3000);
      const frameIndex = Math.min(
        frameCount - 1,
        Math.floor(scrollFraction * frameCount)
      );
      console.log(scrollFraction + "\n" + scrollTop + "\n" + divTop);
      // Update the frame
      if (scrollFraction > 0) drawImg(frameIndex);
    });
  }, []); // Runs once on component mount

  return (
    <>
      <button
        onClick={() => {
          console.log(canvasRef.current);
        }}
      >
        Log Canvas
      </button>
      <div className="h-[3000px] w-[90vw] bg-slate-500" ref={divRef}>
        <canvas
          ref={canvasRef}
          width={canvasWidth}
          height={canvasHeight}
          className="sticky top-0"
        ></canvas>
      </div>
      <div className="h-[100vh] w-[90vw] bg-white"></div>
      <div className="h-[100vh] w-[90vw] bg-black"></div>
    </>
  );
}
