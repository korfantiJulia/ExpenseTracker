import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <section className="flex flex-col items-center gap-4 py-16 text-center">
      <div className="text-6xl font-black text-slate-300 dark:text-slate-700">
        404
      </div>
      <h1 className="text-2xl font-bold">Page not found</h1>
      <p className="text-slate-500 dark:text-slate-400">
        The page you are looking for doesn&apos;t exist.
      </p>
      <Link
        to="/"
        className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
      >
        Back home
      </Link>
    </section>
  );
}
