import Footer from "../components/Footer";
import HomePageComponent from '@/src/components/Home/HomePageComponent'

const Home = () => {
  return (
    <article className="mt-6 flex gap-5 flex-col text-white px-5 sm:px-10 md:px-24 sxl:px-32">
      <HomePageComponent />
      <Footer />
    </article>
  );
};

export default Home;