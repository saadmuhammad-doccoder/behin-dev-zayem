// eslint-disable-next-line react/prop-types
const Button = ({ children }) => {
  return (
    <div className="hidden lg:flex">
      <button className="bg-teal-400 text-black rounded-full px-6 py-4 hover:bg-teal-500 flex items-center gap-x-2 ">
        {children}
      </button>
    </div>
  );
};

export default Button;
