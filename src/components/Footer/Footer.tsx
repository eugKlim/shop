import { socialDb } from './SocialLink';

const Footer = () => {
  return (
    <footer className="bg-blue-950 py-4 text-white">
      <div className="container center justify-around flex-wrap space-x-2 space-y-9">
        <div>
          <h3 className="title-line font-bold text-4xl text-center mb-9">
            SHARE
          </h3>
          <div className="center flex-wrap gap-y-2 justify-center space-x-3">
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
          <div className="max-w-[400px] h-60 bg-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d204203.2646002018!2d30.5532968598346!3d36.898098321572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c39aaeddadadc1%3A0x95c69f73f9e32e33!2z0JDQvdGC0LDQu9GM0Y8sINCQ0L3RgtCw0LvQuNGPLCDQotGD0YDRhtC40Y8!5e0!3m2!1sru!2sua!4v1764199280602!5m2!1sru!2sua"
              width="100%"
              height="240px"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
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
