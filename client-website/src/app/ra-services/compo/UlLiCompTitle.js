import React from "react";

function UlLiCompTitle({ text, desc, slno }) {
  return (
    <li className="text-black text-left space-y-3 my-3">
      <p>
        <span className="font-bold text-black pr-2">{slno}. </span> {text}
      </p>
      <p className="pl-0">{desc}</p>
    </li>
  );
}

export default UlLiCompTitle;
