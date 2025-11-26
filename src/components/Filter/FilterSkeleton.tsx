const FilterSkeleton = () => {
  return (
    <section className="w-full laptop:w-[230px] laptop:max-w-[230px] laptop:min-w-[230px] laptop:flex-shrink-0 laptop:flex-none filter-section p-4 pt-4 laptop:pt-10 bg-gray-200 rounded-3xl shadow-[0px_0px_8px_0px_rgba(0,0,0,0.35)] dark:bg-gray-800 dark:text-white animate-pulse">
      {/* Search */}
      <div className="mb-4">
        <div className="h-4 w-16 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>
        <div className="h-10 w-full bg-gray-300 dark:bg-gray-700 rounded"></div>
      </div>

      {/* Price */}
      <div className="mb-4">
        <div className="h-4 w-20 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>
        <div className="space-y-2">
          <div className="h-8 w-full bg-gray-300 dark:bg-gray-700 rounded"></div>
          <div className="h-8 w-full bg-gray-300 dark:bg-gray-700 rounded"></div>
        </div>
      </div>

      <div className="h-px bg-gray-400 dark:bg-gray-600 mb-4"></div>

      {/* Clear filter */}
      <div className="mb-4">
        <div className="h-8 w-24 bg-gray-300 dark:bg-gray-700 rounded"></div>
      </div>

      <div className="h-px bg-gray-400 dark:bg-gray-600 mb-4"></div>

      {/* Brands */}
      <div className="mb-4">
        <div className="h-4 w-16 bg-gray-300 dark:bg-gray-700 rounded mb-3"></div>
        <div className="space-y-2">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="h-6 w-full bg-gray-300 dark:bg-gray-700 rounded"
            ></div>
          ))}
        </div>
      </div>

      <div className="h-px bg-gray-400 dark:bg-gray-600 mb-4"></div>

      {/* Device types */}
      <div>
        <div className="h-4 w-20 bg-gray-300 dark:bg-gray-700 rounded mb-3"></div>
        <div className="space-y-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-6 w-full bg-gray-300 dark:bg-gray-700 rounded"
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FilterSkeleton;
