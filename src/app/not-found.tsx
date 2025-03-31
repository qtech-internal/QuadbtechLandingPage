export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold bg-gradient-to-tr from-orange-400 to-orange-900 bg-clip-text text-transparent">
        404 - Page Not Found
      </h1>
      <p className="text-lg text-gray-600 mt-2">
        Oops! The page you're looking for doesn't exist.
      </p>
    </div>
  );
}
