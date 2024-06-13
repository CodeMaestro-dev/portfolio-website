import PropTypes from 'prop-types'

export default function Input({ type, placeholder, name, value }) {
  let style = null;
  if (type == "submit") {
    style =
      "bg-[#079211] focus:bg-slate-500 ps-5 py-3 w-full md:w-96 rounded-md text-white cursor-pointer hover:bg-slate-500 transition-all uppercase font-bold";
  } else {
    style =
      "bg-[#2B2B2B] focus:bg-slate-500 ps-5 py-3 w-full md:w-96 rounded-md text-white";
  }

  return (
    <div className="">
      <input
        type={type}
        name={name}
        id=""
        placeholder={placeholder}
        value={value}
        className={style}
      />
    </div>
  );
}

Input.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    name:  PropTypes.string,
    value: PropTypes.string,
}
