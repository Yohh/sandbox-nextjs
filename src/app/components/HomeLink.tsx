import React from "react";
import LinkButton from "./LinkButton";

export const HomeLink = () => {
  return (
    <div className="absolute top-6 left-10 text-xl text-orange-900">
      <LinkButton text="HOME" path="/" />
    </div>
  );
};
