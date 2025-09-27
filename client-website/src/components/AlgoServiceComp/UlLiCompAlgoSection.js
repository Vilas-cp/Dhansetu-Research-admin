import React from "react";

function UlLiCompAlgoSection({ title, description }) {
  return (
    <li className="text-black text-left space-y-3 my-3">
      <p>
        <span className="font-bold text-black pr-2">&#9679;</span> {title}
      </p>
      <p className="pl-6">{description}</p>
    </li>
  );
}

export default UlLiCompAlgoSection;
