import { Link } from "react-router-dom";
import BlogCard from "./BlogCard";

function BlogLink() {
  return (
    <Link
      className="w-full h-full flex justify-center items-center"
      to={"/blog123"}
    >
      <BlogCard />
    </Link>
  );
}

export default BlogLink;
