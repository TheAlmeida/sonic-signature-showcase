
import React from 'react';
import { AudioWaveform, Settings, Hash, Search, ArrowRight, Mic, Database, CheckCircle } from 'lucide-react';

const ConceptsSlide = () => {
  const steps = [
    {
      icon: Mic,
      title: 'Audio Input',
      description: 'Raw audio signal capture',
      color: 'bg-blue-500'
    },
    {
      icon: Settings,
      title: 'Pre-processing',
      description: 'Noise reduction, normalization',
      color: 'bg-green-500'
    },
    {
      icon: AudioWaveform,
      title: 'Feature Extraction',
      description: 'Spectral analysis, MFCC, etc.',
      color: 'bg-purple-500'
    },
    {
      icon: Hash,
      title: 'Fingerprint Generation',
      description: 'Compact hash creation',
      color: 'bg-orange-500'
    },
    {
      icon: Database,
      title: 'Storage',
      description: 'Database indexing',
      color: 'bg-red-500'
    },
    {
      icon: Search,
      title: 'Matching',
      description: 'Query comparison',
      color: 'bg-indigo-500'
    },
    {
      icon: CheckCircle,
      title: 'Identification',
      description: 'Result verification',
      color: 'bg-emerald-500'
    }
  ];

  return (
    <div className="h-full bg-gradient-to-br from-white to-slate-50 py-8 px-12">
      <div className="max-w-7xl mx-auto h-full">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in-down">
          <h1 className="text-5xl font-bold text-presentation-text font-montserrat mb-4">
            Audio Fingerprinting Concepts
          </h1>
          <p className="text-xl text-presentation-text-light animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Understanding the core pipeline and state-of-the-art techniques
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-rows-2 gap-8 h-4/5">
          {/* Process Flow */}
          <div className="bg-white rounded-2xl shadow-xl p-8 animate-zoom-in" style={{ animationDelay: '0.6s' }}>
            <h2 className="text-2xl font-bold text-presentation-text mb-6 text-center animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
              Audio Fingerprinting Pipeline
            </h2>
            
            <div className="flex items-center justify-between relative">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <React.Fragment key={index}>
                    <div 
                      className="flex flex-col items-center animate-fade-in-up"
                      style={{ animationDelay: `${1.2 + index * 0.3}s` }}
                    >
                      <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mb-3 shadow-lg transform hover:scale-105 transition-transform duration-300`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="text-center max-w-24">
                        <h3 className="text-sm font-semibold text-presentation-text mb-1">
                          {step.title}
                        </h3>
                        <p className="text-xs text-presentation-text-light">
                          {step.description}
                        </p>
                      </div>
                    </div>
                    
                    {index < steps.length - 1 && (
                      <div 
                        className="flex-1 mx-4 animate-fade-in"
                        style={{ animationDelay: `${1.5 + index * 0.3}s` }}
                      >
                        <ArrowRight className="h-6 w-6 text-presentation-secondary mx-auto" />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* Key Concepts Grid */}
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 animate-fade-in-left" style={{ animationDelay: '3.5s' }}>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <AudioWaveform className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-presentation-text mb-3">
                Feature Extraction
              </h3>
              <ul className="text-sm text-presentation-text-light space-y-2">
                <li className="animate-fade-in-up" style={{ animationDelay: '3.8s' }}>• Short-Time Fourier Transform (STFT)</li>
                <li className="animate-fade-in-up" style={{ animationDelay: '4.0s' }}>• Mel-Frequency Cepstral Coefficients</li>
                <li className="animate-fade-in-up" style={{ animationDelay: '4.2s' }}>• Spectral peak analysis</li>
                <li className="animate-fade-in-up" style={{ animationDelay: '4.4s' }}>• Temporal and frequency patterns</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 animate-fade-in-up" style={{ animationDelay: '3.7s' }}>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Hash className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-presentation-text mb-3">
                Fingerprint Generation
              </h3>
              <ul className="text-sm text-presentation-text-light space-y-2">
                <li className="animate-fade-in-up" style={{ animationDelay: '4.0s' }}>• Locality-sensitive hashing</li>
                <li className="animate-fade-in-up" style={{ animationDelay: '4.2s' }}>• Binary feature encoding</li>
                <li className="animate-fade-in-up" style={{ animationDelay: '4.4s' }}>• Dimensionality reduction</li>
                <li className="animate-fade-in-up" style={{ animationDelay: '4.6s' }}>• Robustness to noise/distortion</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 animate-fade-in-right" style={{ animationDelay: '3.9s' }}>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Search className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-presentation-text mb-3">
                Matching Algorithms
              </h3>
              <ul className="text-sm text-presentation-text-light space-y-2">
                <li className="animate-fade-in-up" style={{ animationDelay: '4.2s' }}>• Hamming distance calculation</li>
                <li className="animate-fade-in-up" style={{ animationDelay: '4.4s' }}>• Fast approximate matching</li>
                <li className="animate-fade-in-up" style={{ animationDelay: '4.6s' }}>• Temporal alignment</li>
                <li className="animate-fade-in-up" style={{ animationDelay: '4.8s' }}>• Confidence scoring</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConceptsSlide;
