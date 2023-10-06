const textColorStyles = {
  graphic: "text-userGraphicDesignText",
  photography: "text-userPhotographyText",
};

interface Props {
  heading: string;
  text: string;
  textColor: "graphic" | "photography";
}

function ImageBrandInformationCard({ heading, text, textColor }: Props) {
  const finalTextStyles = `text-center ${textColorStyles[textColor]}`;

  return (
    <section
      className={`lg:pb-18 mx-auto flex h-full max-w-md flex-col justify-end px-6 pb-14 ${finalTextStyles}`}
    >
      <h2 className="font-userHeading text-3xl font-black">{heading}</h2>
      <p className="mt-8 lg:text-lg">{text}</p>
    </section>
  );
}

export default ImageBrandInformationCard;
