import React from "react";
import Skill from "../components/Skill";
import skills from "../data/skills.json";

const SkillsContainer = () => {
  return (
    <div className="space-y-4">
      {skills.map((category, index) => (
        <div key={"skill-category-" + index}>
          <h3 className="text-xl font-bold mb-2">{category.category}</h3>
          <ul className="flex flex-wrap gap-4"> {}
            {category.items.map((item, itemIndex) => (
              <Skill
                key={"skill-item-" + itemIndex}
                name={item.name}
                icon={item.icon}
              />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SkillsContainer;