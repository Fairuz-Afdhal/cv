import React from "react";
import * as SiIcons from "react-icons/si";
import * as FaIcons from "react-icons/fa";

interface ISocialProps {
  label: string;
  isEmail: boolean;
  value: string;
  icon: string;
}

const Social = (props: ISocialProps) => {
  const link = props.isEmail ? `mailto:${props.value}` : props.value;

  const Icon = SiIcons[props.icon as keyof typeof SiIcons] || FaIcons[props.icon as keyof typeof FaIcons];
 
  return (
    <a
      href={link}
      className="text-blue-600 no-underline flex flex-row items-center"
    >
      <Icon size={18} />
      <span className="ml-1.5">{props.label}</span>
    </a>
  );
};

export default Social;