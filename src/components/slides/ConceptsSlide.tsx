
import React from 'react';
import { AudioWaveform, Settings, Hash, Search, ArrowRight, Mic, Database, CheckCircle, Zap, Brain, Cpu } from 'lucide-react';

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
    },
    {
      icon: CheckCircle,
      title: 'Identification',
      description: 'Result verification',
      color: 'bg-emerald-500',
      detail: 'Confidence scoring'
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
          backgroundSize: '40px 40px'
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
        <div className="absolute top-16 right-16 animate-gentle-float opacity-20">
          <Brain className="h-16 w-16 text-purple-500" />
        </div>
        <div className="absolute bottom-20 left-20 animate-gentle-float opacity-15" style={{ animationDelay: '2s' }}>
          <Cpu className="h-14 w-14 text-blue-500" />
        </div>
        <div className="absolute top-1/3 left-16 animate-gentle-float opacity-18" style={{ animationDelay: '4s' }}>
          <Zap className="h-12 w-12 text-indigo-500" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto h-full py-8 px-12">
        {/* Enhanced Header */}
        <div className="text-center mb-8 animate-slide-in-up">
          <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-4 animate-fade-in">
            <Brain className="h-4 w-4" />
            <span>Technical Foundation</span>
          </div>
          <h1 className="text-5xl font-bold text-presentation-text font-montserrat mb-4 animate-slide-in-down" style={{ animationDelay: '0.2s' }}>
            Audio Fingerprinting Pipeline
          </h1>
          <p className="text-xl text-presentation-text-light animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Understanding the core algorithms and state-of-the-art techniques
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-8 h-4/5">
          {/* Enhanced Process Flow */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-blue-100 animate-scale-in" style={{ animationDelay: '0.6s' }}>
            <h2 className="text-2xl font-bold text-presentation-text mb-8 text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
              Audio Processing Pipeline
            </h2>
            
            <div className="flex items-center justify-between relative overflow-x-auto">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <React.Fragment key={index}>
                    <div 
                      className="flex flex-col items-center min-w-32 animate-slide-in-up"
                      style={{ animationDelay: `${1 + index * 0.2}s` }}
                    >
                      <div className={`w-20 h-20 ${step.color} rounded-2xl flex items-center justify-center mb-4 shadow-xl transform hover:scale-110 transition-all duration-300 relative group`}>
                        <Icon className="h-10 w-10 text-white" />
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center text-xs font-bold text-gray-700 shadow-lg">
                          {index + 1}
                        </div>
                      </div>
                      <div className="text-center">
                        <h3 className="text-sm font-bold text-presentation-text mb-1">
                          {step.title}
                        </h3>
                        <p className="text-xs text-presentation-text-light mb-1">
                          {step.description}
                        </p>
                        <p className="text-xs text-gray-500 italic">
                          {step.detail}
                        </p>
                      </div>
                    </div>
                    
                    {index < steps.length - 1 && (
                      <div 
                        className="flex-1 mx-4 animate-fade-in flex items-center justify-center"
                        style={{ animationDelay: `${1.2 + index * 0.2}s` }}
                      >
                        <ArrowRight className="h-8 w-8 text-blue-400 animate-pulse" />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* Enhanced Key Concepts Grid */}
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-blue-100 hover:shadow-xl transition-all duration-300 animate-slide-in-left" style={{ animationDelay: '2.5s' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <AudioWaveform className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-presentation-text mb-3">
                Spectral Analysis
              </h3>
              <div className="space-y-2 text-sm text-presentation-text-light">
                <div className="flex items-center space-x-2 animate-fade-in" style={{ animationDelay: '2.8s' }}>
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Short-Time Fourier Transform</span>
                </div>
                <div className="flex items-center space-x-2 animate-fade-in" style={{ animationDelay: '3s' }}>
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Mel-Frequency Analysis</span>
                </div>
                <div className="flex items-center space-x-2 animate-fade-in" style={{ animationDelay: '3.2s' }}>
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Spectral Peak Detection</span>
                </div>
                <div className="flex items-center space-x-2 animate-fade-in" style={{ animationDelay: '3.4s' }}>
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Temporal Pattern Recognition</span>
                </div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-green-100 hover:shadow-xl transition-all duration-300 animate-slide-in-up" style={{ animationDelay: '2.7s' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <Hash className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-presentation-text mb-3">
                Hash Generation
              </h3>
              <div className="space-y-2 text-sm text-presentation-text-light">
                <div className="flex items-center space-x-2 animate-fade-in" style={{ animationDelay: '3s' }}>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Locality-Sensitive Hashing</span>
                </div>
                <div className="flex items-center space-x-2 animate-fade-in" style={{ animationDelay: '3.2s' }}>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Binary Feature Encoding</span>
                </div>
                <div className="flex items-center space-x-2 animate-fade-in" style={{ animationDelay: '3.4s' }}>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Dimensionality Reduction</span>
                </div>
                <div className="flex items-center space-x-2 animate-fade-in" style={{ animationDelay: '3.6s' }}>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Noise Robustness</span>
                </div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-purple-100 hover:shadow-xl transition-all duration-300 animate-slide-in-right" style={{ animationDelay: '2.9s' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <Search className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-presentation-text mb-3">
                Matching Algorithms
              </h3>
              <div className="space-y-2 text-sm text-presentation-text-light">
                <div className="flex items-center space-x-2 animate-fade-in" style={{ animationDelay: '3.2s' }}>
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Hamming Distance</span>
                </div>
                <div className="flex items-center space-x-2 animate-fade-in" style={{ animationDelay: '3.4s' }}>
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Approximate Matching</span>
                </div>
                <div className="flex items-center space-x-2 animate-fade-in" style={{ animationDelay: '3.6s' }}>
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Temporal Alignment</span>
                </div>
                <div className="flex items-center space-x-2 animate-fade-in" style={{ animationDelay: '3.8s' }}>
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Confidence Scoring</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConceptsSlide;
