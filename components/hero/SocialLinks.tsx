import { Github, Linkedin, Instagram, Mail, GraduationCap } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { useTheme } from '../../context/ThemeContext';


const links = [
  // {
  //   icon: <Github className="w-6 h-6 text-gray-900 dark:text-white" />,
  //   label: 'GitHub',
  //   href: 'https://github.com',
  // },
  // {
  //   icon: <Linkedin className="w-6 h-6 text-[#0077B5]" />,
  //   label: 'LinkedIn',
  //   href: 'https://linkedin.com',
  // },
  // {
  //   icon: <Instagram className="w-6 h-6 text-[#E1306C]" />,
  //   label: 'Instagram',
  //   href: 'https://instagram.com',
  // },
  // {
  //   icon: <FaWhatsapp className="w-6 h-6 text-[#25D366]" />,
  //   label: 'WhatsApp',
  //   href: 'https://whatsapp.com',
  // },
  // {
  //   icon: <FaXTwitter className="w-6 h-6 text-gray-900 dark:text-white" />,
  //   label: 'Twitter',
  //   href: 'https://twitter.com',
  // },
  { href: 'mailto:debajyoti22@iiserb.ac.in', 
  icon: <Mail className='w-6 h-6'/>, 
  label: 'Email' 
  },
      { href: 'https://github.com/debajyotimaz', icon:<Github className="w-6 h-6 " />, label: 'GitHub' },
      { href: 'https://www.linkedin.com/in/debamaz/', icon: <Linkedin className="w-6 h-6 " /> , label: 'LinkedIn' },
      {
        href: 'https://scholar.google.com/citations?user=gGRVwn8AAAAJ&hl=en',
        icon: <i className="fab fa-google-scholar  w-6 h-6"></i>,
        label: 'Google Scholar',
      },
];

export function SocialLinks() {
  const { isDarkMode } = useTheme();
  return (
    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
      {links.map(({ href, icon, label }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={`group relative p-3 ${ !isDarkMode ? 'bg-gray-200' : 'bg-gray-800'} rounded-lg hover:scale-110 transform transition-transform duration-300`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          <div className={`${ !isDarkMode ? 'text-black' : 'text-white'}`} >{icon}</div>
        </a>
      ))}
    </div>
  );
}