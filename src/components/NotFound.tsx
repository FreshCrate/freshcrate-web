import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen not-found-page">
      <h1 className="mb-4 text-6xl font-bold">404</h1>
      <p className="mb-8 text-2xl">Page Not Found</p>
      <Link to="/" className="text-green-600 hover:underline">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;