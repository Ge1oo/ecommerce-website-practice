import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

const Home = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[1440px] px-8">
        <Navbar />
        <Hero/>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
