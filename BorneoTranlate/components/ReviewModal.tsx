
import React, { useState, useEffect } from 'react';
import { Review } from '../types';
import { IconClose, IconStar, IconUser } from './Icon';

// StarRating component for reuse within the modal
interface StarRatingProps {
  rating: number;
  onRatingChange?: (rating: number) => void;
  interactive?: boolean;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, onRatingChange, interactive = true }) => {
  const [hoverRating, setHoverRating] = useState(0);

  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          disabled={!interactive}
          onClick={() => onRatingChange && onRatingChange(star)}
          onMouseEnter={() => interactive && setHoverRating(star)}
          onMouseLeave={() => interactive && setHoverRating(0)}
          className={`text-2xl transition-colors duration-200 ${
            interactive ? 'cursor-pointer' : 'cursor-default'
          } ${
            (hoverRating || rating) >= star
              ? 'text-yellow-400'
              : 'text-gray-300 dark:text-gray-600'
          }`}
          aria-label={`Beri ${star} bintang`}
        >
          <IconStar className="w-8 h-8" />
        </button>
      ))}
    </div>
  );
};


interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  reviews: Review[];
  onAddReview: (review: Omit<Review, 'id' | 'date'>) => void;
}

const ReviewModal: React.FC<ReviewModalProps> = ({ isOpen, onClose, reviews, onAddReview }) => {
  const [view, setView] = useState<'form' | 'list'>('form');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState(''); // Per user request
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(0);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      // Reset state after closing animation to avoid showing reset state during fade-out
      const timer = setTimeout(() => {
        setView('form');
        setUsername('');
        setEmail('');
        setMessage('');
        setRating(0);
        setError('');
        setIsSubmitting(false);
      }, 300); // Corresponds to animation duration
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen) return null;
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !email || !message || rating === 0) {
      setError('Harap isi semua kolom dan berikan rating.');
      return;
    }
    // Simple email validation
    if (!/\S+@\S+\.\S+/.test(email)) {
        setError('Format email tidak valid.');
        return;
    }

    setError('');
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      onAddReview({ username, email, message, rating });
      // Reset form
      setUsername('');
      setEmail('');
      setMessage('');
      setRating(0);
      setIsSubmitting(false);
      // Switch to list view to show the new review
      setView('list');
    }, 500);
  };
  
  const averageRating = reviews.length > 0 ? reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length : 0;
  
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      year: 'numeric', month: 'long', day: 'numeric'
    });
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
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors z-10"
          aria-label="Close"
        >
          <IconClose className="h-6 w-6 text-gray-700 dark:text-gray-200" />
        </button>
        
        {view === 'form' && (
          <div>
            <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                    Beri Ulasan
                </h2>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                    Bagikan pendapat Anda tentang aplikasi ini.
                </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Username</label>
                <input type="text" id="username" value={username} onChange={e => setUsername(e.target.value)} className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" required />
              </div>
               <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Pesan</label>
                <textarea id="message" value={message} onChange={e => setMessage(e.target.value)} rows={4} className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary resize-none" required></textarea>
              </div>
              <div className="flex flex-col items-center gap-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Rating Anda</label>
                <StarRating rating={rating} onRatingChange={setRating} />
              </div>
              {error && <p className="text-red-500 text-sm text-center">{error}</p>}
              <div className="flex justify-between items-center pt-4">
                 <button type="button" onClick={() => setView('list')} className="text-sm text-primary dark:text-secondary hover:underline">
                    Lihat Ulasan Lainnya ({reviews.length})
                </button>
                <button type="submit" disabled={isSubmitting} className="px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                  {isSubmitting ? 'Mengirim...' : 'Kirim Ulasan'}
                </button>
              </div>
            </form>
          </div>
        )}
        
        {view === 'list' && (
           <div>
            <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                    Ulasan Pengguna
                </h2>
                <div className="mt-3 flex flex-col items-center gap-2">
                    <StarRating rating={averageRating} interactive={false} />
                    <p className="text-gray-600 dark:text-gray-400">
                        <strong>{averageRating.toFixed(1)}</strong> dari 5 bintang ({reviews.length} ulasan)
                    </p>
                </div>
            </div>
            <div className="space-y-4 max-h-[50vh] overflow-y-auto pr-2">
              {reviews.map(review => (
                <div key={review.id} className="bg-white dark:bg-gray-900/50 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary dark:text-secondary">
                        <IconUser className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <h4 className="font-bold text-gray-800 dark:text-gray-100">{review.username}</h4>
                        <StarRating rating={review.rating} interactive={false} />
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{formatDate(review.date)}</p>
                      <p className="text-gray-600 dark:text-gray-300">{review.message}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
                <button onClick={() => setView('form')} className="px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                    + Tulis Ulasan
                </button>
            </div>
          </div>
        )}
      </div>
       <style>{`
        /* Styles from other modals */
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
        @keyframes slide-up { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        .animate-slide-up { animation: slide-up 0.4s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default ReviewModal;
