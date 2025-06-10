
import React from 'react';
import { AlertTriangle, CheckCircle, Zap, Settings, Database, Clock, Wrench, Target, Shield } from 'lucide-react';

const ChallengesSlide = () => {
  const challenges = [
    {
      icon: Database,
      challenge: 'Dataset Compatibility Issues',
      solution: 'Developed standardized preprocessing pipeline for consistent audio format handling across all algorithms',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      impact: 'Critical',
      effort: 'High'
    },
    {
      icon: Clock,
      challenge: 'Performance Optimization',
      solution: 'Implemented multi-threading and algorithm-specific parameter tuning for optimal performance',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      impact: 'High',
      effort: 'Medium'
    },
    {
      icon: Settings,
      challenge: 'Algorithm Configuration',
      solution: 'Systematic parameter exploration using grid search and cross-validation techniques',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      impact: 'Medium',
      effort: 'Medium'
    },
    {
      icon: Zap,
      challenge: 'Memory Management',
      solution: 'Efficient data structures and streaming processing implementation for large datasets',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      impact: 'Medium',
      effort: 'Low'
    }
  ];

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'Critical': return 'bg-red-100 text-red-800';
      case 'High': return 'bg-orange-100 text-orange-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <div className="h-full relative overflow-hidden bg-gradient-to-br from-red-50 via-white to-orange-50">
      {/* Problem-Solution Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(45deg, #ef4444 1px, transparent 1px),
            linear-gradient(-45deg, #22c55e 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      {/* Engineering Tools Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 animate-gentle-float opacity-15">
          <Wrench className="h-16 w-16 text-red-500" />
        </div>
        <div className="absolute bottom-32 left-16 animate-gentle-float opacity-12" style={{ animationDelay: '2s' }}>
          <Target className="h-14 w-14 text-green-500" />
        </div>
        <div className="absolute top-1/3 right-12 animate-gentle-float opacity-18" style={{ animationDelay: '4s' }}>
          <Shield className="h-12 w-12 text-blue-500" />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto h-full py-8 px-12">
        {/* Enhanced Header */}
        <div className="text-center mb-8 animate-slide-in-up">
          <div className="inline-flex items-center space-x-2 bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-4 animate-fade-in">
            <AlertTriangle className="h-4 w-4" />
            <span>Problem Solving</span>
          </div>
          <h1 className="text-5xl font-bold text-presentation-text font-montserrat mb-4 animate-slide-in-down" style={{ animationDelay: '0.2s' }}>
            Challenges & Solutions
          </h1>
          <p className="text-xl text-presentation-text-light animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Engineering obstacles encountered and innovative solutions implemented
          </p>
        </div>

        {/* Enhanced Challenges Grid */}
        <div className="space-y-6 mb-8">
          {challenges.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className={`bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border ${item.borderColor} hover:shadow-2xl transition-all duration-500 animate-slide-in-left`}
                style={{ animationDelay: `${0.6 + index * 0.2}s` }}
              >
                <div className="grid grid-cols-2 gap-8 items-center">
                  {/* Challenge Side */}
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className={`w-16 h-16 ${item.bgColor} ${item.borderColor} border-2 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                        <AlertTriangle className={`h-8 w-8 ${item.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-xl font-bold text-presentation-text">Challenge</h3>
                          <span className={`text-xs px-2 py-1 rounded-full font-medium ${getImpactColor(item.impact)}`}>
                            {item.impact} Impact
                          </span>
                        </div>
                        <p className="text-presentation-text-light leading-relaxed">
                          {item.challenge}
                        </p>
                      </div>
                    </div>
                    
                    {/* Challenge Metrics */}
                    <div className={`p-3 ${item.bgColor} rounded-lg border ${item.borderColor}`}>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-medium text-gray-600">Complexity:</span>
                          <span className={`ml-2 font-bold ${item.color}`}>{item.effort}</span>
                        </div>
                        <div>
                          <span className="font-medium text-gray-600">Priority:</span>
                          <span className={`ml-2 font-bold ${item.color}`}>{item.impact}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Solution Side */}
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-green-50 border-2 border-green-200 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <CheckCircle className="h-8 w-8 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-presentation-text mb-2">
                          Solution Implemented
                        </h3>
                        <p className="text-presentation-text-light leading-relaxed">
                          {item.solution}
                        </p>
                      </div>
                    </div>
                    
                    {/* Solution Outcome */}
                    <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm font-medium text-green-800">
                          Successfully resolved with measurable improvement
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Key Insights */}
        <div className="grid grid-cols-3 gap-6 animate-slide-in-up" style={{ animationDelay: '1.4s' }}>
          <div className="bg-blue-500/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-blue-200 hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Database className="h-8 w-8 text-white" />
            </div>
            <h4 className="font-bold text-blue-800 mb-2 text-lg">Data Quality</h4>
            <p className="text-sm text-blue-600 leading-relaxed">
              Preprocessing pipeline quality directly impacts all algorithm performance metrics
            </p>
            <div className="mt-3 text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
              15% improvement achieved
            </div>
          </div>
          
          <div className="bg-green-500/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-green-200 hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Settings className="h-8 w-8 text-white" />
            </div>
            <h4 className="font-bold text-green-800 mb-2 text-lg">Configuration</h4>
            <p className="text-sm text-green-600 leading-relaxed">
              Systematic parameter tuning essential for optimal algorithm performance
            </p>
            <div className="mt-3 text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
              25% optimization gain
            </div>
          </div>
          
          <div className="bg-purple-500/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-purple-200 hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h4 className="font-bold text-purple-800 mb-2 text-lg">Optimization</h4>
            <p className="text-sm text-purple-600 leading-relaxed">
              Critical trade-offs between accuracy and computational efficiency identified
            </p>
            <div className="mt-3 text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
              30% efficiency boost
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengesSlide;
