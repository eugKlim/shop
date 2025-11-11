import { socialDb } from './SocialLink';

const Footer = () => {
  return (
    <footer className="bg-blue-950 py-4 text-white">
      <div className="container center justify-around space-x-2">
        <div>
          <h3 className="title-line font-bold text-4xl text-center mb-9">
            SHARE
          </h3>
          <div className="center space-x-3">
            {socialDb.map(({ name, url, icoStyle, icon: Icon }) => (
              <a
                href={url}
                key={name}
                target="_blank"
                className=" px-2 py-1 rounded-lg inline-block min-w-25 text-center bg-gray-800 border-2 hover:border-black"
              >
                <Icon size={30} className="mx-auto" color={icoStyle} />
                <h3>{name}</h3>
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="max-w-[400px] h-60 bg-white">map</div>
          <address className="mt-4">
            <span className="text-gray-400 not-italic font-bold">Adress:</span>{' '}
            1234 Market Street, San Francisco, CA 94103, USA
          </address>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
