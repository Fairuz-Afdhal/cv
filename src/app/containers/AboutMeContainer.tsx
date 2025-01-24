import React from "react";
import AboutMeItem from "../components/AboutMeItem";
import aboutmelist from "../data/aboutme.json";

const AboutMeContainer = () => {
  const othersList = aboutmelist.map((entry, index) => (
    <AboutMeItem {...entry} key={"about-me-item-" + index} />
  ));

  return (
    <ul className="list-disc pl-5">
      {othersList}
    </ul>
  );
};

export default AboutMeContainer;