const colorStyles = {
  yellow: "bg-userYellow",
  white: "bg-white",
};

interface Props {
  text: string;
  color: "yellow" | "white";
}

function StyledButton({ text, color }: Props) {
  const baseStyles =
    "rounded-full px-8 py-4 font-userHeading text-[1rem] text-black";

  return (
    <button type="button" className={`${baseStyles} ${colorStyles[color]}`}>
      {text}
    </button>
  );
}

export default StyledButton;
