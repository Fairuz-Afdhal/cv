import React, { JSX } from "react";

const Container = React.forwardRef<
  HTMLDivElement,
  JSX.IntrinsicElements["div"]
>((props, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className={`container mx-auto px-4 bg-gray-100 border border-gray-300 rounded-lg ${props.className || ""}`}
    >
      {props.children}
    </div>
  );
});

Container.displayName = "Container";

export default Container;