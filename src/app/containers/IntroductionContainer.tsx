import React from "react";
import { v4 as UUIDv4 } from "uuid";
import introduction from "../data/introduction.json";

const IntroductionContainer = () => {
  const descriptionList = introduction.descriptions.map((item) => (
    <li key={UUIDv4()}>{item}</li>
  ));

  return (
    <ul className="text-gray-700 py-1 text-base font-sans pl-5">
      {descriptionList}
    </ul>
  );
};

export default IntroductionContainer;