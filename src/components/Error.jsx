/* eslint-disable react/prop-types */
const Error = ({ children }) => {
  return (
    <div className="text-center my-4 bg-red-600 text-white font-bold uppercase">
      {children}
    </div>
  );
};

export default Error;
