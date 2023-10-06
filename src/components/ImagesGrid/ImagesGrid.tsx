const itemBgVariantStyles = {
  bottles: "bg-userMilkBottlesBgMobile md:bg-userMilkBottlesBgDesktop",
  orange: "bg-userOrangeBgMobile md:bg-userOrangeBgDesktop",
  iceCream: "bg-userIceCreamBgMobile md:bg-userIceCreamBgDesktop",
  sugar: "bg-userSugarCubesBgMobile md:bg-userSugarCubesBgDesktop",
};

function Item({ bg }: { bg: "bottles" | "orange" | "iceCream" | "sugar" }) {
  return (
    <div className="overflow-hidden">
      <div
        className={`
          h-full w-full bg-cover bg-center bg-no-repeat transition-all duration-500 hover:scale-110 ${itemBgVariantStyles[bg]}`}
      />
    </div>
  );
}

function ImagesGrid() {
  return (
    <section className="grid auto-rows-[200px] grid-cols-2 md:auto-rows-[400px] lg:auto-rows-[500px] lg:grid-cols-4">
      <Item bg="bottles" />
      <Item bg="orange" />
      <Item bg="iceCream" />
      <Item bg="sugar" />
    </section>
  );
}

export default ImagesGrid;
