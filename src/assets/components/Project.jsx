import PropTypes from 'prop-types'
import externalLink from "/assets/logo-icons/external-link.svg";

export default function Project({img, link, project}) {
  return (
    <div className="flex flex-col">
      <img src={img} role="presentation" className="h-[550px] object-cover"/>
      <h4 className="text-white text-[20px] md:text-[28px] font-bold mt-[38px] mb-[16px]">{project}</h4>
      <a href={link} target="_blank" className="flex items-center gap-[10px]">
        <span className="text-[#079211]">See Project</span>
        <img src={externalLink} role="presentation" />
      </a>
    </div>
  );
}


Project.propTypes = {
    img: PropTypes.string,
    link: PropTypes.string,
    project: PropTypes.string
}


