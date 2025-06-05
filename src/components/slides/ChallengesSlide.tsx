
import React from 'react';
import { AlertTriangle, CheckCircle, Zap, Settings, Database, Clock } from 'lucide-react';

const ChallengesSlide = () => {
  const challenges = [
    {
      icon: Database,
      challenge: 'Dataset Compatibility Issues',
      solution: 'Standardized preprocessing pipeline for consistent audio format handling',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: Clock,
      challenge: 'Performance Optimization',
      solution: 'Multi-threading implementation and algorithm-specific parameter tuning',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: Settings,
      challenge: 'Algorithm Configuration',
      solution: 'Systematic parameter exploration and cross-validation techniques',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: Zap,
      challenge: 'Memory Management',
      solution: 'Efficient data structures and streaming processing for large datasets',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    }
  ];

  return (
    <div className="h-full bg-gradient-to-br from-white to-red-50 py-8 px-12">
      <div className="max-w-6xl mx-auto h-full">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-in-up">
          <h1 className="text-5xl font-bold text-presentation-text font-montserrat mb-4">
            Challenges & Solutions
          </h1>
          <p className="text-xl text-presentation-text-light">
            Key difficulties encountered and implemented solutions
          </p>
        </div>

        {/* Challenges Grid */}
        <div className="space-y-8">
          {challenges.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 animate-slide-in-left hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="grid grid-cols-2 gap-8 items-center">
                  {/* Challenge */}
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 ${item.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <AlertTriangle className={`h-6 w-6 ${item.color}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-presentation-text mb-2">
                        Challenge
                      </h3>
                      <p className="text-presentation-text-light leading-relaxed">
                        {item.challenge}
                      </p>
                    </div>
                  </div>

                  {/* Solution */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-presentation-text mb-2">
                        Solution
                      </h3>
                      <p className="text-presentation-text-light leading-relaxed">
                        {item.solution}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Key Insights */}
        <div className="mt-12 grid grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="bg-blue-50 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Database className="h-6 w-6 text-blue-600" />
            </div>
            <h4 className="font-semibold text-blue-800 mb-2">Data Quality</h4>
            <p className="text-sm text-blue-600">Preprocessing critical for algorithm performance</p>
          </div>
          
          <div className="bg-green-50 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Settings className="h-6 w-6 text-green-600" />
            </div>
            <h4 className="font-semibold text-green-800 mb-2">Configuration</h4>
            <p className="text-sm text-green-600">Parameter tuning essential for optimal results</p>
          </div>
          
          <div className="bg-purple-50 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Zap className="h-6 w-6 text-purple-600" />
            </div>
            <h4 className="font-semibold text-purple-800 mb-2">Optimization</h4>
            <p className="text-sm text-purple-600">Trade-offs between accuracy and efficiency</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengesSlide;
