import React, { useState, useEffect } from 'react';
import { Eye } from 'lucide-react';

interface PageViewCounterProps {
  className?: string;
}

export const PageViewCounter: React.FC<PageViewCounterProps> = ({ className = '' }) => {
  const [viewCount, setViewCount] = useState<number>(0);
  
  useEffect(() => {
    // Recupera il conteggio attuale dal localStorage
    const storedCount = localStorage.getItem('pageViewCount');
    let currentCount = storedCount ? parseInt(storedCount, 10) : 0;
    
    // Incrementa il conteggio solo se è una nuova sessione
    const lastVisit = localStorage.getItem('lastVisit');
    const now = new Date().toDateString();
    
    if (lastVisit !== now) {
      currentCount += 1;
      localStorage.setItem('lastVisit', now);
      localStorage.setItem('pageViewCount', currentCount.toString());
    }
    
    setViewCount(currentCount);
    
    // Simulazione di incremento per demo (rimuovere in produzione)
    const interval = setInterval(() => {
      setViewCount(prev => {
        const newCount = prev + Math.floor(Math.random() * 3);
        localStorage.setItem('pageViewCount', newCount.toString());
        return newCount;
      });
    }, 30000); // Incrementa ogni 30 secondi per demo
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className={`flex items-center ${className}`}>
      <Eye className="h-5 w-5 text-yellow-400 mr-2" />
      <div className="flex flex-col">
        <span className="text-sm text-gray-300">Visite totali</span>
        <span className="text-xl font-bold text-white">{viewCount.toLocaleString()}</span>
      </div>
    </div>
  );
};