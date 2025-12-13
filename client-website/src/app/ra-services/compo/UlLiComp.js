import React from "react";

function UlLiComp({ text }) {
  return (
    <li className="text-black text-left space-y-3 my-3">
      <p>
        <span className="font-bold text-black pr-2">&#9679;</span> {text}
      </p>
    </li>
  );
}

export default UlLiComp;
