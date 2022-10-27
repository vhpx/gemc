const Button = ({ label, onClick }) => {
  return (
    <button
      className="px-4 py-2 w-fit text-black font-semibold bg-gradient-to-r from-blue-400 to-white rounded-lg"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
