import { FaCartPlus } from 'react-icons/fa';
import { CgDetailsMore } from 'react-icons/cg';
import { BiSolidMessageError } from 'react-icons/bi';
import { AiOutlineProduct } from 'react-icons/ai';
import type { Dispatch, SetStateAction } from 'react';
import type { IFilter, IProductsResponse } from '../../types/Products';
const messageStyle = 'row-center justify-center font-bold uppercase';

interface Props {
  data: IProductsResponse | undefined;
  setFilters: Dispatch<SetStateAction<IFilter>>;
  isLoading: boolean;
  isError: boolean;
}

const Products: React.FC<Props> = ({
  data,
  isLoading,
  isError,
  setFilters,
}) => {
  if (isLoading) return <p>Loading...</p>;
  if (isError)
    return (
      <p className={`text-red-500 ${messageStyle}`}>
        Error receiving products{' '}
        <BiSolidMessageError size={20} className="ml-2" />
      </p>
    );

  const products = data?.items.length ? data?.items : [];
  if (!products.length)
    return (
      <p className={`${messageStyle}`}>
        No products found <AiOutlineProduct size={24} className="ml-2" />
      </p>
    );

  return (
    <section>
      <div className="mb-6">
        {data?.total !== 0 && <h5>Total goods: {data?.total}</h5>}
      </div>
      <div className="grid gap-10 grid-cols-[repeat(auto-fit,minmax(224px,224px))]">
        {products?.map(({ _id, title, images, price, brand }) => (
          <div
            key={_id}
            className="w-56 border border-gray-300 rounded-2xl space-y-3 mb-10 flex flex-col pb-1 shadow-[3px_3px_5px_0px_rgba(0,0,0,0.36)]"
          >
            <div className="p-1 bg-gray-200  rounded-2xl ">
              <img
                src={images[0]}
                alt={`image ${title}`}
                className="rounded-2xl"
                width={214}
                height={214}
              />
            </div>

            <div className="space-y-2 px-1 flex-1">
              <h3 className="font-semibold leading-5 line-clamp-2">{title}</h3>
              <div className="flex justify-between text-sm">
                <p>
                  <span className="font-semibold">Brand:</span>{' '}
                  <button
                    className="text-blue-700"
                    onClick={() =>
                      setFilters((prev: IFilter) => ({
                        ...prev,
                        brand: brand,
                        skip: 0,
                      }))
                    }
                  >
                    {brand}
                  </button>
                </p>
                <span className="text-green-600 font-semibold">{price}$</span>
              </div>
            </div>

            <div className="text-white grid grid-cols-2 items-start p-1 space-x-1 text-sm font-semibold">
              <button className="py-1 px-2 bg-linear-to-r from-green-500 to-emerald-700 rounded-2xl shadow-sm shadow-green-700 row-center uppercase hover:bg-linear-to-l">
                <FaCartPlus className="mr-2" /> To cart
              </button>
              <button className="py-1 px-2 bg-pink-800 rounded-2xl row-center uppercase  shadow-sm shadow-pink-500 hover:bg-pink-700">
                <CgDetailsMore className="mr-2" />
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
