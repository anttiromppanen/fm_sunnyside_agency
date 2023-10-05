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
      className={`flex h-full flex-col justify-end px-4 pb-14 ${finalTextStyles}`}
    >
      <h2 className="font-userHeading text-3xl font-black">{heading}</h2>
      <p className="mt-8">{text}</p>
    </section>
  );
}

export default ImageBrandInformationCard;
