import React, { useState, useEffect } from 'react';
import { NewsItem, Comment } from '../types';
import NewsCard from './NewsCard';
import { IconClose, IconArrowLeft, IconUser } from './Icon';

interface NewsModalProps {
  isOpen: boolean;
  onClose: () => void;
  newsItems: NewsItem[];
  comments: Record<number, Comment[]>;
  onAddComment: (comment: Omit<Comment, 'id' | 'date'>) => void;
}

const COMMENTS_PER_PAGE = 3;

const NewsModal: React.FC<NewsModalProps> = ({ isOpen, onClose, newsItems, comments, onAddComment }) => {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [commentViewMode, setCommentViewMode] = useState<'write' | 'list'>('write');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [visibleCommentsCount, setVisibleCommentsCount] = useState(COMMENTS_PER_PAGE);

  
  // Reset state when modal is closed
  useEffect(() => {
    if (!isOpen) {
      setSelectedNews(null);
      setCommentViewMode('write');
      setUsername('');
      setEmail('');
      setMessage('');
      setError('');
      setVisibleCommentsCount(COMMENTS_PER_PAGE);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSelectNews = (item: NewsItem) => {
    setSelectedNews(item);
    setCommentViewMode('write');
    setVisibleCommentsCount(COMMENTS_PER_PAGE);
  };

  const handleBackClick = () => {
    if (commentViewMode === 'list') {
      setCommentViewMode('write');
    } else {
      setSelectedNews(null);
    }
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim() || !email.trim() || !message.trim()) {
        setError('Nama, email, dan pesan tidak boleh kosong.');
        return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
        setError('Format email tidak valid.');
        return;
    }
    if (!selectedNews) return;

    onAddComment({ newsId: selectedNews.id, username, email, message });
    setUsername('');
    setEmail('');
    setMessage('');
    setError('');
    setCommentViewMode('list');
  };
  
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
    });
  };
  
  const currentComments = selectedNews ? comments[selectedNews.id] || [] : [];

  return (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col p-6 relative animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors z-20"
          aria-label="Close"
        >
          <IconClose className="h-6 w-6 text-gray-700 dark:text-gray-200" />
        </button>
        
        {selectedNews ? (
          <>
            {/* Dynamic Header for Comment Section */}
            <div className="flex items-center mb-4 flex-shrink-0">
               <button 
                onClick={handleBackClick}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors mr-3"
                aria-label="Kembali"
               >
                <IconArrowLeft className="h-6 w-6 text-gray-700 dark:text-gray-200" />
              </button>
              <h2 className="text-2xl font-bold text-primary dark:text-secondary truncate">
                {commentViewMode === 'list' ? 'Semua Komentar' : selectedNews.title}
              </h2>
            </div>

            {commentViewMode === 'write' ? (
              // Write Comment View
              <div className="flex flex-col flex-grow overflow-y-auto">
                 <div className="mb-4">
                    <button
                      onClick={() => setCommentViewMode('list')}
                      className="w-full px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-200 bg-gray-200 dark:bg-gray-700/50 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                      >
                      Lihat Semua Komentar ({currentComments.length})
                    </button>
                 </div>
                 <form onSubmit={handleCommentSubmit} className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700 space-y-3">
                    <h3 className="font-bold text-xl">Tinggalkan Komentar Anda</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-primary focus:border-primary" required />
                        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-primary focus:border-primary" required />
                    </div>
                    <textarea placeholder="Pesan Anda..." value={message} onChange={e => setMessage(e.target.value)} rows={4} className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-primary focus:border-primary resize-none" required></textarea>
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <button type="submit" className="w-full px-6 py-3 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg transition-colors text-lg">
                      Kirim Komentar
                    </button>
                 </form>
              </div>
            ) : (
              // List Comments View
              <div className="overflow-y-auto flex-grow pr-2 space-y-4">
                  {currentComments.length > 0 ? (
                      currentComments.slice(0, visibleCommentsCount).map(comment => (
                         <div key={comment.id} className="bg-white dark:bg-gray-900/50 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                           <div className="flex items-start gap-3">
                                <div className="w-10 h-10 mt-1 rounded-full bg-secondary/20 flex-shrink-0 flex items-center justify-center text-secondary">
                                    <IconUser className="w-6 h-6" />
                                </div>
                                <div className="flex-1">
                                    <p className="font-bold text-gray-800 dark:text-gray-100">{comment.username}</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">{formatDate(comment.date)}</p>
                                    <p className="text-gray-600 dark:text-gray-300">{comment.message}</p>
                                </div>
                           </div>
                         </div>
                      ))
                  ) : (
                      <p className="text-center text-gray-500 dark:text-gray-400 py-8">Belum ada komentar. Jadilah yang pertama!</p>
                  )}

                  {currentComments.length > visibleCommentsCount && (
                    <div className="text-center pt-2">
                      <button
                        onClick={() => setVisibleCommentsCount(prev => prev + COMMENTS_PER_PAGE)}
                        className="px-6 py-2 text-sm font-semibold text-primary dark:text-secondary bg-primary/10 dark:bg-secondary/10 rounded-full hover:bg-primary/20 dark:hover:bg-secondary/20 transition-colors"
                      >
                        Lihat lebih banyak komentar
                      </button>
                    </div>
                  )}
              </div>
            )}
          </>
        ) : (
          <>
            {/* News List View */}
            <h2 className="text-3xl font-bold mb-6 text-center text-primary dark:text-secondary">
              Berita Terbaru
            </h2>
            <div className="overflow-y-auto flex-grow pr-2">
                <div className="space-y-6">
                {newsItems.map((item) => (
                    <NewsCard 
                        key={item.id} 
                        {...item}
                        commentCount={comments[item.id]?.length || 0}
                        onCommentClick={() => handleSelectNews(item)}
                    />
                ))}
                </div>
            </div>
          </>
        )}
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

export default NewsModal;