import { Link } from "react-router-dom";
import PropTypes from "prop-types"; // ES6

const NewsCard = ({ news }) => {
  const { title, image_url, details, _id } = news;

  return (
    <div className="card  mb-16 bg-base-100 shadow-xl">
      <figure>
        <img src={image_url} alt="Image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {details.length > 200 ? (
          <p>
            {details.slice(0, 200)}{" "}
            <Link to={`/news/${_id}`} className="font-bold text-blue-600">
              Read More...
            </Link>
          </p>
        ) : (
          <p>{details}</p>
        )}
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  news: PropTypes.object,
};

export default NewsCard;
