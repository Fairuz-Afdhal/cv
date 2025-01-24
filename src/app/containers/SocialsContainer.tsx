import React from "react";
import Social from "../components/Social";
import socials from "../data/socials.json";

const SocialsContainer = () => {
  const socialsList = socials.map((social, index) => (
    <span className="mr-4 inline-block" key={"social-link-" + index}>
      <Social {...social} />
    </span>
  ));

  return <div className="flex justify-center">{socialsList}</div>;
};

export default SocialsContainer;