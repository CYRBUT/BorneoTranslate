
import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import Translator from './components/Translator';
import NewsModal from './components/NewsModal';
import DonationModal from './components/DonationModal';
import AboutModal from './components/AboutModal';
import ReviewModal from './components/ReviewModal';
import FloatingActionButton from './components/FloatingActionButton';
import { MOCK_NEWS_DATA, MOCK_REVIEWS, MOCK_COMMENTS } from './constants';
import { Review, Comment } from './types';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isNewsModalOpen, setIsNewsModalOpen] = useState(false);
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [reviews, setReviews] = useState<Review[]>(MOCK_REVIEWS);

  const initialComments = MOCK_COMMENTS.reduce((acc, comment) => {
      if (!acc[comment.newsId]) {
          acc[comment.newsId] = [];
      }
      acc[comment.newsId].push(comment);
      return acc;
  }, {} as Record<number, Comment[]>);
  const [comments, setComments] = useState<Record<number, Comment[]>>(initialComments);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);
  
  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };
  
  const handleAddReview = useCallback((review: Omit<Review, 'id' | 'date'>) => {
    const newReview: Review = {
      ...review,
      id: reviews.length + 1,
      date: new Date().toISOString(),
    };
    setReviews(prev => [newReview, ...prev]);
  }, [reviews]);
  
  const handleAddComment = useCallback((comment: Omit<Comment, 'id' | 'date'>) => {
    const newComment: Comment = {
      ...comment,
      id: Date.now(), // simple unique id
      date: new Date().toISOString(),
    };
    setComments(prev => {
      const existingComments = prev[newComment.newsId] || [];
      return {
        ...prev,
        [newComment.newsId]: [...existingComments, newComment]
      };
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header 
        onNewsClick={() => setIsNewsModalOpen(true)}
        isDarkMode={isDarkMode}
        onToggleDarkMode={toggleDarkMode}
      />
      <main className="container mx-auto px-4 py-8">
        <Translator />
      </main>
      <FloatingActionButton 
        onDonateClick={() => setIsDonationModalOpen(true)}
        onAboutClick={() => setIsAboutModalOpen(true)}
        onReviewClick={() => setIsReviewModalOpen(true)}
      />

      <NewsModal 
        isOpen={isNewsModalOpen} 
        onClose={() => setIsNewsModalOpen(false)}
        newsItems={MOCK_NEWS_DATA}
        comments={comments}
        onAddComment={handleAddComment}
      />
      <DonationModal 
        isOpen={isDonationModalOpen} 
        onClose={() => setIsDonationModalOpen(false)} 
      />
      <AboutModal 
        isOpen={isAboutModalOpen} 
        onClose={() => setIsAboutModalOpen(false)} 
      />
      <ReviewModal 
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
        reviews={reviews}
        onAddReview={handleAddReview}
      />
    </div>
  );
};

export default App;