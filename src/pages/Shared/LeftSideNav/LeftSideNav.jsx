import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  // Get the data from public folder using useEffect
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <h2 className="text-2xl">All Categories</h2>
      {categories.map((category) => (
        <Link
          className="ml-4 block text-xl font-semibold"
          key={category.id}
          to={`/category/${category.name}`}
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
};

export default LeftSideNav;
