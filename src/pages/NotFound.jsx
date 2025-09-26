import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="text-center py-20">
      <h2 className="text-4xl font-bold mb-4">404</h2>
      <p className="text-gray-600 mb-6">Page not found</p>
      <Link
        to="/"
        className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
      >
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;
