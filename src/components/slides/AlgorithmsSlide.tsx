
import React from 'react';
import { Building2, Cloud, Github, Database, Cpu, Zap } from 'lucide-react';

const AlgorithmsSlide = () => {
  const algorithms = [
    {
      name: 'Mediaprobe',
      type: 'Commercial',
      icon: Building2,
      color: 'bg-blue-600',
      features: ['Proprietary algorithm', 'Real-time processing', 'High accuracy', 'Scalable architecture'],
      description: 'Company\'s current audio fingerprinting solution'
    },
    {
      name: 'ACRCloud',
      type: 'Commercial API',
      icon: Cloud,
      color: 'bg-green-600',
      features: ['Cloud-based service', 'Multiple audio formats', 'Global database', 'REST API'],
      description: 'Leading commercial audio recognition platform'
    },
    {
      name: 'Audfprint',
      type: 'Open Source',
      icon: Github,
      color: 'bg-purple-600',
      features: ['Peak-based hashing', 'Efficient matching', 'Python implementation', 'Research-oriented'],
      description: 'Academic implementation by Dan Ellis (Columbia)'
    },
    {
      name: 'Dejavu',
      type: 'Open Source',
      icon: Database,
      color: 'bg-orange-600',
      features: ['Spectral peaks', 'MySQL/PostgreSQL', 'Simple interface', 'Noise robust'],
      description: 'Popular Python audio fingerprinting library'
    },
    {
      name: 'Olaf',
      type: 'Open Source',
      icon: Cpu,
      color: 'bg-red-600',
      features: ['Event point pairing', 'Fast indexing', 'Memory efficient', 'Java implementation'],
      description: 'Optimized for large-scale audio databases'
    },
    {
      name: 'Soundfingerprinting',
      type: 'Open Source',
      icon: Zap,
      color: 'bg-indigo-600',
      features: ['.NET framework', 'Neural networks', 'High precision', 'Configurable parameters'],
      description: 'Advanced .NET audio fingerprinting library'
    }
  ];

  return (
    <div className="h-full bg-gradient-to-br from-white to-gray-50 py-8 px-12">
      <div className="max-w-7xl mx-auto h-full">
        {/* Header */}
        <div className="text-center mb-8 animate-slide-in-up">
          <h1 className="text-5xl font-bold text-presentation-text font-montserrat mb-4">
            Analyzed Algorithms
          </h1>
          <p className="text-xl text-presentation-text-light">
            Comprehensive evaluation of commercial and open-source solutions
          </p>
        </div>

        {/* Algorithms Grid */}
        <div className="grid grid-cols-3 gap-6 h-4/5">
          {algorithms.map((algorithm, index) => {
            const Icon = algorithm.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Header */}
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 ${algorithm.color} rounded-lg flex items-center justify-center mr-4`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-presentation-text">
                      {algorithm.name}
                    </h3>
                    <span className="text-sm text-presentation-text-light font-medium">
                      {algorithm.type}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-presentation-text-light text-sm mb-4 leading-relaxed">
                  {algorithm.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-presentation-text mb-2">
                    Key Features:
                  </h4>
                  <ul className="space-y-1">
                    {algorithm.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex}
                        className="flex items-center text-xs text-presentation-text-light"
                      >
                        <div className={`w-1.5 h-1.5 ${algorithm.color} rounded-full mr-2 flex-shrink-0`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom accent */}
                <div className={`h-1 ${algorithm.color} rounded-full mt-4`}></div>
              </div>
            );
          })}
        </div>

        {/* Summary Stats */}
        <div className="mt-8 grid grid-cols-3 gap-4 animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="bg-blue-50 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">2</div>
            <div className="text-sm text-blue-800">Commercial Solutions</div>
          </div>
          <div className="bg-green-50 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-green-600">4</div>
            <div className="text-sm text-green-800">Open Source Libraries</div>
          </div>
          <div className="bg-purple-50 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-purple-600">6</div>
            <div className="text-sm text-purple-800">Total Algorithms Tested</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlgorithmsSlide;
