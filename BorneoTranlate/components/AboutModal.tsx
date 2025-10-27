import React from 'react';
import { 
    IconClose, IconInstagram, IconTikTok, IconTelegram, IconReact, 
    IconNextJS, IconTypeScript, IconTailwindCSS, IconVueJS, IconSvelte, 
    IconNodeJS, IconPython, IconGoLang, IconFirebase, IconPostgreSQL, 
    IconGemini, IconDocker, IconGit, IconJavaScript 
} from './Icon';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface IconProps {
  className?: string;
}

interface SkillPillProps {
    children: React.ReactNode;
    icon: React.ComponentType<IconProps>;
}

const SkillPill: React.FC<SkillPillProps> = ({ children, icon: IconComponent }) => (
    <span className="flex items-center bg-primary/10 dark:bg-primary/20 text-primary-dark dark:text-primary-light text-sm font-medium px-3 py-1.5 rounded-full transition-transform hover:scale-105">
        <IconComponent className="w-5 h-5 mr-2" />
        <span>{children}</span>
    </span>
);

const skills = {
    "Frontend": [
        { name: "React", icon: IconReact },
        { name: "Next.js", icon: IconNextJS },
        { name: "TypeScript", icon: IconTypeScript },
        { name: "JavaScript", icon: IconJavaScript },
        { name: "Tailwind CSS", icon: IconTailwindCSS },
        { name: "Vue.js", icon: IconVueJS },
        { name: "Svelte", icon: IconSvelte },
    ],
    "Backend & Database": [
        { name: "Node.js", icon: IconNodeJS },
        { name: "Python", icon: IconPython },
        { name: "Go", icon: IconGoLang },
        { name: "Firebase", icon: IconFirebase },
        { name: "PostgreSQL", icon: IconPostgreSQL },
    ],
    "APIs & Tools": [
        { name: "Gemini API", icon: IconGemini },
        { name: "Docker", icon: IconDocker },
        { name: "Git", icon: IconGit },
    ]
};

const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const socialLinks = [
    { name: 'Instagram', icon: IconInstagram, user: 'Ndra0216', url: 'https://instagram.com/Ndra0216' },
    { name: 'TikTok', icon: IconTikTok, user: 'Ndra0216', url: 'https://tiktok.com/@Ndra0216' },
    { name: 'Telegram', icon: IconTelegram, user: 'Ndra0216', url: 'https://t.me/Ndra0216' },
  ];

  return (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          aria-label="Close"
        >
          <IconClose className="h-6 w-6 text-gray-700 dark:text-gray-200" />
        </button>
        
        <div className="flex flex-col items-center text-center">
            <img 
                src="https://picsum.photos/seed/ndra/200" 
                alt="Profile"
                className="w-28 h-28 rounded-full object-cover border-4 border-primary-light dark:border-primary-dark shadow-lg"
            />
            <h2 className="mt-4 text-3xl font-bold text-gray-900 dark:text-gray-100">
                Ndra0216
            </h2>
            <p className="mt-1 text-md text-gray-500 dark:text-gray-400">
                Aplikasi oleh Anak Borneo
            </p>
        </div>

        <div className="mt-8 text-left space-y-8">
            <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 border-b-2 border-primary/50 pb-2 mb-4">
                    Tentang
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                    Pengembang aplikasi Borneo Translate. Bersemangat dalam melestarikan bahasa daerah melalui teknologi. Terima kasih telah menggunakan aplikasi ini!
                </p>
            </div>
            
            <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 border-b-2 border-primary/50 pb-2 mb-4">
                    Keahlian Teknologi
                </h3>
                <div className="space-y-4">
                    {Object.entries(skills).map(([category, items]) => (
                        <div key={category}>
                            <h4 className="text-md font-semibold text-gray-600 dark:text-gray-400 mb-3">{category}</h4>
                            <div className="flex flex-wrap gap-2">
                                {items.map(skill => (
                                    <SkillPill key={skill.name} icon={skill.icon}>{skill.name}</SkillPill>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 border-b-2 border-primary/50 pb-2 mb-4">
                    Ikuti Saya
                </h3>
                <div className="flex justify-center items-center gap-4 sm:gap-6">
                    {socialLinks.map((social) => (
                        <a 
                            key={social.name}
                            href={social.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label={`Kunjungi ${social.name}`}
                            className="group flex flex-col items-center text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-secondary transition-colors duration-300"
                        >
                            <social.icon className="w-10 h-10" />
                            <span className="mt-1 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                                {social.user}
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
      </div>
       <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }

        @keyframes slide-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up { animation: slide-up 0.4s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default AboutModal;
