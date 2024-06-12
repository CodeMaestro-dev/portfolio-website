import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-[#101017] px-[123px] py-[23px] text-white font-bold  flex fixed w-full justify-between font-mono">
      <Link to="/" className="text-[24px]">CodeMaestro-dev<span className="text-[#079211] text-[30px]">.</span> </Link>

      <ul className="flex gap-[38px] items-center">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
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
