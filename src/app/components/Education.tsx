import React from "react";

interface IEducationProps {
  name: string;
  location: string;
  duration: string;
  degree?: string;
}

const Education = (props: IEducationProps) => {
  return (
    <li className="mb-2">
      <div className="flex justify-between">
        <div>
          <span className="text-lg font-semibold">{props.name}</span>
          , 
          <span>{props.location}</span>
        </div>
        <span className="text-sm font-bold">{props.duration}</span>
      </div>
      {props.degree && <span className="font-sans">{props.degree}</span>}
    </li>
  );
};

export default Education;