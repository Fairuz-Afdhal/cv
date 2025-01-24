import React, { JSX } from "react";

const Container = React.forwardRef<
  HTMLDivElement,
  JSX.IntrinsicElements["div"]
>((props, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className={`container mx-auto px-4 ${props.className || ""}`}
    >
      {props.children}
    </div>
  );
});

Container.displayName = "Container";

export default Container;