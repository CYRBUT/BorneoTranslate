
import React, { useState, useCallback } from 'react';
import { Language } from '../types';
import { LANGUAGES } from '../constants';
import { translateText } from '../services/geminiService';
import { IconSwap, IconLoader, IconSparkles } from './Icon';

const Translator: React.FC = () => {
  const [sourceLang, setSourceLang] = useState<Language>(Language.Indonesian);
  const [targetLang, setTargetLang] = useState<Language>(Language.Bakumpai);
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSwapLanguages = useCallback(() => {
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
    setInputText(outputText);
    setOutputText(inputText);
  }, [sourceLang, targetLang, inputText, outputText]);

  const handleTranslate = async () => {
    if (!inputText.trim()) return;
    setIsLoading(true);
    setError('');
    setOutputText('');

    const result = await translateText(inputText, sourceLang, targetLang);
    
    if (result.startsWith('Error:')) {
      setError(result);
    } else {
      setOutputText(result);
    }
    setIsLoading(false);
  };

  const handleSourceLangChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSourceLang = e.target.value as Language;
    if (newSourceLang === targetLang) {
      setTargetLang(sourceLang);
    }
    setSourceLang(newSourceLang);
  };

  const handleTargetLangChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newTargetLang = e.target.value as Language;
    if (newTargetLang === sourceLang) {
      setSourceLang(targetLang);
    }
    setTargetLang(newTargetLang);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-start">
        {/* Input Card */}
        <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 flex flex-col">
          <select
            value={sourceLang}
            onChange={handleSourceLangChange}
            className="w-full bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-lg p-2 mb-4 focus:ring-primary focus:border-primary"
          >
            {LANGUAGES.map((lang) => (
              <option key={lang.value} value={lang.value}>{lang.label}</option>
            ))}
          </select>
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Ketik teks di sini..."
            className="w-full h-48 bg-transparent dark:text-gray-200 rounded-lg p-2 focus:outline-none resize-none flex-grow"
          />
        </div>

        {/* Output Card */}
        <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 flex flex-col">
          <div className="flex justify-between items-center mb-4">
             <select
                value={targetLang}
                onChange={handleTargetLangChange}
                className="w-auto bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-lg p-2 focus:ring-primary focus:border-primary"
             >
                {LANGUAGES.map((lang) => (
                  <option key={lang.value} value={lang.value}>{lang.label}</option>
                ))}
             </select>
             <button 
                onClick={handleSwapLanguages}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Tukar bahasa"
              >
                <IconSwap className="h-6 w-6 text-gray-600 dark:text-gray-400" />
              </button>
          </div>

          <div className="w-full h-48 bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3 flex-grow relative overflow-y-auto">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <IconLoader className="h-8 w-8 text-primary animate-spin" />
              </div>
            )}
            {error && <p className="text-red-500">{error}</p>}
            {!isLoading && outputText && (
              <p className="dark:text-gray-200 whitespace-pre-wrap">{outputText}</p>
            )}
             {!isLoading && !outputText && !error && (
              <p className="text-gray-400 dark:text-gray-500">Hasil terjemahan akan muncul di sini.</p>
            )}
          </div>
        </div>
      </div>
      
      {/* Translate Button */}
      <div className="mt-6 flex justify-center">
        <button
            onClick={handleTranslate}
            disabled={isLoading || !inputText.trim()}
            className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
        >
            {isLoading ? (
                <IconLoader className="h-6 w-6 animate-spin" />
            ) : (
                <IconSparkles className="h-6 w-6" />
            )}
            <span className="text-lg">{isLoading ? 'Menerjemahkan...' : 'Terjemahkan'}</span>
        </button>
      </div>
    </div>
  );
};

export default Translator;
