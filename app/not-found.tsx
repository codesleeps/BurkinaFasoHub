import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-burkina-red">404</h1>
        <h2 className="mt-4 text-2xl font-semibold">Page not found</h2>
        <p className="mt-2 text-gray-600">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <div className="mt-6">
          <Link
            href="/"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-burkina-red hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-burkina-red"
          >
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
}
