import React, { JSX } from "react";

const Row = (props: JSX.IntrinsicElements["div"]) => {
  return (
    <div
      {...props}
      className={`flex flex-wrap -mx-4 ${props.className || ""}`}
    >
      {props.children}
    </div>
  );
};

export default Row;