import React from "react";

const loading = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-white">
        <div className="loader">
          <span className="loader-text">loading</span>
          <span className="load"></span>
        </div>
      </div>
    </>
  );
};

export default loading;
