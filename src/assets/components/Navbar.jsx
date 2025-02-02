import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const SET_SHOW = () => {
    setShow(!show);
  };

  return (
    <div className="bg-[#101017] px-[20px] lg:px-[123px] py-[23px] text-white font-bold flex flex-col items-center gap-[20px] md:gap-0 md:flex-row fixed w-full justify-between font-mono">
      <div className="flex items-center justify-between w-full">
        <Link to="/" className="text-[24px]">
          CodeMaestro-dev<span className="text-[#079211] text-[30px]">.</span>{" "}
        </Link>

        <div className="block md:hidden cursor-pointer" onClick={SET_SHOW}>
          {!show ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          )}
        </div>
      </div>

      {show ? (
        <ul className="flex md:hidden flex-col gap-[10px] items-center">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li className="border border-[#079211] px-4 py-2">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      ) : (
        <></>
      )}

      <ul className="hidden  md:flex gap-[38px] items-center">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li className="border border-[#079211] px-4 py-2">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}
