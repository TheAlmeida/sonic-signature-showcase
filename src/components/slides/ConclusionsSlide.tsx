
import React from 'react';
import { CheckCircle, TrendingUp, Lightbulb, Target, Award, BarChart, Zap, Star } from 'lucide-react';

const ConclusionsSlide = () => {
  const conclusions = [
    {
      icon: TrendingUp,
      title: 'Performance Benchmarking',
      color: 'blue',
      points: [
        'ACRCloud achieved highest precision (98%) and recall (94%) across all test scenarios',
        'Mediaprobe demonstrated optimal balance of accuracy and computational efficiency',
        'Open-source solutions showed significant performance variations under noise conditions',
        'Memory efficiency proved critical for large-scale deployment feasibility'
      ]
    },
    {
      icon: Target,
      title: 'Technical Insights',
      color: 'green',
      points: [
        'Spectral peak-based methods exhibited superior noise resistance characteristics',
        'Neural network approaches showed promising results for complex audio scenarios',
        'Parameter optimization yielded 15-25% performance improvements across algorithms',
        'Trade-offs exist between accuracy and computational efficiency requiring careful balancing'
      ]
    }
  ];

  const recommendations = [
    {
      id: 1,
      text: 'Implement hybrid approach combining spectral peaks with neural feature extraction',
      impact: 'High',
      effort: 'Medium',
      timeline: '6 months'
    },
    {
      id: 2,
      text: 'Optimize preprocessing pipeline for enhanced noise robustness and quality',
      impact: 'Medium',
      effort: 'Low',
      timeline: '3 months'
    },
    {
      id: 3,
      text: 'Develop adaptive parameter selection based on audio content characteristics',
      impact: 'High',
      effort: 'High',
      timeline: '9 months'
    },
    {
      id: 4,
      text: 'Integrate multi-threading architecture for real-time processing capabilities',
      impact: 'Medium',
      effort: 'Medium',
      timeline: '4 months'
    }
  ];

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'High': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <div className="h-full relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Success/Achievement Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 30% 30%, #22c55e 2px, transparent 2px),
            radial-gradient(circle at 70% 70%, #3b82f6 2px, transparent 2px)
          `,
          backgroundSize: '80px 80px, 120px 120px'
        }}></div>
      </div>

      {/* Achievement Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 animate-gentle-float opacity-15">
          <Award className="h-16 w-16 text-green-500" />
        </div>
        <div className="absolute bottom-32 left-16 animate-gentle-float opacity-12" style={{ animationDelay: '2s' }}>
          <Star className="h-14 w-14 text-blue-500" />
        </div>
        <div className="absolute top-1/3 right-12 animate-gentle-float opacity-18" style={{ animationDelay: '4s' }}>
          <BarChart className="h-12 w-12 text-purple-500" />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto h-full py-8 px-12">
        {/* Enhanced Header */}
        <div className="text-center mb-8 animate-slide-in-up">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4 animate-fade-in">
            <Award className="h-4 w-4" />
            <span>Research Outcomes</span>
          </div>
          <h1 className="text-5xl font-bold text-presentation-text font-montserrat mb-4 animate-slide-in-down" style={{ animationDelay: '0.2s' }}>
            Conclusions
          </h1>
          <p className="text-xl text-presentation-text-light animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Key findings and strategic recommendations for algorithm improvement
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-2 gap-8 h-3/4">
          {/* Enhanced Key Findings */}
          <div className="space-y-6">
            {conclusions.map((section, index) => {
              const Icon = section.icon;
              return (
                <div 
                  key={index}
                  className={`bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-${section.color}-100 hover:shadow-2xl transition-all duration-500 animate-slide-in-left`}
                  style={{ animationDelay: `${0.6 + index * 0.2}s` }}
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-br from-${section.color}-500 to-${section.color}-600 rounded-xl flex items-center justify-center mr-4 shadow-lg`}>
                      <Icon className={`h-6 w-6 text-white`} />
                    </div>
                    <h3 className="text-xl font-bold text-presentation-text">{section.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {section.points.map((point, pointIndex) => (
                      <li 
                        key={pointIndex}
                        className={`flex items-start space-x-3 text-sm text-presentation-text-light animate-fade-in bg-${section.color}-50 p-3 rounded-lg border border-${section.color}-100`}
                        style={{ animationDelay: `${0.8 + index * 0.2 + pointIndex * 0.1}s` }}
                      >
                        <CheckCircle className={`h-5 w-5 text-${section.color}-500 mt-0.5 flex-shrink-0`} />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Enhanced Recommendations */}
          <div className="space-y-6">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-purple-100 h-full hover:shadow-2xl transition-all duration-500 animate-slide-in-right" style={{ animationDelay: '0.8s' }}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-presentation-text">Strategic Recommendations</h3>
              </div>
              
              <div className="space-y-4 mb-8">
                {recommendations.map((recommendation, index) => (
                  <div 
                    key={index}
                    className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-5 shadow-sm border border-purple-100 animate-scale-in"
                    style={{ animationDelay: `${1 + index * 0.15}s` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-500 text-white rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0 shadow-md">
                        {recommendation.id}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-presentation-text font-medium leading-relaxed mb-3">
                          {recommendation.text}
                        </p>
                        <div className="grid grid-cols-3 gap-2">
                          <div className="flex items-center space-x-1">
                            <Zap className="h-3 w-3 text-blue-500" />
                            <span className="text-xs text-blue-700">
                              <span className="font-medium">Impact:</span> {recommendation.impact}
                            </span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Target className="h-3 w-3 text-orange-500" />
                            <span className="text-xs text-orange-700">
                              <span className="font-medium">Effort:</span> {recommendation.effort}
                            </span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <CheckCircle className="h-3 w-3 text-green-500" />
                            <span className="text-xs text-green-700">
                              <span className="font-medium">Time:</span> {recommendation.timeline}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Project Impact Summary */}
              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-5 border border-blue-100 animate-fade-in" style={{ animationDelay: '1.6s' }}>
                <h4 className="text-lg font-bold text-presentation-text mb-4 flex items-center">
                  <Award className="h-5 w-5 text-blue-600 mr-2" />
                  Project Achievement Summary
                </h4>
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div className="bg-white/70 rounded-lg p-3 shadow-sm">
                    <div className="text-3xl font-bold text-blue-600 mb-1">6</div>
                    <div className="text-sm text-blue-800 font-medium">Algorithms Analyzed</div>
                  </div>
                  <div className="bg-white/70 rounded-lg p-3 shadow-sm">
                    <div className="text-3xl font-bold text-green-600 mb-1">15%</div>
                    <div className="text-sm text-green-800 font-medium">Performance Gain</div>
                  </div>
                  <div className="bg-white/70 rounded-lg p-3 shadow-sm">
                    <div className="text-3xl font-bold text-purple-600 mb-1">4</div>
                    <div className="text-sm text-purple-800 font-medium">Implementation Plans</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConclusionsSlide;
