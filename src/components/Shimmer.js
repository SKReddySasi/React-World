const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {[...Array(8)].map((eachItem, index) => (
        <div key={index} className="shimmer"></div>
      ))}
    </div>
  );
};

export default Shimmer;
