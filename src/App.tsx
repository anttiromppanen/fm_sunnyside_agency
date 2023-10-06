import BrandSection from "./components/BrandSection/BrandSection";
import Header from "./components/Header/Header";
import TestimonialsSection from "./components/Testimonials/TestimonialsSection";

function App() {
  return (
    <div className="mx-auto w-full max-w-[2000px]">
      <Header />
      <BrandSection />
      <TestimonialsSection />
    </div>
  );
}

export default App;
