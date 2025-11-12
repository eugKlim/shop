import { FaFacebook, FaTelegram } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';

const shareUrl = encodeURIComponent(window.location.href);
const shareText = encodeURIComponent('Device shop!');

export const socialDb = [
  {
    name: 'Facebook',
    icon: FaFacebook,
    url: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
    icoStyle: '#1877F2',
  },
  {
    name: 'Twitter',
    icon: AiFillTwitterCircle,
    url: `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`,
    icoStyle: '#1DA1F2',
  },
  {
    name: 'Telegram',
    icon: FaTelegram,
    url: `https://t.me/share/url?url=${shareUrl}&text=${shareText}`,
    icoStyle: '#0088CC',
  },
  {
    name: 'WhatsApp',
    icon: BsWhatsapp,
    url: `https://api.whatsapp.com/send?text=${shareText}%20${shareUrl}`,
    icoStyle: '#25D366',
  },
];
