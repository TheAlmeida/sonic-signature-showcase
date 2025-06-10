
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Volume2, Cpu, Database, BarChart3, Target, CheckCircle, ArrowRight, Mic, AudioWaveform, Settings, Search, Clock, TrendingUp, Users, Lightbulb, MessageCircle, FileText, Home, HardDrive } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TitleSlide from './slides/TitleSlide';
import AgendaSlide from './slides/AgendaSlide';
import ContextSlide from './slides/ContextSlide';
import ConceptsSlide from './slides/ConceptsSlide';
import AlgorithmsSlide from './slides/AlgorithmsSlide';
import DatasetSlide from './slides/DatasetSlide';
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
  { id: 'datasets', title: 'Datasets', icon: HardDrive, component: DatasetSlide, color: 'green' },
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
  const [transitionDirection, setTransitionDirection] = useState('next');

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
    <div className="h-screen w-screen bg-gradient-to-br from-slate-50 to-blue-50 font-inter overflow-hidden flex flex-col">
      {/* Adaptive Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="flex items-center justify-between px-[clamp(1rem,3vw,3rem)] py-[clamp(0.5rem,1.5vh,1.5rem)]">
          <div className="flex items-center space-x-[clamp(1rem,3vw,3rem)]">
            <div className={`px-[clamp(1rem,2.5vw,2.5rem)] py-[clamp(0.5rem,1.2vh,1.2rem)] bg-${currentSlideColor}-100 text-${currentSlideColor}-800 rounded-full text-[clamp(1rem,2.2vw,2rem)] font-medium animate-fade-in flex items-center space-x-[clamp(0.5rem,1.5vw,1.5rem)]`}>
              <span>{currentSlide + 1}</span>
              <span className="text-gray-400">/</span>
              <span className="text-gray-600">{slides.length}</span>
            </div>
            <div className="flex items-center space-x-[clamp(0.5rem,1.5vw,1.5rem)] text-[clamp(1.2rem,2.5vw,2.2rem)] font-medium text-gray-800 animate-fade-in-right" style={{ animationDelay: '0.1s' }}>
              {React.createElement(slides[currentSlide].icon, { className: `h-[clamp(1.5rem,3vw,3rem)] w-[clamp(1.5rem,3vw,3rem)] text-${currentSlideColor}-600 mr-[clamp(0.5rem,1vw,1rem)]` })}
              <span className="hidden sm:inline">{slides[currentSlide].title}</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-[clamp(0.5rem,2vw,2rem)]">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => goToSlide(0)}
              disabled={currentSlide === 0 || isTransitioning}
              className="hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-[clamp(0.5rem,1vw,1rem)] px-[clamp(1rem,2.5vw,2.5rem)] py-[clamp(0.5rem,1.5vh,1.5rem)]"
            >
              <Home className="h-[clamp(1.2rem,2.5vw,2.2rem)] w-[clamp(1.2rem,2.5vw,2.2rem)]" />
              <span className="hidden md:inline text-[clamp(0.9rem,1.8vw,1.5rem)]">Start</span>
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={prevSlide}
              disabled={currentSlide === 0 || isTransitioning}
              className="hover:bg-gray-100 transition-colors duration-200 flex items-center px-[clamp(1rem,2.5vw,2.5rem)] py-[clamp(0.5rem,1.5vh,1.5rem)]"
            >
              <ChevronLeft className="h-[clamp(1.5rem,3vw,2.5rem)] w-[clamp(1.5rem,3vw,2.5rem)] mr-[clamp(0.3rem,1vw,1rem)]" />
              <span className="hidden sm:inline text-[clamp(0.9rem,1.8vw,1.5rem)]">Prev</span>
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1 || isTransitioning}
              className="hover:bg-gray-100 transition-colors duration-200 flex items-center px-[clamp(1rem,2.5vw,2.5rem)] py-[clamp(0.5rem,1.5vh,1.5rem)]"
            >
              <span className="hidden sm:inline text-[clamp(0.9rem,1.8vw,1.5rem)]">Next</span>
              <ChevronRight className="h-[clamp(1.5rem,3vw,2.5rem)] w-[clamp(1.5rem,3vw,2.5rem)] ml-[clamp(0.3rem,1vw,1rem)]" />
            </Button>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="h-[clamp(0.2rem,0.5vh,0.6rem)] bg-gray-100">
          <div 
            className={`h-full bg-gradient-to-r from-${currentSlideColor}-500 to-${currentSlideColor}-600 transition-all duration-500 ease-out`}
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Slide Navigation Dots - Smaller and more transparent */}
      <div className="fixed bottom-[clamp(1.5rem,4vh,4rem)] left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex space-x-[clamp(0.3rem,1vw,1rem)] bg-white/70 backdrop-blur-md rounded-full px-[clamp(1rem,2.5vw,2.5rem)] py-[clamp(0.5rem,1.5vh,1.5rem)] shadow-lg border border-gray-100/50">
          {slides.map((slide, index) => {
            const Icon = slide.icon;
            return (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isTransitioning}
                title={slide.title}
                className={`group w-[clamp(1.8rem,3.5vw,3.5rem)] h-[clamp(1.8rem,3.5vw,3.5rem)] rounded-full flex items-center justify-center transition-all duration-300 relative ${
                  index === currentSlide ? `bg-${currentSlideColor}-100` : 'hover:bg-gray-100'
                }`}
              >
                <Icon className={`h-[clamp(0.9rem,1.8vw,1.6rem)] w-[clamp(0.9rem,1.8vw,1.6rem)] transition-colors ${
                  index === currentSlide ? `text-${currentSlideColor}-600` : 'text-gray-400 group-hover:text-gray-600'
                }`} />
                <span className={`absolute -top-[clamp(3rem,6vh,5rem)] bg-${currentSlideColor}-800 text-white text-[clamp(0.7rem,1.5vw,1.2rem)] px-[clamp(0.6rem,2vw,2rem)] py-[clamp(0.4rem,1vh,1rem)] rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap`}>
                  {index + 1}. {slide.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Full-Screen Slide Area with reduced bottom padding */}
      <div className="pt-[clamp(5rem,10vh,10rem)] pb-[clamp(8rem,12vh,12rem)] flex-1 min-h-0 w-full">
        <div 
          key={animationKey} 
          className={`h-full w-full transition-all duration-500 ease-in-out ${
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

      {/* Touch/Click Areas for Navigation */}
      <div className="fixed inset-0 z-40 pointer-events-none">
        <div 
          className="absolute left-0 top-0 bottom-0 w-[15vw] h-full pointer-events-auto cursor-w-resize opacity-0"
          onClick={prevSlide}
          style={{ display: currentSlide === 0 || isTransitioning ? 'none' : 'block' }}
        />
        <div 
          className="absolute right-0 top-0 bottom-0 w-[15vw] h-full pointer-events-auto cursor-e-resize opacity-0" 
          onClick={nextSlide}
          style={{ display: currentSlide === slides.length - 1 || isTransitioning ? 'none' : 'block' }}
        />
      </div>

      {/* Keyboard Shortcuts Help - Smaller and more transparent */}
      <div className="fixed right-[clamp(1rem,3vw,3rem)] bottom-[clamp(9rem,14vh,14rem)] z-50">
        <Button
          variant="outline"
          size="sm"
          className="opacity-40 hover:opacity-80 transition-opacity px-[clamp(0.8rem,2vw,2rem)] py-[clamp(0.8rem,2vh,1.5rem)] bg-white/70 backdrop-blur-sm"
          title="Press '?' for keyboard shortcuts"
        >
          <span className="text-[clamp(1rem,2vw,1.8rem)]">?</span>
        </Button>
      </div>
    </div>
  );
};

export default Presentation;
