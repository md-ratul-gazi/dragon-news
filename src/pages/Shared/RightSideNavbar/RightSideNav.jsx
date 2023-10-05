import q_zone_1 from "../../../assets/qZone1.png";
import q_zone_2 from "../../../assets/qZone2.png";
import q_zone_3 from "../../../assets/qZone3.png";
import {
  FaGoogle,
  FaGithub,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const RightSideNavbar = () => {
  return (
    <div>
      <div className="mb-6 space-y-3 p-4">
        <h2 className="text-xl">Login With</h2>
        <button className="btn btn-outline w-full">
          <FaGoogle />
          Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub />
          Github
        </button>
      </div>

      <div className="mb-6 space-y-3 p-4">
        <h2 className="text-xl">Login With</h2>
        <div className="flex flex-col gap-5 rounded-lg  border">
          <a className="flex items-center gap-2 p-4" href="#">
            <FaFacebookF /> Facebook
          </a>
          <a className="flex items-center gap-2 border-y p-4" href="#">
            <FaTwitter /> Twitter
          </a>
          <a className="flex items-center gap-2 p-4" href="#">
            <FaInstagram /> Instagram
          </a>
        </div>
      </div>

      {/* Q-Zone */}
      <div className="p-4">
        <h2 className="mb-5 text-xl font-semibold text-[#FFF]">Q-Zone</h2>
        <div className="mb-5">
          <img src={q_zone_1} alt="Q-Zone Image" />
        </div>
        <div className="mb-5">
          <img src={q_zone_2} alt="Q-Zone Image" />
        </div>
        <div className="mb-5">
          <img src={q_zone_3} alt="Q-Zone Image" />
        </div>
      </div>
    </div>
  );
};

export default RightSideNavbar;
