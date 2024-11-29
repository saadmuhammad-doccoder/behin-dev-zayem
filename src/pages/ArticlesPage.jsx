import Navbar from "../components/Navbar";
import MainHeading from "../components/MainHeading";
import BlogLink from "../components/BlogLink";

function ArticlesPage() {
  return (
    <>
      <Navbar />
      <div className="flex justify-start align-middle w-full h-[100dvh] font-sans bg-black flex-col">
        <div className="flex justify-center align-middle w-auto h-7">
          <MainHeading />
        </div>
        <div className="flex justify-center items-center max-w-[25rem] h-[20rem] border-slate-100 mt-4 bg-slate-300 mx-1 border-solid rounded">
          <BlogLink></BlogLink>
        </div>
      </div>
    </>
  );
}

export default ArticlesPage;
