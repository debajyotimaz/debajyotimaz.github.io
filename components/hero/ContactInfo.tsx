import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { GraduationCap } from 'lucide-react';

interface ContactItemProps {
  icon: React.ReactNode;
  text: string;
  href?: string;
}

function ContactItem({ icon, text, href }: ContactItemProps) {
  const Component = href ? 'a' : 'div';
  return (
    <Component
      href={href}
      className={`flex items-center gap-2 px-4 py-1 ${href ? 'hover:scale-105' : ''}  transition-transform duration-200`}
    >
      <span className="text-blue-600 dark:text-blue-400">{icon}</span>
      <span className="text-white hover:text-blue-600 dark:hover:text-blue-400 ">
        {text}
      </span>
    </Component>
  );
}

export function ContactInfo() {
  return (
    <div className="flex flex-col items-center gap-0">
      <ContactItem
        icon={<GraduationCap className="w-5 h-5" />}
        text="PhD Scholar"
        // href=""
      />
      <ContactItem
        icon={<Mail className="w-5 h-5" />}
        text="debajyoti22@iiserb.ac.in"
        href="mailto:debajyoti22@iiserb.ac.in"
      />
      <ContactItem
        icon={<Mail className="w-5 h-5" />}
        text="debajyotimaz@gmail.com"
        href="mailto:debajyotimaz@gmail.com"
      />
    </div>
  );
}