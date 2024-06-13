import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-[#050507] px-[50px] lg:px-[123px] py-[48px] text-white">
      <div className=" border-b-[1px] border-[#313131] flex flex-col lg:flex-row gap-[50px] lg:gap-0 justify-between pr-[142px] pb-[68px]">
        <Link to="/" className="text-[24px]">
          CodeMaestro-dev<span className="text-[#079211] text-[30px]">.</span>{" "}
        </Link>
        <div className="flex flex-col md:flex-row gap-[50px] lg:gap-[144px]">
          <ul>
            <li className="font-semibold text-[20px]">Information</li>
            <li className="text-[#808080] text-[16px]">+234 903 725 4275</li>
            <li className="text-[#808080] text-[16px]">
              codemaestro101@gmail.com
            </li>
            <li className="text-[#808080] text-[16px]">
              Trans Amadi Gardens, Port Harcourt, Nigeria
            </li>
          </ul>
          <ul>
            <li className="font-semibold text-[20px]">Social Media</li>
            <li className="text-[#808080] text-[16px]">
              <a href="https://github.com/CodeMaestro-dev">GitHub</a>
            </li>
            <li className="text-[#808080] text-[16px]">
              <a href="https://x.com/EnochTiolu40212">Twitter</a>
            </li>
            <li className="text-[#808080] text-[16px]">
              <a href="https://www.linkedin.com/in/tioluwani-olubunmi-52557428b/">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-[20px] md:gap-0 justify-between pt-[26px]">
        <p>
          Design by <span className="text-[#079211]">Alifreza</span> and
          developed by <span className="text-[#079211]">CodeMaestro-dev</span>
        </p>

        <p className="text-[#808080] text-[14px]">Copyright ©2023</p>
      </div>
    </div>
  );
}
