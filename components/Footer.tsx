import Link from 'next/link';

const Footer: React.FC = () => (
  <footer className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-[var(--text-color)] text-center p-8 mt-12">
    <div className="flex justify-center gap-8 mb-6">
      {['bio', 'publications', 'news', 'experience', 'projects', 'teaching'].map((section) => (
        <Link
          key={section}
          href={`#${section}`}
          className="text-[var(--text-color)] hover:text-[var(--accent-color)] font-medium"
        >
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </Link>
      ))}
    </div>
    <p>© 2025 Debajyoti Mazumder. All rights reserved.</p>
  </footer>
);

export default Footer;