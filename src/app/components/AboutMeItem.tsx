import React from "react";

interface IAboutMeItemProps {
  title: string;
  description: string;
}

const AboutMeItem = (props: IAboutMeItemProps) => {
  return (
    <li className="text-gray-700 py-1 text-base font-extralight">
      {}
      <span>{props.description}</span>
    </li>
  );
};

export default AboutMeItem;