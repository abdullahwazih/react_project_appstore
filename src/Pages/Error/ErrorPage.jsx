import React from 'react';
import { useRouteError, useNavigate } from 'react-router';
import ErroImg from '../../assets/error-404.png';

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate(); 

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center text-gray-800 bg-gray-100">
      <img src={ErroImg} alt="Error 404" className="w-72 mb-6" />

      <h1 className="text-5xl font-bold mb-4">Oops! Page not found</h1>
      <p className="text-lg mb-2">Something went wrong or the page doesn’t exist.</p>

      {error && (
        <p className="text-sm text-gray-500 mt-2">
          {error.statusText || error.message}
        </p>
      )}

      <button
        onClick={() => navigate(-1)}
        className="btn btn-primary mt-6"
      >
        Go Back
      </button>
    </div>
  );
};

export default ErrorPage;
