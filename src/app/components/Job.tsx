import React from "react";
import { v4 as UUIDv4 } from "uuid";

interface IJobProps {
  employer: {
    name: string;
    location: string;
    url: string;
  };
  position: string;
  duration: string;
  descriptions: string[];
}

const Job = (props: IJobProps) => {
  const descriptionsList = props.descriptions.map((item) => (
    <li key={UUIDv4()} className="text-gray-700 py-1 text-base font-sans">
      {item}
    </li>
  ));

  return (
    <li className="mb-4">
      <div className="flex justify-between items-start">
        <div className="flex items-center">
          <a
            target="blank"
            rel="nofollow noreferrer"
            href={props.employer.url}
            className="text-lg font-bold text-blue-600 no-underline"
          >
            {props.employer.name}
          </a>
          <span className="ml-1 text-gray-700">
            , {props.employer.location}
          </span>
        </div>
        <span className="text-sm font-bold text-gray-700">
          {props.duration}
        </span>
      </div>
      <div className="mt-1">
        <span className="italic">{props.position}</span>
      </div>
      <ul className="list-disc pl-5 mt-2">
        {descriptionsList}
      </ul>
    </li>
  );
};

export default Job;