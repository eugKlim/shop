import Slider from '../../components/Slider/Slider';
import { useGetProductQuery } from '../../services/productsApi';
import { useParams } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import Buttons from '../../components/Detail/Items/Buttons.tsx';

const Product = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetProductQuery(String(id));
  const { isInCart, addToCart } = useCart();
  if (isLoading) return <div className="text-center">Loading...</div>;
  if (isError || !data)
    return <div>Added a shopping cart and pages by roles</div>;

  const { title, description, price, images, deviceType, stock, brand } = data;

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

  return (
    <section>
      <div className="container grid gap-10 grid-cols-2 justify-around items-start mobile:grid-cols-1 min-[1000px]:grid-cols-2">
        <div className="bg-gray-800 rounded-2xl mobile:py-5 table:p-10 lg:justify-center laptop:max-w-1/2">
          <Slider images={images} />
        </div>

        <div className="table:px-10 laptop:max-w-1/3">
          <h2 className="font-bold text-2xl mb-4">{title}</h2>
          <div className="space-y-2">
            <p>
              Price: <span className="text-green-700">{price}$</span>
            </p>
            <p>In stock: {stock}</p>
            <p>Device Type: {deviceType}</p>

            <Buttons
              isInCart={isInCart}
              handleAddToCart={handleAddToCart}
              id={String(id)}
              title={title}
              images={images[0]}
              price={price}
              brand={brand}
            />
          </div>
          <hr className="mt-5 text-gray-300 dark:text-gray-600 " />
          <div>
            <h3 className="text-center font-semibold text-xl mt-6 mb-2">
              More about the product
            </h3>
            <p className="text-gray-700 dark:text-white">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
