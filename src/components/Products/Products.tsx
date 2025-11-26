import type { Dispatch, SetStateAction } from 'react';
import type { IFilter, IProductsResponse } from '../../types/Products';
import { useCart } from '../../hooks/useCart';
import BrandItem from './Items/BrandItem';
import NoProductMessage from './messages/NoProductMessage';
import ErrorReceiveProductsMessage from './messages/ErrorReceiveProductsMessage';
import Buttons from './Items/Buttons';
import ProductsSkeleton from './ProductSkeleton';

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
  const { addToCart, isInCart } = useCart();

  const handleAddToCart = (
    id: string,
    title: string,
    images: string,
    price: number,
    brand: string
  ) => {
    addToCart({
      id: id,
      name: title,
      price: price,
      image: images,
      brand: brand,
    });
  };

  if (isLoading) return <ProductsSkeleton />;
  if (isError) return <ErrorReceiveProductsMessage />;

  const products = data?.items.length ? data?.items : [];
  if (!products.length) return <NoProductMessage />;

  return (
    <section>
      <div className="mb-6 text-right">
        {data?.total !== 0 && <h5>Total goods: {data?.total}</h5>}
      </div>

      <div className="grid gap-12 justify-center pb-10 grid-cols-[repeat(auto-fit,minmax(224px,224px))] laptop:gap-6   laptop:grid-cols-3">
        {products?.map(({ _id, title, images, price, brand }) => (
          <div
            key={_id}
            className="w-56 mx-auto border border-gray-600 rounded-2xl space-y-3 flex flex-col pb-1 shadow-[3px_3px_5px_0px_rgba(0,0,0,0.36)]"
          >
            <div className="p-1 bg-gray-200 rounded-2xl">
              <img
                src={images[0]}
                alt={`image ${title}`}
                className="rounded-2xl w-56 h-56 object-cover"
              />
            </div>

            <BrandItem
              title={title}
              setFilters={setFilters}
              brand={brand}
              price={price}
            />

            <Buttons
              isInCart={isInCart}
              handleAddToCart={handleAddToCart}
              id={_id}
              title={title}
              images={images[0]}
              price={price}
              brand={brand}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
