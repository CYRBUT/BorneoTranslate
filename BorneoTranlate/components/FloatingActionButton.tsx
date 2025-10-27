
import React, { useState } from 'react';
import { IconPlus, IconStar, IconInfo, IconDonate } from './Icon';

interface ActionButtonProps {
    icon: React.ReactNode;
    label: string;
    onClick: () => void;
    className?: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ icon, label, onClick, className = '' }) => (
    <div className="flex items-center justify-end group">
        <span className="mr-4 px-3 py-1 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md shadow-sm text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {label}
        </span>
        <button onClick={onClick} className={`w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all transform hover:scale-110 ${className}`}>
            {icon}
        </button>
    </div>
);

interface FloatingActionButtonProps {
    onDonateClick: () => void;
    onAboutClick: () => void;
    onReviewClick: () => void;
}


const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({ onDonateClick, onAboutClick, onReviewClick }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleDonate = () => {
        onDonateClick();
        setIsOpen(false);
    };

    const handleAbout = () => {
        onAboutClick();
        setIsOpen(false);
    };
    
    const handleReview = () => {
        onReviewClick();
        setIsOpen(false);
    };

    return (
        <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
            <div className="relative flex flex-col items-end gap-y-4">
                {/* Sub-buttons container */}
                <div
                    className={`flex flex-col items-end gap-y-4 transition-all duration-300 ease-in-out ${
                        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                    }`}
                >
                    <ActionButton
                        label="Donasi"
                        icon={<IconDonate className="w-6 h-6 text-white" />}
                        onClick={handleDonate}
                        className="bg-green-500 hover:bg-green-600"
                    />
                    <ActionButton
                        label="About"
                        icon={<IconInfo className="w-6 h-6 text-white" />}
                        onClick={handleAbout}
                        className="bg-blue-500 hover:bg-blue-600"
                    />
                    <ActionButton
                        label="Ulasan"
                        icon={<IconStar className="w-6 h-6 text-white" />}
                        onClick={handleReview}
                        className="bg-yellow-500 hover:bg-yellow-600"
                    />
                </div>
                
                {/* Main FAB button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary text-white shadow-2xl flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-110 focus:outline-none focus:ring-4 focus:ring-primary/50"
                    aria-expanded={isOpen}
                    aria-label={isOpen ? "Tutup menu" : "Buka menu"}
                >
                    <IconPlus className={`w-8 h-8 transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`} />
                </button>
            </div>
        </div>
    );
};


export default FloatingActionButton;
