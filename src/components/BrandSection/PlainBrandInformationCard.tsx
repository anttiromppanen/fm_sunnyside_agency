const buttonStyles = {
  yellow: "bg-userYellow",
  red: "bg-userRed",
};

interface Props {
  heading: string;
  text: string;
  buttonColor?: "yellow" | "red";
}

function PlainBrandInformationCard({
  heading,
  text,
  buttonColor = "yellow",
}: Props) {
  const baseButtonStyles = `
    absolute bottom-0 left-1/2 h-2 w-[110%] -translate-x-1/2 rounded-full opacity-40 
    ${buttonStyles[buttonColor]}`;

  return (
    <section className="z-50 flex min-h-full flex-col items-center justify-center px-6 text-center">
      <h2 className="font-userHeading text-3xl font-black text-userDarkHeadingColor">
        {heading}
      </h2>
      <p className="mt-10 text-userTextColor">{text}</p>
      <button
        type="button"
        className="relative mt-14 font-userHeading font-black tracking-wider text-userDarkHeadingColor"
      >
        <p className="relative z-10">LEARN MORE</p>
        <div className={baseButtonStyles} />
      </button>
    </section>
  );
}

PlainBrandInformationCard.defaultProps = {
  buttonColor: "yellow",
};

export default PlainBrandInformationCard;
