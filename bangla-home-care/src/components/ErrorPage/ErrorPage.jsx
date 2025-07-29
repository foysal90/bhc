// components/ErrorPage.jsx
import React from "react";
import { useRouteError, Link } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="p-6 max-w-xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-4">Oops!</h1>
      <p className="mb-4">Sorry, an unexpected error has occurred.</p>
      <p className="mb-8 text-red-600">
        {error.statusText || error.message || "Page not found."}
      </p>
      <Link to="/" className="text-blue-600 hover:underline">
        Go back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
