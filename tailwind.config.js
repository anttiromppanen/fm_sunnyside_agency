/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        base: "1.125rem",
      },
      fontFamily: {
        sans: ["Barlow", "sans-serif"],
        userHeading: ["Fraunces", "serif"],
      },
      colors: {
        userRed: "hsl(7, 99%, 70%)",
        userYellow: "hsl(51, 100%, 49%)",
        userGraphicDesignText: "hsl(167, 40%, 24%)",
        userPhotographyText: "hsl(198, 62%, 26%)",
        userFooterBgColor: "hsl(167, 44%, 70%)",
        userFooterTextColor: "hsl(166, 44%, 32%)",
        userDarkHeadingColor: "hsl(212, 27%, 19%)",
        userLightCardBgColor: "hsl(26, 100%, 99%)",
        userGrayHeadingColor: "hsl(210, 4%, 67%)",
        userTextColor: "hsl(251, 4%, 50%)",
        userWhite50Alpha: "hsla(0, 0%, 100%, 0.3)",
      },
      backgroundImage: {
        userHeaderBgMobile: "url('/mobile/image-header.jpg')",
        userHeaderBgDesktop: "url('/desktop/image-header.jpg')",

        userYellowEggBgMobile: "url('/mobile/image-transform.jpg')",
        userYellowEggBgDesktop: "url('/desktop/image-transform.jpg')",

        userRedGlassBgMobile: "url('/mobile/image-stand-out.jpg')",
        userRedGlassBgDesktop: "url('/desktop/image-stand-out.jpg')",

        userGraphicDesignBgMobile: "url('mobile/image-graphic-design.jpg')",
        userGraphicDesignBgDesktop: "url('desktop/image-graphic-design.jpg')",

        userPhotographyBgMobile: "url('mobile/image-photography.jpg')",
        userPhotographyBgDesktop: "url('desktop/image-photography.jpg')",

        userMilkBottlesBgMobile: "url('mobile/image-gallery-milkbottles.jpg')",
        userMilkBottlesBgDesktop: "url('desktop/image-gallery-milkbottles.jpg')",

        userOrangeBgMobile: "url('mobile/image-gallery-orange.jpg')",
        userOrangeBgDesktop: "url('desktop/image-gallery-orange.jpg')",

        userIceCreamBgMobile: "url('mobile/image-gallery-cone.jpg')",
        userIceCreamBgDesktop: "url('desktop/image-gallery-cone.jpg')",

        userSugarCubesBgMobile: "url('mobile/image-gallery-sugar-cubes.jpg')",
        userSugarCubesBgDesktop: "url('desktop/image-gallery-sugar-cubes.jpg')",
      }
    },
  },
  plugins: [],
}