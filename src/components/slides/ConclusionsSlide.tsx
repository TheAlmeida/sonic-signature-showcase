
import React from 'react';
import { CheckCircle, TrendingUp, Lightbulb, Target, Award, BarChart, Zap, Star } from 'lucide-react';

const ConclusionsSlide = () => {
  const keyFindings = [
    'SoundFingerprinting excelled with short and degraded queries',
    'Olaf stood out for speed and computational efficiency',
    'Audfprint performed best under noisy conditions and acoustic re-recording',
    'Dejavu showed limitations in scalability and robustness',
    'Mediaprobe\'s system performed competitively in memory usage and temporal segmentation but struggled with recall in adverse scenarios',
    'Realistic tests using phone-recorded ads confirmed performance drops under challenging conditions'
  ];

  const recommendations = [
    {
      id: 1,
      text: 'Implement a temporal voting mechanism (as in Audfprint and Olaf) to improve recall under noisy conditions',
      impact: 'High',
      effort: 'Medium',
      timeline: '6 months'
    },
    {
      id: 2,
      text: 'Revise the fingerprint encoding strategy, adopting robust landmark structures to improve resilience to audio variation',
      impact: 'High',
      effort: 'High',
      timeline: '9 months'
    },
    {
      id: 3,
      text: 'Explore direct-access indexing structures (e.g. LMDB, as used in Olaf) to reduce matching latency in time-sensitive environments',
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
            Key findings and strategic recommendations based on external comparison
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-2 gap-8 h-3/4">
          {/* Key Findings */}
          <div className="space-y-6">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-blue-100 hover:shadow-2xl transition-all duration-500 animate-slide-in-left" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-presentation-text">Key Findings</h3>
              </div>
              <ul className="space-y-3">
                {keyFindings.map((finding, index) => (
                  <li 
                    key={index}
                    className="flex items-start space-x-3 text-sm text-presentation-text-light animate-fade-in bg-blue-50 p-3 rounded-lg border border-blue-100"
                    style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                  >
                    <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">{finding}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Recommendations */}
          <div className="space-y-6">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-purple-100 h-full hover:shadow-2xl transition-all duration-500 animate-slide-in-right" style={{ animationDelay: '0.8s' }}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-presentation-text">Main Recommendations</h3>
              </div>
              
              <p className="text-sm text-gray-600 mb-6 italic">
                Based on external comparison, without access to Mediaprobe's source code
              </p>
              
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
                    <div className="text-3xl font-bold text-green-600 mb-1">3</div>
                    <div className="text-sm text-green-800 font-medium">Key Recommendations</div>
                  </div>
                  <div className="bg-white/70 rounded-lg p-3 shadow-sm">
                    <div className="text-3xl font-bold text-purple-600 mb-1">182</div>
                    <div className="text-sm text-purple-800 font-medium">Test Files</div>
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
