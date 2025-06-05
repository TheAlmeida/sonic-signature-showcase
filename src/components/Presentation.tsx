
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Volume2, Cpu, Database, BarChart3, Target, CheckCircle, ArrowRight, Mic, AudioWaveform, Settings, Search, Clock, TrendingUp, Users, Lightbulb, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TitleSlide from './slides/TitleSlide';
import AgendaSlide from './slides/AgendaSlide';
import ContextSlide from './slides/ContextSlide';
import ConceptsSlide from './slides/ConceptsSlide';
import AlgorithmsSlide from './slides/AlgorithmsSlide';
import MethodologySlide from './slides/MethodologySlide';
import ResultsSlide from './slides/ResultsSlide';
import ChallengesSlide from './slides/ChallengesSlide';
import FutureWorkSlide from './slides/FutureWorkSlide';
import ConclusionsSlide from './slides/ConclusionsSlide';
import ThankYouSlide from './slides/ThankYouSlide';

const slides = [
  { id: 'title', title: 'Title', icon: Volume2, component: TitleSlide },
  { id: 'agenda', title: 'Agenda', icon: BarChart3, component: AgendaSlide },
  { id: 'context', title: 'Internship Context', icon: Users, component: ContextSlide },
  { id: 'concepts', title: 'Core Concepts', icon: Cpu, component: ConceptsSlide },
  { id: 'algorithms', title: 'Analyzed Algorithms', icon: Database, component: AlgorithmsSlide },
  { id: 'methodology', title: 'Evaluation Methodology', icon: Target, component: MethodologySlide },
  { id: 'results', title: 'Experimental Results', icon: TrendingUp, component: ResultsSlide },
  { id: 'challenges', title: 'Challenges & Solutions', icon: CheckCircle, component: ChallengesSlide },
  { id: 'future', title: 'Future Work', icon: Lightbulb, component: FutureWorkSlide },
  { id: 'conclusions', title: 'Conclusions', icon: CheckCircle, component: ConclusionsSlide },
  { id: 'thanks', title: 'Thank You', icon: MessageCircle, component: ThankYouSlide },
];

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
      setAnimationKey(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
      setAnimationKey(prev => prev + 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setAnimationKey(prev => prev + 1);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide]);

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="h-screen bg-gradient-to-br from-slate-50 to-blue-50 font-inter overflow-hidden">
      {/* Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
        <div className="flex items-center justify-between px-6 py-3">
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-600">
              {currentSlide + 1} / {slides.length}
            </div>
            <div className="text-sm font-medium text-gray-800">
              {slides[currentSlide].title}
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={prevSlide}
              disabled={currentSlide === 0}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="h-1 bg-gray-200">
          <div 
            className="h-full bg-presentation-primary transition-all duration-300"
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Slide Navigation Dots */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex space-x-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentSlide 
                  ? 'bg-presentation-primary scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Main Slide Area */}
      <div className="pt-16 h-full">
        <div key={animationKey} className="h-full animate-fade-in">
          <CurrentSlideComponent />
        </div>
      </div>
    </div>
  );
};

export default Presentation;
