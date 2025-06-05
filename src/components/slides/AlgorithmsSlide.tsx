
import React from 'react';
import { Building2, Cloud, Github, Database, Cpu, Zap, Code, Shield, Globe } from 'lucide-react';

const AlgorithmsSlide = () => {
  const algorithms = [
    {
      name: 'Mediaprobe',
      type: 'Commercial',
      icon: Building2,
      color: 'bg-blue-600',
      accentColor: 'blue',
      features: ['Proprietary algorithm', 'Real-time processing', 'High accuracy', 'Scalable architecture'],
      description: 'Company\'s current audio fingerprinting solution',
      performance: { accuracy: 95, speed: 'Fast', robustness: 'High' }
    },
    {
      name: 'ACRCloud',
      type: 'Commercial API',
      icon: Cloud,
      color: 'bg-green-600',
      accentColor: 'green',
      features: ['Cloud-based service', 'Multiple audio formats', 'Global database', 'REST API'],
      description: 'Leading commercial audio recognition platform',
      performance: { accuracy: 98, speed: 'Very Fast', robustness: 'Very High' }
    },
    {
      name: 'Audfprint',
      type: 'Open Source',
      icon: Github,
      color: 'bg-purple-600',
      accentColor: 'purple',
      features: ['Peak-based hashing', 'Efficient matching', 'Python implementation', 'Research-oriented'],
      description: 'Academic implementation by Dan Ellis (Columbia)',
      performance: { accuracy: 88, speed: 'Medium', robustness: 'Medium' }
    },
    {
      name: 'Dejavu',
      type: 'Open Source',
      icon: Database,
      color: 'bg-orange-600',
      accentColor: 'orange',
      features: ['Spectral peaks', 'MySQL/PostgreSQL', 'Simple interface', 'Noise robust'],
      description: 'Popular Python audio fingerprinting library',
      performance: { accuracy: 82, speed: 'Slow', robustness: 'Medium' }
    },
    {
      name: 'Olaf',
      type: 'Open Source',
      icon: Cpu,
      color: 'bg-red-600',
      accentColor: 'red',
      features: ['Event point pairing', 'Fast indexing', 'Memory efficient', 'Java implementation'],
      description: 'Optimized for large-scale audio databases',
      performance: { accuracy: 90, speed: 'Fast', robustness: 'High' }
    },
    {
      name: 'Soundfingerprinting',
      type: 'Open Source',
      icon: Zap,
      color: 'bg-indigo-600',
      accentColor: 'indigo',
      features: ['.NET framework', 'Neural networks', 'High precision', 'Configurable parameters'],
      description: 'Advanced .NET audio fingerprinting library',
      performance: { accuracy: 93, speed: 'Fast', robustness: 'High' }
    }
  ];

  const getPerformanceColor = (metric: string, value: string | number) => {
    if (typeof value === 'number') {
      if (value >= 95) return 'text-green-600';
      if (value >= 90) return 'text-blue-600';
      if (value >= 85) return 'text-yellow-600';
      return 'text-red-600';
    }
    
    if (value === 'Very Fast' || value === 'Very High') return 'text-green-600';
    if (value === 'Fast' || value === 'High') return 'text-blue-600';
    if (value === 'Medium') return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="h-full relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Digital Circuit Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="40" cy="40" r="2" fill="#60a5fa" />
              <path d="M20,40 L60,40 M40,20 L40,60" stroke="#60a5fa" strokeWidth="1" opacity="0.6" />
              <circle cx="20" cy="20" r="1.5" fill="#3b82f6" />
              <circle cx="60" cy="60" r="1.5" fill="#3b82f6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      {/* Floating Algorithm Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 animate-gentle-float opacity-20">
          <Code className="h-16 w-16 text-blue-400" />
        </div>
        <div className="absolute bottom-32 left-16 animate-gentle-float opacity-15" style={{ animationDelay: '2s' }}>
          <Shield className="h-14 w-14 text-indigo-400" />
        </div>
        <div className="absolute top-1/3 right-16 animate-gentle-float opacity-18" style={{ animationDelay: '4s' }}>
          <Globe className="h-12 w-12 text-cyan-400" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto h-full py-8 px-12">
        {/* Enhanced Header */}
        <div className="text-center mb-8 animate-slide-in-up">
          <div className="inline-flex items-center space-x-2 bg-blue-500/20 backdrop-blur-sm text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-4 animate-fade-in border border-blue-400/30">
            <Code className="h-4 w-4" />
            <span>Algorithm Analysis</span>
          </div>
          <h1 className="text-5xl font-bold text-white font-montserrat mb-4 animate-slide-in-down" style={{ animationDelay: '0.2s' }}>
            Analyzed Algorithms
          </h1>
          <p className="text-xl text-blue-200 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Comprehensive evaluation of commercial and open-source solutions
          </p>
        </div>

        {/* Enhanced Algorithms Grid */}
        <div className="grid grid-cols-3 gap-6 h-4/5 mb-6">
          {algorithms.map((algorithm, index) => {
            const Icon = algorithm.icon;
            return (
              <div
                key={index}
                className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200 animate-scale-in relative overflow-hidden group"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                {/* Card Background Accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 ${algorithm.color.replace('bg-', 'bg-')}`}></div>
                
                {/* Header */}
                <div className="flex items-center mb-4">
                  <div className={`w-14 h-14 ${algorithm.color} rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900">
                      {algorithm.name}
                    </h3>
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                      algorithm.type === 'Commercial' || algorithm.type === 'Commercial API' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {algorithm.type}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {algorithm.description}
                </p>

                {/* Performance Metrics */}
                <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                  <h4 className="text-xs font-semibold text-gray-700 mb-2">Performance</h4>
                  <div className="grid grid-cols-1 gap-1 text-xs">
                    <div className="flex justify-between">
                      <span>Accuracy:</span>
                      <span className={`font-bold ${getPerformanceColor('accuracy', algorithm.performance.accuracy)}`}>
                        {algorithm.performance.accuracy}%
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Speed:</span>
                      <span className={`font-bold ${getPerformanceColor('speed', algorithm.performance.speed)}`}>
                        {algorithm.performance.speed}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Robustness:</span>
                      <span className={`font-bold ${getPerformanceColor('robustness', algorithm.performance.robustness)}`}>
                        {algorithm.performance.robustness}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  <h4 className="text-xs font-semibold text-gray-900">
                    Key Features:
                  </h4>
                  <div className="space-y-1">
                    {algorithm.features.slice(0, 3).map((feature, featureIndex) => (
                      <div 
                        key={featureIndex}
                        className="flex items-center text-xs text-gray-600"
                      >
                        <div className={`w-1.5 h-1.5 ${algorithm.color} rounded-full mr-2 flex-shrink-0`}></div>
                        {feature}
                      </div>
                    ))}
                    {algorithm.features.length > 3 && (
                      <div className="text-xs text-gray-500 italic">
                        +{algorithm.features.length - 3} more features
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Summary Stats */}
        <div className="grid grid-cols-3 gap-4 animate-slide-in-up" style={{ animationDelay: '1.2s' }}>
          <div className="bg-blue-500/20 backdrop-blur-sm rounded-xl p-4 text-center border border-blue-400/30">
            <div className="text-3xl font-bold text-blue-300 mb-1">2</div>
            <div className="text-sm text-blue-200 font-medium">Commercial Solutions</div>
            <div className="text-xs text-blue-400">ACRCloud, Mediaprobe</div>
          </div>
          <div className="bg-green-500/20 backdrop-blur-sm rounded-xl p-4 text-center border border-green-400/30">
            <div className="text-3xl font-bold text-green-300 mb-1">4</div>
            <div className="text-sm text-green-200 font-medium">Open Source Libraries</div>
            <div className="text-xs text-green-400">Python, Java, .NET implementations</div>
          </div>
          <div className="bg-purple-500/20 backdrop-blur-sm rounded-xl p-4 text-center border border-purple-400/30">
            <div className="text-3xl font-bold text-purple-300 mb-1">98%</div>
            <div className="text-sm text-purple-200 font-medium">Best Accuracy Achieved</div>
            <div className="text-xs text-purple-400">ACRCloud performance</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlgorithmsSlide;
