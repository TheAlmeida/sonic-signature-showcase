
import React from 'react';
import { Users, Cpu, Database, Target, TrendingUp, CheckCircle, Lightbulb, MessageCircle, BarChart3, FileText, Clock } from 'lucide-react';

const AgendaSlide = () => {
  const agendaItems = [
    { 
      icon: Users, 
      title: 'Internship Context', 
      description: 'Host company, goals, and project timeline',
      color: 'blue',
      topics: ['Company background', 'Project objectives', 'Timeline & scope']
    },
    { 
      icon: Cpu, 
      title: 'Core Concepts & State of the Art', 
      description: 'Audio fingerprinting fundamentals',
      color: 'indigo',
      topics: ['Key algorithms', 'Feature extraction', 'Pattern matching']
    },
    { 
      icon: Database, 
      title: 'Analyzed Algorithms', 
      description: 'Six fingerprinting implementations compared',
      color: 'purple',
      topics: ['Commercial solutions', 'Open-source libraries', 'Technical approaches']
    },
    { 
      icon: Target, 
      title: 'Evaluation Methodology', 
      description: 'Testing framework and procedures',
      color: 'green',
      topics: ['Datasets', 'Metrics', 'Testing process']
    },
    { 
      icon: TrendingUp, 
      title: 'Experimental Results', 
      description: 'Performance metrics and analysis',
      color: 'yellow',
      topics: ['Precision & recall', 'Speed benchmarks', 'Memory usage']
    },
    { 
      icon: CheckCircle, 
      title: 'Challenges & Solutions', 
      description: 'Technical obstacles encountered',
      color: 'red',
      topics: ['Configuration issues', 'Data compatibility', 'Optimization needs']
    },
    { 
      icon: Lightbulb, 
      title: 'Future Work', 
      description: 'Research direction recommendations',
      color: 'orange',
      topics: ['Deep learning', 'Scaling strategies', 'Real-time processing']
    },
    { 
      icon: BarChart3, 
      title: 'Conclusions', 
      description: 'Key insights and proposals',
      color: 'emerald',
      topics: ['Performance summary', 'Best practices', 'Improvement plan']
    },
  ];

  return (
    <div className="h-full relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Document Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, #3b82f6 1px, transparent 1px),
            linear-gradient(180deg, #3b82f6 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Document Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 animate-gentle-float opacity-15">
          <FileText className="h-16 w-16 text-blue-500" />
        </div>
        <div className="absolute bottom-32 left-16 animate-gentle-float opacity-12" style={{ animationDelay: '2s' }}>
          <MessageCircle className="h-14 w-14 text-indigo-500" />
        </div>
        <div className="absolute top-1/3 left-16 animate-gentle-float opacity-18" style={{ animationDelay: '4s' }}>
          <Clock className="h-12 w-12 text-purple-500" />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto h-full py-8 px-12">
        {/* Enhanced Header */}
        <div className="text-center mb-10 animate-slide-in-up">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4 animate-fade-in">
            <FileText className="h-4 w-4" />
            <span>Session Overview</span>
          </div>
          <h1 className="text-5xl font-bold text-presentation-text font-montserrat mb-4 animate-slide-in-down" style={{ animationDelay: '0.2s' }}>
            Presentation Agenda
          </h1>
          <p className="text-xl text-presentation-text-light animate-fade-in" style={{ animationDelay: '0.4s' }}>
            A comprehensive overview of the audio fingerprinting analysis project
          </p>
        </div>

        {/* Enhanced Agenda Grid */}
        <div className="grid grid-cols-2 gap-y-6 gap-x-8 mb-8">
          {agendaItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 overflow-hidden group animate-scale-in"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <div className={`h-1 bg-${item.color}-500 w-full`}></div>
                <div className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-14 h-14 bg-${item.color}-500/10 rounded-xl flex items-center justify-center border border-${item.color}-200 group-hover:scale-105 transition-transform duration-300`}>
                      <Icon className={`h-6 w-6 text-${item.color}-600`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className={`text-lg font-bold text-presentation-text mb-1 group-hover:text-${item.color}-700 transition-colors duration-300`}>
                          {item.title}
                        </h3>
                        <span className={`text-xs bg-${item.color}-100 text-${item.color}-800 px-2 py-1 rounded-full font-medium`}>
                          {index + 1}
                        </span>
                      </div>
                      <p className="text-sm text-presentation-text-light mb-3">
                        {item.description}
                      </p>
                      <div className={`flex flex-wrap gap-2 text-xs`}>
                        {item.topics.map((topic, topicIndex) => (
                          <span key={topicIndex} className={`bg-${item.color}-50 text-${item.color}-700 px-2 py-1 rounded-md`}>
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Footer */}
        <div className="text-center animate-slide-in-up" style={{ animationDelay: '1.2s' }}>
          <div className="inline-flex items-center space-x-4 px-8 py-4 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 backdrop-blur-sm rounded-full border border-blue-200">
            <Clock className="h-5 w-5 text-blue-600" />
            <span className="text-lg font-medium text-blue-800">Presentation Duration: ~45 minutes</span>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgendaSlide;
