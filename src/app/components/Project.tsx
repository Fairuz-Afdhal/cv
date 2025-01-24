import React from "react";

interface IProjectProps {
  title: string;
  description: string;
  url?: string;
}

const Project = (props: IProjectProps) => {
  return (
    <li className="mb-4">
      <div>
        <span className="text-lg font-bold">
          {props.url ? (
            <a
              target="blank"
              rel="nofollow noreferrer"
              href={props.url}
              className="text-blue-600 no-underline"
            >
              {props.title}
            </a>
          ) : (
            props.title
          )}
        </span>
      </div>
      <div className="mt-1">
        <span className="text-gray-700 text-base font-sans">
          {props.description}
        </span>
      </div>
    </li>
  );
};

export default Project;