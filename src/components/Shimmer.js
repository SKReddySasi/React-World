const Shimmer = () => {
  return (
    <div
      data-testid="shimmer"
      className="flex flex-wrap items-center w-[1200] m-auto p-4"
    >
      {[...Array(8)].map((eachItem, index) => (
        <div key={index}>
          <div className="h-[150] w-[240] rounded-2xl bg-slate-200 mx-6 my-2"></div>
          <div className="mx-8 mb-4">
            <h2 className="mt-1 bg-slate-200 w-5/12 h-4"></h2>
            <h4 className="bg-slate-200 mt-2 w-full h-4"></h4>
            <div className="flex justify-between items-center color-[#535665] mt-2">
              <h4 className="bg-slate-200 h-4 w-3/12"></h4>
              <h4 className="bg-slate-200 h-4 w-3/12"></h4>
              <h4 className="bg-slate-200 h-4 w-3/12"></h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
