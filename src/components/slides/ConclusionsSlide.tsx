
import React from 'react';
import { CheckCircle, TrendingUp, Lightbulb, Target } from 'lucide-react';

const ConclusionsSlide = () => {
  const conclusions = [
    {
      icon: TrendingUp,
      title: 'Performance Analysis',
      points: [
        'ACRCloud achieved highest precision (98%) and recall (94%)',
        'Mediaprobe demonstrated strong balance of accuracy and speed',
        'Open-source solutions varied significantly in performance',
        'Memory efficiency critical for large-scale deployments'
      ]
    },
    {
      icon: Target,
      title: 'Algorithm Insights',
      points: [
        'Spectral peak-based methods showed robust noise resistance',
        'Neural network approaches promising for complex scenarios',
        'Parameter tuning essential for optimal performance',
        'Trade-offs exist between accuracy and computational efficiency'
      ]
    }
  ];

  const recommendations = [
    'Implement hybrid approach combining spectral peaks with neural features',
    'Optimize preprocessing pipeline for noise robustness',
    'Develop adaptive parameter selection based on audio characteristics',
    'Integrate multi-threading for real-time processing capabilities'
  ];

  return (
    <div className="h-full bg-gradient-to-br from-white to-green-50 py-8 px-12">
      <div className="max-w-6xl mx-auto h-full">
        {/* Header */}
        <div className="text-center mb-8 animate-slide-in-up">
          <h1 className="text-5xl font-bold text-presentation-text font-montserrat mb-4">
            Conclusions
          </h1>
          <p className="text-xl text-presentation-text-light">
            Key insights and recommendations for algorithm improvement
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-2 gap-8 h-3/4">
          {/* Key Findings */}
          <div className="space-y-6">
            {conclusions.map((section, index) => {
              const Icon = section.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <Icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold text-presentation-text">{section.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {section.points.map((point, pointIndex) => (
                      <li 
                        key={pointIndex}
                        className="flex items-start space-x-2 text-sm text-presentation-text-light animate-fade-in"
                        style={{ animationDelay: `${index * 0.2 + pointIndex * 0.1}s` }}
                      >
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Recommendations */}
          <div className="bg-white rounded-xl shadow-lg p-6 animate-slide-in-right">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                <Lightbulb className="h-5 w-5 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-presentation-text">Recommendations</h3>
            </div>
            
            <div className="space-y-4">
              {recommendations.map((recommendation, index) => (
                <div 
                  key={index}
                  className="bg-green-50 rounded-lg p-4 animate-scale-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      {index + 1}
                    </div>
                    <p className="text-sm text-green-800 leading-relaxed">
                      {recommendation}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Impact Summary */}
        <div className="mt-8 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="text-center">
            <h3 className="text-xl font-bold text-presentation-text mb-4">Project Impact</h3>
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-2xl font-bold text-blue-600 mb-1">6</div>
                <div className="text-sm text-blue-800">Algorithms Analyzed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600 mb-1">15%</div>
                <div className="text-sm text-green-800">Potential Improvement</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600 mb-1">4</div>
                <div className="text-sm text-purple-800">Implementation Strategies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConclusionsSlide;
