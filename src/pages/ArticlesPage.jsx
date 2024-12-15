import Navbar from "../components/Navbar";
import MainHeading from "../components/MainHeading";
import BlogLink from "../components/BlogLink";

function ArticlesPage() {
  return (
    <>
      <Navbar />
      <div className="flex justify-start align-middle w-full h-[100%] font-sans bg-black flex-col">
        <div className="flex justify-center align-middle w-auto h-7">
          <MainHeading />
        </div>
        <div className="h-[100-dvh] w-full flex flex-col sm:flex-row sm:flex-wrap">
          <BlogLink />
          <BlogLink />
          <BlogLink />
          <BlogLink />
          <BlogLink />
        </div>
      </div>
    </>
  );
}

export default ArticlesPage;
