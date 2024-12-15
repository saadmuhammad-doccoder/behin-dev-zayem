function BlogCard() {
  return (
    <>
      <div className="flex justify-center items-center w-[100%] h-[20rem] border-slate-100 mt-10 bg-slate-300 px-3 border-solid rounded"></div>
      <div className="h-[4rem] w-full bg-slate-900 text-white border-solid rounded relative top-[10px] py-1 px-4">
        <h3 className="text-xl">Blog Title</h3>
        <p className="text-sm">Some description of the blog</p>
      </div>
    </>
  );
}

export default BlogCard;
