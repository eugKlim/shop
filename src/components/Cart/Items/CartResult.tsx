const CartResult = ({ total }: { total: number }) => {
  return (
    <div className="mt-8 p-6 bg-gray-100 rounded-lg dark:bg-gray-900">
      <div className="flex justify-between items-center text-2xl font-bold">
        <span>Total:</span>
        <span>{total.toFixed(2)} $</span>
      </div>
      <button className="w-full mt-4 px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-600 transition text-lg font-semibold">
        Place an order
      </button>
    </div>
  );
};

export default CartResult;
