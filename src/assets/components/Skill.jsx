import PropTypes from "prop-types";

import skill from "/assets/logo-icons/skill.svg"

export default function Skill({ title, description }) {
  return (
    <div className="bg-[#313131] px-[25px] py-[68px] border-b-[4px] border-[#079211]">
      <img src={skill} role="presentation" />
      <h3 className="text-white font-bold text-[26px] mt-[46px] mb-[18px]">{title}</h3>
      <p className="text-[#808080]">{description}</p>
    </div>
  );
}

Skill.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
};
