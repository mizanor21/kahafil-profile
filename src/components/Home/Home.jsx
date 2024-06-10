import About from "../Others/About/About";
import Blogs from "../Others/Blogs/Blogs";
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
      <Blogs></Blogs>
    </div>
  );
};

export default Home;
