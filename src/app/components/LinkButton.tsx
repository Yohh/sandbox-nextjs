"use client";

import React from "react";

type LinkButtonProps = {
  text: string;
};

const LinkButton = ({ text }: LinkButtonProps) => {
  return (
    <div className="text-xl font-bold bg-orange-300 hover:bg-orange-700 rounded-xl border-t-2 border-t-orange-600 hover:border-t-white border-b-2 border-b-orange-600 hover:border-b-white hover:text-white">
      <span className="px-2">{text}</span>
    </div>
  );
};

export default LinkButton;
