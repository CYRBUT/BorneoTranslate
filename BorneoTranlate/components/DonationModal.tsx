import React, { useState } from 'react';
import { IconClose, IconQris, IconDana, IconLink, IconCopy } from './Icon';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DonationModal: React.FC<DonationModalProps> = ({ isOpen, onClose }) => {
  const [danaCopied, setDanaCopied] = useState(false);
  const DANA_NUMBER = '085651479650';

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(DANA_NUMBER);
    setDanaCopied(true);
    setTimeout(() => setDanaCopied(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          aria-label="Close"
        >
          <IconClose className="h-6 w-6 text-gray-700 dark:text-gray-200" />
        </button>
        <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Dukung Kami
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
                Dukungan Anda sangat berarti untuk pengembangan aplikasi ini.
            </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* QRIS Card */}
          <div className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <IconQris className="h-10 w-10 text-primary mb-3" />
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">QRIS</h3>
            <img 
              src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=DonasiUntukBorneoTranslate" 
              alt="QRIS Code" 
              className="w-36 h-36 rounded-lg bg-white p-1"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">Scan untuk donasi</p>
          </div>

          {/* DANA Card */}
          <div className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <IconDana className="h-10 w-10 text-blue-500 mb-3" />
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">DANA</h3>
            <a
              href={`https://link.dana.id/send?phone=62${DANA_NUMBER.substring(1)}`}
              target="_blank"
              rel="noopener noreferrer"
              title="Klik untuk donasi via DANA"
              className="text-lg font-mono text-blue-500 dark:text-blue-400 hover:underline mb-4"
            >
              {DANA_NUMBER}
            </a>
            <button 
              onClick={handleCopy}
              className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors text-sm"
            >
              <IconCopy className="h-4 w-4" />
              <span>{danaCopied ? 'Tersalin!' : 'Salin No.'}</span>
            </button>
          </div>

          {/* Sociabuzz Card */}
          <div className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <IconLink className="h-10 w-10 text-red-500 mb-3" />
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">Sociabuzz</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 text-center">Dukung melalui Sociabuzz Tribe.</p>
            <a 
              href="https://sociabuzz.com/ndra0216/tribe" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full text-center px-4 py-2 bg-primary-light hover:bg-primary text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Kunjungi
            </a>
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

export default DonationModal;
