import { useTheme } from "../context/ThemeContext";

interface EducationItemProps {
    degree: string;
    institution: string;
    status: string;
  }
  
  const EducationItem: React.FC<EducationItemProps> = ({ degree, institution, status }) => {
    const { isDarkMode } = useTheme();
    return (
      <div className="flex gap-4 mb-4">
        <span className={`text-2xl ${ !isDarkMode ? 'text-[var(--secondary-color)]' : 'text-[var(--accent-color)]'}`}>🎓</span>
        <div>
          <h3 className="text-lg font-semibold">{degree}</h3>
          <p className={`${ !isDarkMode ? 'text-gray-600' : 'text-gray-400'}`}>{institution}, India ({status})</p>
        </div>
      </div>
    );
  };
  
  export default EducationItem;