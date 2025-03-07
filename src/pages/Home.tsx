import Doctors from "@/components/Doctors";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Reviews from "@/components/Reviews";
import Villain from "@/components/Villain";

const Home = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[1440px] px-8">
        <Navbar />
        <Hero/>
        <Villain/>
        <Reviews/>
        <Doctors/>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
