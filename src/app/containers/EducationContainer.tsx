import React from "react";
import Education from "../components/Education";
import educations from "../data/educations.json";

const EducationContainer = () => {
  const educationsList = educations.map((education, index) => (
    <Education {...education} key={"education-item-" + index} />
  ));

  return (
    <ul className="list-disc pl-5">
      {educationsList}
    </ul>
  );
};

export default EducationContainer;