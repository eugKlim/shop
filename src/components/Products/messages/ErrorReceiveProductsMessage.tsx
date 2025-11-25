import { BiSolidMessageError } from 'react-icons/bi';

const ErrorReceiveProductsMessage = () => {
  return (
    <p className="text-red-500 row-center justify-center font-bold uppercase">
      Error receiving products{' '}
      <BiSolidMessageError size={20} className="ml-2" />
    </p>
  );
};

export default ErrorReceiveProductsMessage;
