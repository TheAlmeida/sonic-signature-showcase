
import React from 'react';
import { AudioWaveform, Settings, Hash, Search, ArrowRight, Mic, Database, Zap, Brain, Cpu } from 'lucide-react';

const ConceptsSlide = () => {
  const steps = [
    {
      icon: Mic,
      title: 'Audio Input',
      description: 'Raw signal capture',
      color: 'bg-blue-500',
      detail: 'Digital audio sampling'
    },
    {
      icon: Settings,
      title: 'Pre-processing',
      description: 'Signal conditioning',
      color: 'bg-green-500',
      detail: 'Noise reduction, normalization'
    },
    {
      icon: AudioWaveform,
      title: 'Feature Extraction',
      description: 'Spectral analysis',
      color: 'bg-purple-500',
      detail: 'STFT, MFCC, peak detection'
    },
    {
      icon: Hash,
      title: 'Fingerprinting',
      description: 'Hash generation',
      color: 'bg-orange-500',
      detail: 'Compact binary encoding'
    },
    {
      icon: Database,
      title: 'Indexing',
      description: 'Database storage',
      color: 'bg-red-500',
      detail: 'Efficient retrieval structures'
    },
    {
      icon: Search,
      title: 'Matching',
      description: 'Query comparison',
      color: 'bg-indigo-500',
      detail: 'Similarity algorithms'
    }
  ];

  return (
    <div className="h-full relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Technical Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, #3b82f6 1px, transparent 1px),
            linear-gradient(0deg, #3b82f6 1px, transparent 1px)
          `,
          backgroundSize: 'clamp(30px, 4vw, 40px) clamp(30px, 4vw, 40px)'
        }}></div>
      </div>

      {/* Circuit Board Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="2" fill="#3b82f6" />
              <circle cx="80" cy="80" r="2" fill="#6366f1" />
              <line x1="20" y1="20" x2="80" y2="80" stroke="#3b82f6" strokeWidth="1" />
              <line x1="20" y1="80" x2="80" y2="20" stroke="#6366f1" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      {/* Floating Tech Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[clamp(4rem,8vh,8rem)] right-[clamp(4rem,8vw,8rem)] animate-gentle-float opacity-20">
          <Brain className="h-[clamp(3rem,6vw,4rem)] w-[clamp(3rem,6vw,4rem)] text-purple-500" />
        </div>
        <div className="absolute bottom-[clamp(5rem,10vh,10rem)] left-[clamp(5rem,10vw,10rem)] animate-gentle-float opacity-15" style={{ animationDelay: '2s' }}>
          <Cpu className="h-[clamp(2.5rem,5vw,3.5rem)] w-[clamp(2.5rem,5vw,3.5rem)] text-blue-500" />
        </div>
        <div className="absolute top-1/3 left-[clamp(4rem,8vw,8rem)] animate-gentle-float opacity-18" style={{ animationDelay: '4s' }}>
          <Zap className="h-[clamp(2rem,4vw,3rem)] w-[clamp(2rem,4vw,3rem)] text-indigo-500" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto h-full py-[clamp(2rem,4vh,4rem)] px-[clamp(3rem,6vw,6rem)]">
        {/* Enhanced Header */}
        <div className="text-center mb-[clamp(2rem,4vh,3rem)] animate-slide-in-up">
          <div className="inline-flex items-center space-x-[clamp(0.5rem,1vw,1rem)] bg-purple-100 text-purple-800 px-[clamp(1rem,2vw,2rem)] py-[clamp(0.5rem,1vh,1rem)] rounded-full text-[clamp(0.7rem,1.4vw,0.9rem)] font-medium mb-[clamp(1rem,2vh,2rem)] animate-fade-in">
            <Brain className="h-[clamp(1rem,2vw,1.2rem)] w-[clamp(1rem,2vw,1.2rem)]" />
            <span>Technical Foundation</span>
          </div>
          <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-bold text-presentation-text font-montserrat mb-[clamp(1rem,2vh,2rem)] animate-slide-in-down leading-tight" style={{ animationDelay: '0.2s' }}>
            Audio Fingerprinting Pipeline
          </h1>
          <p className="text-[clamp(1rem,2vw,1.5rem)] text-presentation-text-light animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Understanding the core algorithms and state-of-the-art techniques
          </p>
        </div>

        {/* Enhanced Process Flow */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-[clamp(2rem,4vw,4rem)] border border-blue-100 animate-scale-in" style={{ animationDelay: '0.6s' }}>
          <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-bold text-presentation-text mb-[clamp(2rem,4vh,3rem)] text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
            Audio Processing Pipeline
          </h2>
          
          <div className="flex items-center justify-center relative flex-wrap gap-[clamp(1rem,2vw,2rem)]">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <React.Fragment key={index}>
                  <div 
                    className="flex flex-col items-center min-w-[clamp(8rem,15vw,12rem)] animate-slide-in-up"
                    style={{ animationDelay: `${1 + index * 0.2}s` }}
                  >
                    <div className={`w-[clamp(4rem,8vw,5rem)] h-[clamp(4rem,8vw,5rem)] ${step.color} rounded-2xl flex items-center justify-center mb-[clamp(1rem,2vh,2rem)] shadow-xl transform hover:scale-110 transition-all duration-300 relative group`}>
                      <Icon className="h-[clamp(2rem,4vw,2.5rem)] w-[clamp(2rem,4vw,2.5rem)] text-white" />
                      <div className="absolute -top-[clamp(0.5rem,1vh,1rem)] -right-[clamp(0.5rem,1vw,1rem)] w-[clamp(1.5rem,3vw,2rem)] h-[clamp(1.5rem,3vw,2rem)] bg-white rounded-full flex items-center justify-center text-[clamp(0.7rem,1.4vw,1rem)] font-bold text-gray-700 shadow-lg">
                        {index + 1}
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 className="text-[clamp(0.8rem,1.6vw,1.1rem)] font-bold text-presentation-text mb-[clamp(0.2rem,0.5vh,0.5rem)]">
                        {step.title}
                      </h3>
                      <p className="text-[clamp(0.7rem,1.4vw,0.9rem)] text-presentation-text-light mb-[clamp(0.2rem,0.5vh,0.5rem)]">
                        {step.description}
                      </p>
                      <p className="text-[clamp(0.6rem,1.2vw,0.8rem)] text-gray-500 italic">
                        {step.detail}
                      </p>
                    </div>
                  </div>
                  
                  {index < steps.length - 1 && (
                    <div 
                      className="hidden lg:flex flex-1 mx-[clamp(1rem,2vw,2rem)] animate-fade-in items-center justify-center"
                      style={{ animationDelay: `${1.2 + index * 0.2}s` }}
                    >
                      <ArrowRight className="h-[clamp(2rem,4vw,2.5rem)] w-[clamp(2rem,4vw,2.5rem)] text-blue-400 animate-pulse" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConceptsSlide;
