import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center  px-4">
      <div className="text-center max-w-md space-y-6">
        {/* Big 404 */}
        <h1 className="text-7xl font-bold text-light-100 tracking-tight">
          404
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-light-200">Page not found</p>

        {/* Description */}
        <p className="text-sm text-gray-100 leading-relaxed">
          The page you’re looking for doesn’t exist or may have been moved.
        </p>

        {/* Action */}
        <Link
          to="/"
          className="
            inline-block mt-4
            rounded-lg px-6 py-3
            bg-accent-200 text-primary
            font-medium
            transition-colors
            hover:bg-accent-100
          "
        >
          Go back home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
