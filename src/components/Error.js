import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  const { status, statusText, error } = err;
  console.log(err);
  return (
    <div className="text-center md:text-4xl sm:text-xl p-10 text-[red]">
      <h1>Oops</h1>
      <h2>Something went wrong!!!</h2>
      <h2>{status + " : " + statusText}</h2>
    </div>
  );
};

export default Error;
