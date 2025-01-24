import React from "react";
import { v4 as UUIDv4 } from "uuid";

interface IAcademicProps {
  title: string;
  description: string;
  explanations: string[]; // Add a list of explanations
}

const Academic = (props: IAcademicProps) => {
  const explanationsList = props.explanations.map((item) => (
    <li key={UUIDv4()} className="text-gray-700 py-1 text-base font-sans">
      {item}
    </li>
  ));

  return (
    <li className="mb-4">
      <div className="flex justify-between items-start">
        <div>
          <span className="text-lg font-bold">{props.title}</span>
        </div>
      </div>
      <div className="mt-1">
        <span className="font-sans">{props.description}</span>
      </div>
      <ul className="list-disc pl-5 mt-2">
        {explanationsList}
      </ul>
    </li>
  );
};

export default Academic;