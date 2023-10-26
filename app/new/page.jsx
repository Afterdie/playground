"use client";

import Box from "@/components/Box";
import Gestures from "@/components/Gestures";
import Onload from "@/components/Onload";

export default function page() {
  return (
    <div>
      <div className="flex justify-center items-center flex-col">
        <Box />
        <Gestures />
        <Onload />
      </div>
    </div>
  );
}
