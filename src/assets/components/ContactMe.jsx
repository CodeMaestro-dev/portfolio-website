import { Link } from "react-router-dom";

export default function ContactMe() {
  return (
    <div className="bg-[#0A0A0F] border-l-[10px] border-[#079211] flex justify-between items-center h-full px-[123px] py-[63px]">
      <div>
        <h3 className="font-bold text-[38px] text-white">
          Have any project in mind ?
        </h3>
        <p className="text-[16px] text-[#808080] mt-[16px]">
          Feel free to contact me or just say friendly hello!
        </p>
      </div>
      <div>
        <Link
          to="/contact"
          className="bg-[#079211] px-[16px] py-[10px] text-white font-bold text-[18px]"
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
}
