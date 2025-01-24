import React from "react";
import * as FaIcons from "react-icons/fa"; // Import all Font Awesome icons
import * as SiIcons from "react-icons/si"; // Import all Simple Icons icons
import * as RiIcons from "react-icons/ri"; // Import all Remix icons

interface ISkillProps {
  name: string;
  icon: string;
}

const Skill = (props: ISkillProps) => {

  const Icon = SiIcons[props.icon as keyof typeof SiIcons] || FaIcons[props.icon as keyof typeof FaIcons] || RiIcons[props.icon as keyof typeof RiIcons];

  if (!Icon) {
    console.error(`Invalid icon: ${props.icon}`);
    return (
      <li className="flex items-center space-x-2 bg-gray-100 px-3 py-1 rounded-lg">
        <span>{props.name}</span>
      </li>
    );
  }

  return (
    <li className="flex items-center space-x-2 bg-gray-100 px-3 py-1 rounded-lg">
      <Icon className="w-4 h-4 text-gray-600 print:hidden" />
      <span>{props.name}</span>
    </li>
  );
};

export default Skill;