import BrandSection from "./components/BrandSection/BrandSection";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ImagesGrid from "./components/ImagesGrid/ImagesGrid";
import TestimonialsSection from "./components/Testimonials/TestimonialsSection";

function App() {
  return (
    <div className="mx-auto w-full max-w-[2000px]">
      <Header />
      <BrandSection />
      <TestimonialsSection />
      <ImagesGrid />
      <Footer />
    </div>
  );
}

export default App;
