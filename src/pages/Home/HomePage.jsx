import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNavbar from "../Shared/RightSideNavbar/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";

const HomePage = () => {
  // Load news data
  const news = useLoaderData();
  // console.log(news);
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        <div className="h-screen overflow-y-auto">
          <LeftSideNav></LeftSideNav>
        </div>
        {/* News container starts here */}
        <div className=" h-screen overflow-y-auto md:col-span-2">
          {news.map((aNews) => (
            <NewsCard key={aNews._id} news={aNews}></NewsCard>
          ))}
        </div>
        {/* News container ends here */}
        <div className="h-screen overflow-y-auto">
          <RightSideNavbar></RightSideNavbar>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
