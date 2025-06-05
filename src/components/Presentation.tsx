
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Volume2, Cpu, Database, BarChart3, Target, CheckCircle, ArrowRight, Mic, AudioWaveform, Settings, Search, Clock, TrendingUp, Users, Lightbulb, MessageCircle, FileText, Home } from 'lucide-react';
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
  { id: 'title', title: 'Title', icon: Volume2, component: TitleSlide, color: 'blue' },
  { id: 'agenda', title: 'Agenda', icon: FileText, component: AgendaSlide, color: 'indigo' },
  { id: 'context', title: 'Internship Context', icon: Users, component: ContextSlide, color: 'sky' },
  { id: 'concepts', title: 'Core Concepts', icon: Cpu, component: ConceptsSlide, color: 'purple' },
  { id: 'algorithms', title: 'Analyzed Algorithms', icon: Database, component: AlgorithmsSlide, color: 'gray' },
  { id: 'methodology', title: 'Evaluation Methodology', icon: Target, component: MethodologySlide, color: 'blue' },
  { id: 'results', title: 'Experimental Results', icon: TrendingUp, component: ResultsSlide, color: 'blue' },
  { id: 'challenges', title: 'Challenges & Solutions', icon: CheckCircle, component: ChallengesSlide, color: 'red' },
  { id: 'future', title: 'Future Work', icon: Lightbulb, component: FutureWorkSlide, color: 'indigo' },
  { id: 'conclusions', title: 'Conclusions', icon: CheckCircle, component: ConclusionsSlide, color: 'green' },
  { id: 'thanks', title: 'Thank You', icon: MessageCircle, component: ThankYouSlide, color: 'purple' },
];

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionDirection, setTransitionDirection] = useState('next'); // 'next' or 'prev'

  const nextSlide = () => {
    if (currentSlide < slides.length - 1 && !isTransitioning) {
      setTransitionDirection('next');
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(currentSlide + 1);
        setAnimationKey(prev => prev + 1);
        setIsTransitioning(false);
      }, 500);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0 && !isTransitioning) {
      setTransitionDirection('prev');
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(currentSlide - 1);
        setAnimationKey(prev => prev + 1);
        setIsTransitioning(false);
      }, 500);
    }
  };

  const goToSlide = (index: number) => {
    if (index !== currentSlide && !isTransitioning) {
      setTransitionDirection(index > currentSlide ? 'next' : 'prev');
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setAnimationKey(prev => prev + 1);
        setIsTransitioning(false);
      }, 500);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'Home') {
        goToSlide(0);
      } else if (e.key === 'End') {
        goToSlide(slides.length - 1);
      } else if (e.key >= '1' && e.key <= '9') {
        const slideNumber = parseInt(e.key) - 1;
        if (slideNumber < slides.length) {
          goToSlide(slideNumber);
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide, isTransitioning]);

  const CurrentSlideComponent = slides[currentSlide].component;
  const currentSlideColor = slides[currentSlide].color;

  return (
    <div className="h-screen bg-gradient-to-br from-slate-50 to-blue-50 font-inter overflow-hidden">
      {/* Enhanced Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="flex items-center justify-between px-6 py-3">
          <div className="flex items-center space-x-4">
            <div className={`px-3 py-1 bg-${currentSlideColor}-100 text-${currentSlideColor}-800 rounded-full text-sm font-medium animate-fade-in flex items-center space-x-2`}>
              <span>{currentSlide + 1}</span>
              <span className="text-gray-400">/</span>
              <span className="text-gray-600">{slides.length}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm font-medium text-gray-800 animate-fade-in-right" style={{ animationDelay: '0.1s' }}>
              {React.createElement(slides[currentSlide].icon, { className: `h-4 w-4 text-${currentSlideColor}-600 mr-1` })}
              <span>{slides[currentSlide].title}</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => goToSlide(0)}
              disabled={currentSlide === 0 || isTransitioning}
              className="hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-1"
            >
              <Home className="h-3.5 w-3.5" />
              <span className="text-xs">Start</span>
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={prevSlide}
              disabled={currentSlide === 0 || isTransitioning}
              className="hover:bg-gray-100 transition-colors duration-200 flex items-center"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              <span className="text-xs">Prev</span>
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1 || isTransitioning}
              className="hover:bg-gray-100 transition-colors duration-200 flex items-center"
            >
              <span className="text-xs">Next</span>
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>
        
        {/* Enhanced Progress Bar */}
        <div className="h-1 bg-gray-100">
          <div 
            className={`h-full bg-gradient-to-r from-${currentSlideColor}-500 to-${currentSlideColor}-600 transition-all duration-500 ease-out`}
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Enhanced Slide Navigation Dots */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex space-x-2 bg-white/90 backdrop-blur-md rounded-full px-4 py-2 shadow-lg border border-gray-100">
          {slides.map((slide, index) => {
            const Icon = slide.icon;
            return (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isTransitioning}
                title={slide.title}
                className={`group w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 relative ${
                  index === currentSlide ? `bg-${currentSlideColor}-100` : 'hover:bg-gray-100'
                }`}
              >
                <Icon className={`h-3 w-3 transition-colors ${
                  index === currentSlide ? `text-${currentSlideColor}-600` : 'text-gray-400 group-hover:text-gray-600'
                }`} />
                <span className={`absolute -top-8 bg-${currentSlideColor}-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`}>
                  {index + 1}. {slide.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Enhanced Main Slide Area */}
      <div className="pt-16 h-full">
        <div 
          key={animationKey} 
          className={`h-full transition-all duration-500 ease-in-out ${
            isTransitioning 
              ? transitionDirection === 'next' 
                ? 'opacity-0 translate-x-full' 
                : 'opacity-0 -translate-x-full'
              : 'opacity-100 translate-x-0'
          }`}
        >
          <CurrentSlideComponent />
        </div>
      </div>

      {/* Slide Controls Overlay (touch areas for mobile) */}
      <div className="fixed inset-0 z-40 pointer-events-none">
        <div 
          className="absolute left-0 top-0 bottom-0 w-1/5 h-full pointer-events-auto cursor-w-resize opacity-0"
          onClick={prevSlide}
          style={{ display: currentSlide === 0 || isTransitioning ? 'none' : 'block' }}
        />
        <div 
          className="absolute right-0 top-0 bottom-0 w-1/5 h-full pointer-events-auto cursor-e-resize opacity-0" 
          onClick={nextSlide}
          style={{ display: currentSlide === slides.length - 1 || isTransitioning ? 'none' : 'block' }}
        />
      </div>

      {/* Keyboard Shortcuts Help - Press '?' to show */}
      <div className="fixed right-4 bottom-20 z-50">
        <Button
          variant="outline"
          size="sm"
          className="opacity-50 hover:opacity-100 transition-opacity"
          title="Press '?' for keyboard shortcuts"
        >
          ?
        </Button>
      </div>
    </div>
  );
};

export default Presentation;
