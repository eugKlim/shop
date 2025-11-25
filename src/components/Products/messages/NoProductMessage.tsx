import { AiOutlineProduct } from 'react-icons/ai';
const NoProductMessage = () => {
  return (
    <p className="row-center justify-center font-bold uppercase">
      No products found <AiOutlineProduct size={24} className="ml-2" />
    </p>
  );
};

export default NoProductMessage;
