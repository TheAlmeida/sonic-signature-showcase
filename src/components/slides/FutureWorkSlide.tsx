
import React from 'react';
import { Lightbulb, ArrowRight, Cpu, Database, Zap, Users } from 'lucide-react';

const FutureWorkSlide = () => {
  const futureDirections = [
    {
      icon: Cpu,
      title: 'Deep Learning Integration',
      description: 'Explore neural network architectures for improved feature extraction and matching',
      timeline: 'Short-term (6 months)',
      priority: 'High',
      color: 'bg-blue-500'
    },
    {
      icon: Database,
      title: 'Large-Scale Database Testing',
      description: 'Evaluate performance with million-track databases and streaming scenarios',
      timeline: 'Medium-term (1 year)',
      priority: 'High',
      color: 'bg-green-500'
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Optimize algorithms for live audio stream fingerprinting applications',
      timeline: 'Medium-term (8 months)',
      priority: 'Medium',
      color: 'bg-orange-500'
    },
    {
      icon: Users,
      title: 'Multi-modal Approaches',
      description: 'Combine audio fingerprinting with video and metadata analysis',
      timeline: 'Long-term (2 years)',
      priority: 'Medium',
      color: 'bg-purple-500'
    }
  ];

  return (
    <div className="h-full bg-gradient-to-br from-white to-indigo-50 py-8 px-12">
      <div className="max-w-6xl mx-auto h-full">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-in-up">
          <h1 className="text-5xl font-bold text-presentation-text font-montserrat mb-4">
            Future Work
          </h1>
          <p className="text-xl text-presentation-text-light">
            Directions for continued research and development
          </p>
        </div>

        {/* Future Directions */}
        <div className="grid grid-cols-2 gap-8 h-3/4">
          {futureDirections.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Header */}
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center mr-4`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-presentation-text">
                      {item.title}
                    </h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        item.priority === 'High' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {item.priority} Priority
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-presentation-text-light mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Timeline */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 ${item.color} rounded-full`}></div>
                    <span className="text-sm font-medium text-presentation-text">
                      {item.timeline}
                    </span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-presentation-secondary" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Research Goals */}
        <div className="mt-8 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-6 animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="flex items-center mb-4">
            <Lightbulb className="h-6 w-6 text-indigo-600 mr-3" />
            <h3 className="text-lg font-bold text-presentation-text">Key Research Goals</h3>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-indigo-600 mb-1">95%+</div>
              <div className="text-sm text-indigo-800">Target Accuracy</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-indigo-600 mb-1">&lt;100ms</div>
              <div className="text-sm text-indigo-800">Processing Time</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-indigo-600 mb-1">10M+</div>
              <div className="text-sm text-indigo-800">Database Scale</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureWorkSlide;
