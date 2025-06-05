
import React from 'react';
import { Lightbulb, ArrowRight, Cpu, Database, Zap, Users, Brain, Rocket, Target, Beaker } from 'lucide-react';

const FutureWorkSlide = () => {
  const futureDirections = [
    {
      icon: Brain,
      title: 'Deep Learning Integration',
      description: 'Explore neural network architectures for improved feature extraction and matching accuracy',
      timeline: 'Short-term (6 months)',
      priority: 'High',
      color: 'bg-blue-500',
      accentColor: 'blue',
      impact: 'Revolutionary',
      feasibility: 'High'
    },
    {
      icon: Database,
      title: 'Large-Scale Database Testing',
      description: 'Evaluate performance with million-track databases and real-time streaming scenarios',
      timeline: 'Medium-term (1 year)',
      priority: 'High',
      color: 'bg-green-500',
      accentColor: 'green',
      impact: 'Significant',
      feasibility: 'Medium'
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Optimize algorithms for live audio stream fingerprinting with minimal latency',
      timeline: 'Medium-term (8 months)',
      priority: 'Medium',
      color: 'bg-orange-500',
      accentColor: 'orange',
      impact: 'High',
      feasibility: 'High'
    },
    {
      icon: Users,
      title: 'Multi-modal Approaches',
      description: 'Combine audio fingerprinting with video and metadata analysis for enhanced accuracy',
      timeline: 'Long-term (2 years)',
      priority: 'Medium',
      color: 'bg-purple-500',
      accentColor: 'purple',
      impact: 'Transformative',
      feasibility: 'Low'
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'Revolutionary': return 'bg-purple-100 text-purple-800';
      case 'Transformative': return 'bg-indigo-100 text-indigo-800';
      case 'Significant': return 'bg-green-100 text-green-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <div className="h-full relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Future/Innovation Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, #6366f1 2px, transparent 2px),
            radial-gradient(circle at 75% 75%, #8b5cf6 2px, transparent 2px)
          `,
          backgroundSize: '100px 100px, 150px 150px'
        }}></div>
      </div>

      {/* Innovation Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 animate-gentle-float opacity-15">
          <Rocket className="h-16 w-16 text-indigo-500" />
        </div>
        <div className="absolute bottom-32 left-16 animate-gentle-float opacity-12" style={{ animationDelay: '2s' }}>
          <Beaker className="h-14 w-14 text-purple-500" />
        </div>
        <div className="absolute top-1/3 left-16 animate-gentle-float opacity-18" style={{ animationDelay: '4s' }}>
          <Target className="h-12 w-12 text-blue-500" />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto h-full py-8 px-12">
        {/* Enhanced Header */}
        <div className="text-center mb-8 animate-slide-in-up">
          <div className="inline-flex items-center space-x-2 bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium mb-4 animate-fade-in">
            <Rocket className="h-4 w-4" />
            <span>Innovation Roadmap</span>
          </div>
          <h1 className="text-5xl font-bold text-presentation-text font-montserrat mb-4 animate-slide-in-down" style={{ animationDelay: '0.2s' }}>
            Future Work
          </h1>
          <p className="text-xl text-presentation-text-light animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Strategic directions for continued research and technological advancement
          </p>
        </div>

        {/* Enhanced Future Directions */}
        <div className="grid grid-cols-2 gap-8 h-3/4 mb-8">
          {futureDirections.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100 animate-scale-in relative overflow-hidden"
                style={{ animationDelay: `${0.6 + index * 0.2}s` }}
              >
                {/* Card Accent */}
                <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-${item.accentColor}-400 to-${item.accentColor}-600`}></div>
                
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mr-4 shadow-lg`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-presentation-text">
                        {item.title}
                      </h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(item.priority)}`}>
                          {item.priority} Priority
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(item.impact)}`}>
                          {item.impact}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-presentation-text-light mb-6 leading-relaxed">
                  {item.description}
                </p>

                {/* Research Metrics */}
                <div className={`bg-${item.accentColor}-50 rounded-lg p-4 mb-4 border border-${item.accentColor}-100`}>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-gray-600">Timeline:</span>
                      <div className={`font-bold text-${item.accentColor}-700 mt-1`}>{item.timeline}</div>
                    </div>
                    <div>
                      <span className="font-medium text-gray-600">Feasibility:</span>
                      <div className={`font-bold text-${item.accentColor}-700 mt-1`}>{item.feasibility}</div>
                    </div>
                  </div>
                </div>

                {/* Action Indicator */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 ${item.color} rounded-full animate-pulse`}></div>
                    <span className="text-sm font-medium text-presentation-text">
                      Research Phase
                    </span>
                  </div>
                  <ArrowRight className="h-5 w-5 text-presentation-secondary" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Research Goals */}
        <div className="bg-gradient-to-r from-indigo-50 via-blue-50 to-purple-50 rounded-2xl p-8 border border-indigo-200 animate-slide-in-up" style={{ animationDelay: '1.4s' }}>
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mr-4 shadow-lg">
              <Lightbulb className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-presentation-text">Strategic Research Targets</h3>
          </div>
          
          <div className="grid grid-cols-4 gap-6 text-center">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-blue-200 hover:shadow-lg transition-all duration-300">
              <div className="text-3xl font-bold text-blue-600 mb-2">95%+</div>
              <div className="text-sm text-blue-800 font-medium">Target Accuracy</div>
              <div className="text-xs text-blue-600 mt-1">Noise robustness</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-green-200 hover:shadow-lg transition-all duration-300">
              <div className="text-3xl font-bold text-green-600 mb-2">&lt;50ms</div>
              <div className="text-sm text-green-800 font-medium">Processing Time</div>
              <div className="text-xs text-green-600 mt-1">Real-time capable</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-purple-200 hover:shadow-lg transition-all duration-300">
              <div className="text-3xl font-bold text-purple-600 mb-2">10M+</div>
              <div className="text-sm text-purple-800 font-medium">Database Scale</div>
              <div className="text-xs text-purple-600 mt-1">Enterprise ready</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-orange-200 hover:shadow-lg transition-all duration-300">
              <div className="text-3xl font-bold text-orange-600 mb-2">5x</div>
              <div className="text-sm text-orange-800 font-medium">Efficiency Gain</div>
              <div className="text-xs text-orange-600 mt-1">Resource optimization</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureWorkSlide;
