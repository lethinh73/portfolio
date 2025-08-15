export default function ContentHeader({ title }) {
  return (
    <>
      <header className="relative bg-white shadow-sm dark:bg-gray-800 dark:shadow-none dark:after:pointer-events-none dark:after:absolute dark:after:inset-x-0 dark:after:inset-y-0 dark:after:bottom-0 dark:after:border-y dark:after:border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-lg/6 font-semibold text-gray-900 dark:text-white">{title}</h1>
        </div>
      </header>
    </>
  );
}