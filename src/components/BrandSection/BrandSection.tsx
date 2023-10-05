import ImageBrandInformationCard from "./ImageBrandInformationCard";
import PlainBrandInformationCard from "./PlainBrandInformationCard";
import BrandItem from "./BrandItem";

function BrandSection() {
  return (
    <div className="md:grid grid-cols-2 auto-rows-[400px] lg:auto-rows-[600px]">
      <BrandItem
        size="sm"
        bgImageStyle="bg-userYellowEggBgMobile md:bg-userYellowEggBgDesktop"
      />
      <BrandItem 
        size="md" 
        order="-1"
        bgImageStyle="bg-userLightCardBgColor"
      >
        <PlainBrandInformationCard
          heading="Transform your brand"
          text="
            We are a full-service creative agency specializing in helping brands grow fast. 
            Engage your clients through compelling visuals that do most of the marketing for you."
        />
      </BrandItem>
      <BrandItem
        size="sm"
        bgImageStyle="bg-userRedGlassBgMobile md:bg-userRedGlassBgDesktop"
      />
      <BrandItem size="md" bgImageStyle="bg-userLightCardBgColor">
        <PlainBrandInformationCard
          buttonColor="red"
          heading="Stand out to the right audience"
          animationLeft
          text="
            Using a collaborative formula of designers, researchers, photographers, videographers, 
            and copywriters, we’ll build and extend your brand in digital places."
        />
      </BrandItem>
      <BrandItem
        size="lg"
        bgImageStyle="bg-userGraphicDesignBgMobile md:bg-userGraphicDesignBgDesktop"
      >
        <ImageBrandInformationCard
          textColor="graphic"
          heading="Graphic Design"
          text="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."
        />
      </BrandItem>
      <BrandItem
        size="lg"
        bgImageStyle="bg-userPhotographyBgMobile md:bg-userPhotographyBgDesktop"
      >
        <ImageBrandInformationCard
          textColor="photography"
          heading="Photography"
          text="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
        />
      </BrandItem>
    </div>
  );
}

export default BrandSection;
