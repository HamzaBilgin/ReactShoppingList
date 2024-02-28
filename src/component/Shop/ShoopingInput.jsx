import PropTypes from "prop-types";

const ShoopingInput = (props) => {
  const { name, onChange, value } = props;
  return (
    <>
      <input
        type="text"
        className="bg-transparent w-3/4 pl-3 hover:bg-sky-700 group-hover:bg-slate-300 focus:bg-red-300 border"
        name={name}
        onChange={onChange}
        value={value}
      />
    </>
  );
};

export default ShoopingInput;

ShoopingInput.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};
