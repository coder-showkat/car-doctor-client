import About from "../components/About";
import Banner from "../components/Banner";
import Service from "../components/Service";

const Home = () => {
  return (
    <div className="container mx-auto px-4">
      <Banner />
      <About />
      <Service />
    </div>
  );
};

export default Home;
