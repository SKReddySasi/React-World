const Shimmer = () => {
  return (
    <div className="flex flex-wrap items-center w-[1200] m-auto p-4">
      {[...Array(8)].map((eachItem, index) => (
        <div
          key={index}
          className="h-[220] w-[250] bg-slate-200 m-4"
        ></div>
      ))}
    </div>
  );
};

export default Shimmer;
