import { Link } from "react-router-dom";

import downloadIcon from "/assets/logo-icons/download-icon.svg";

export default function HeroSection() {
  return (
    <div className="text-white font-bold px-[50px] lg:px-[123px]">
      <h1 className="text-[#079211] text-[24px] md:text-[38px] mb-[10px] md:mb-0">
        Hello, I&apos;m Tioluwani Enoch Olubunmi
      </h1>
      <h2 className="text-[50px] md:text-[88px] border-e-[6px] border-white w-fit pr-[45px] mb-[38px]">
        MERN Developer
      </h2>
      <p className=" font-normal text-[#808080] w-full  lg:w-[725px]">
        Hello! I’m a passionate web developer from Nigeria with over 2 years of
        experience. My journey into web development began in secondary school,
        where I discovered my passion for creating websites. I had
        the opportunity to further hone my skills during an internship at
        Cinfores Limited, where I delved into MERN (MongoDB, Express.js, React,
        Node.js) development. Starting as a Front-end Developer, I eventually
        transitioned into full-stack MERN development, and I’ve been thriving in
        this field ever since.
      </p>
      <div className="flex items-center gap-[38px] mt-[58px]">
        <Link
          to="/contact"
          className="bg-[#079211] px-[16px] py-[10px] text-white font-bold text-[18px]"
        >
          Email Me
        </Link>

        <a
          href="/assets/documents/tioluwani-enoch-olubunmi-cv.pdf"
          className="flex gap-[10px]"
          download
        >
          <img src={downloadIcon} role="presentation" />
          <span>Download CV</span>
        </a>
      </div>
    </div>
  );
}
