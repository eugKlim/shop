const ProductSkeleton = () => {
  return (
    <div className="w-56 mx-auto border border-gray-600 rounded-2xl space-y-3 flex flex-col pb-1 shadow-[3px_3px_5px_0px_rgba(0,0,0,0.36)] animate-pulse">
      {/* Imgskeleton */}
      <div className="p-1 bg-gray-200 rounded-2xl">
        <div className="w-[215px] h-56 bg-gray-300 dark:bg-gray-700 rounded-2xl"></div>
      </div>

      {/* Title, price */}
      <div className="px-2 space-y-2">
        <div className="h-4 w-3/4 bg-gray-300 dark:bg-gray-700 rounded"></div>
        <div className="h-4 w-1/2 bg-gray-300 dark:bg-gray-700 rounded"></div>
        <div className="h-5 w-20 bg-gray-300 dark:bg-gray-700 rounded"></div>
      </div>

      {/* Btn  */}
      <div className="px-1 pb-1 grid grid-cols-2 gap-1">
        <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded-2xl"></div>
        <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded-2xl"></div>
      </div>
    </div>
  );
};

const ProductsSkeleton = () => {
  return (
    <section>
      <div className="mb-6 text-right">
        <div className="h-5 w-32 bg-gray-300 dark:bg-gray-700 rounded inline-block animate-pulse"></div>
      </div>

      <div className="grid gap-12 justify-center pb-10 grid-cols-[repeat(auto-fit,minmax(224px,224px))] laptop:gap-6 laptop:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <ProductSkeleton key={i} />
        ))}
      </div>
    </section>
  );
};

export default ProductsSkeleton;
