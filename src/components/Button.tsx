type ButtonProps = {
  text: string;
  small?: boolean;
  onClick: () => void;
};

const Button = ({ onClick, small, text }: ButtonProps) => {
  return (
    <button
      className={`rounded-lg bg-spec-green
        text-white hover:bg-green-600 hover:shadow-md ${
          small ? 'px-[10px] py-1 text-xs' : 'px-4 py-2'
        }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
