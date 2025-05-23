import { useTheme } from "../context/ThemeContext";
import styles from "../styles/Others.module.scss";

interface SectionProps {
    id: string;
    title: string;
    children: React.ReactNode;
  }
  
  const Section: React.FC<SectionProps> = ({ id, title, children }) => {
    const { isDarkMode } = useTheme();
    return (
      <div         id={id}      className={` rounded-xl flex justify-center    md:min-h-full hover:-translate-y-2 transition-transform md:min-w-full max-w-screen`}>
      <div
        className={`flex justify-center mt-40 mb-40 mr-10 p-8 rounded-xl ${ !isDarkMode ? 'bg-[#f9f9f9a9]' : 'bg-[#ffffff23]'} min-h-full items-center  min-w-full max-w-screen `}
      >
        <div className={`text-lg ${ !isDarkMode ? 'text-black' : 'text-white'}`}>
        <h2 className={`${styles.title} ${!isDarkMode ? 'text-blue-500' : 'text-white'} align-middle text-center md:mb-20`}>{title}</h2>
        {children}
        </div>
      </div>
      </div>
    );
  };
  
  export default Section;