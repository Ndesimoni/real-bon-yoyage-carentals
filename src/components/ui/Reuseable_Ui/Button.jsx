import PropTypes from "prop-types";

const Button = ({ children }) => {
  return (
    <button className=" bg-red-600 text-white px-3 py-1 uppercase hover:bg-stone-900 hover:text-white transition-all mr-auto rounded-md my-3">
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.any,
};

export default Button;
