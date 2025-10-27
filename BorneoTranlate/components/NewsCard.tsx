
import React, { useState, useCallback } from 'react';
import { NewsItem } from '../types';
import { IconHeart, IconComment, IconShare } from './Icon';

interface NewsCardProps extends NewsItem {
  commentCount: number;
  onCommentClick: () => void;
}

const NewsCard: React.FC<NewsCardProps> = ({ id, title, content, imageUrl, date, commentCount, onCommentClick }) => {
  const [isLiked, setIsLiked] = useState(false);
  // Initialize with a random number for more realistic UI
  const [likeCount, setLikeCount] = useState(() => Math.floor(Math.random() * 100) + 1);

  const handleLikeClick = useCallback(() => {
    setIsLiked(prev => !prev);
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
  }, [isLiked]);

  const handleShareClick = async () => {
    // Use a fixed, valid base URL to prevent "Invalid URL" errors in sandboxed environments.
    const shareUrl = `https://borneo-translate.app/news/${id}`;

    const shareData = {
      title: title,
      text: content.substring(0, 100) + '...', // Share a snippet of the content
      url: shareUrl,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        // The user canceling the share dialog is expected behavior, not an error.
        // We check if the error is an 'AbortError' and ignore it to keep the console clean.
        if (error instanceof DOMException && error.name === 'AbortError') {
          // User cancelled the share dialog, no action needed.
        } else {
          console.error("Error sharing content:", error);
          alert('Gagal membagikan konten.');
        }
      }
    } else {
      // Fallback for browsers that do not support the Web Share API
      try {
        await navigator.clipboard.writeText(shareData.url);
        alert('Fitur berbagi tidak didukung di browser ini. Link berita telah disalin ke clipboard!');
      } catch (err) {
        console.error('Failed to copy: ', err);
        alert('Gagal menyalin link.');
      }
    }
  };


  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 transition-transform duration-300 hover:scale-[1.02]">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-5">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{date}</p>
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">{content}</p>
      </div>
      <div className="px-5 py-3 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-700 flex items-center justify-end space-x-4">
        <button 
          onClick={handleLikeClick} 
          className={`flex items-center space-x-1.5 transition-colors ${
            isLiked 
              ? 'text-red-500' 
              : 'text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-500'
          }`}
          aria-pressed={isLiked}
        >
          <IconHeart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
          <span className="text-sm font-medium">{likeCount} {isLiked ? 'Batal Suka' : 'Suka'}</span>
        </button>
        <button onClick={onCommentClick} className="flex items-center space-x-1.5 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-500 transition-colors">
          <IconComment className="w-5 h-5" />
          <span className="text-sm font-medium">Komentar ({commentCount})</span>
        </button>
        <button onClick={handleShareClick} className="flex items-center space-x-1.5 text-gray-600 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-500 transition-colors">
          <IconShare className="w-5 h-5" />
          <span className="text-sm font-medium">Bagikan</span>
        </button>
      </div>
    </div>
  );
};

export default NewsCard;
