import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex">
      <button className="h-14 w-44 bg-[#164676] px-2 font-semibold text-green-300 lg:rounded-l-lg">
        Breaking News!
      </button>
      <Marquee
        className="lg:rounded-r "
        gradient={true}
        pauseOnHover={true}
        gradientColor="rgb(27, 119, 106)"
        speed={130}
      >
        <div className="flex gap-14">
          <div>
            <Link className="ml-14 font-semibold text-red-400" to="/">
              Match Highlights: Germany vs Spain — as it happened ! Match
              Highlights: Germany vs Spain as...
            </Link>
          </div>
          <div>
            <Link className="font-semibold text-purple-600" to="/">
              Match Highlights: Germany vs Spain — as it happened ! Match
              Highlights: Germany vs Spain as...
            </Link>
          </div>
          <div>
            <Link className="font-semibold text-sky-500" to="/">
              Match Highlights: Germany vs Spain — as it happened ! Match
              Highlights: Germany vs Spain as...
            </Link>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
