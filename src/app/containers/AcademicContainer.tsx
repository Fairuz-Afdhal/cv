import React from "react";
import Academic from "../components/Academic";
import academics from "../data/academic.json";

const AcademicContainer = () => {
  const academicList = academics.map((academic, index) => (
    <Academic
      key={"academic-item-" + index}
      title={academic.title}
      description={academic.description}
      explanations={academic.explanations}
    />
  ));

  return (
    <ul className="list-disc pl-5">
      {academicList}
    </ul>
  );
};

export default AcademicContainer;