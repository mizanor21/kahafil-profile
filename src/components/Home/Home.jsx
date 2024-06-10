import About from "../Others/About/About";
import Events from "../Others/Events/Events";
// import Explore from "../Others/Explore/Explore";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Events></Events>
      {/* <Explore></Explore> */}
      <About></About>
    </div>
  );
};

export default Home;
