import PropTypes from 'prop-types'

export default function Input({ type, placeholder, name, value }) {

  return (
    <div className="w-full">
      <input
        type={type}
        name={name}
        id=""
        placeholder={placeholder}
        value={value}
        className="bg-[#2B2B2B] focus:bg-slate-500 ps-5 py-3 w-full rounded-md text-white"
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
