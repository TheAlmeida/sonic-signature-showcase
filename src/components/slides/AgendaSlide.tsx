
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
      {/* Responsive Document Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, #3b82f6 1px, transparent 1px),
            linear-gradient(180deg, #3b82f6 1px, transparent 1px)
          `,
          backgroundSize: 'clamp(30px,5vw,40px) clamp(30px,5vw,40px)'
        }}></div>
      </div>

      {/* Responsive Document Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10vh] right-[10vw] animate-gentle-float opacity-15">
          <FileText className="h-[clamp(4rem,8vw,6rem)] w-[clamp(4rem,8vw,6rem)] text-blue-500" />
        </div>
        <div className="absolute bottom-[15vh] left-[8vw] animate-gentle-float opacity-12" style={{ animationDelay: '2s' }}>
          <MessageCircle className="h-[clamp(3rem,6vw,4.5rem)] w-[clamp(3rem,6vw,4.5rem)] text-indigo-500" />
        </div>
        <div className="absolute top-1/3 left-[8vw] animate-gentle-float opacity-18" style={{ animationDelay: '4s' }}>
          <Clock className="h-[clamp(2.5rem,5vw,3.5rem)] w-[clamp(2.5rem,5vw,3.5rem)] text-purple-500" />
        </div>
      </div>

      <div className="relative z-10 max-w-[90vw] mx-auto h-full py-[4vh] px-[6vw]">
        {/* Responsive Header */}
        <div className="text-center mb-[5vh] animate-slide-in-up">
          <div className="inline-flex items-center space-x-[1vw] bg-blue-100 text-blue-800 px-[2vw] py-[1vh] rounded-full text-[clamp(0.75rem,1.2vw,1rem)] font-medium mb-[2vh] animate-fade-in">
            <FileText className="h-[clamp(1rem,1.5vw,1.25rem)] w-[clamp(1rem,1.5vw,1.25rem)]" />
            <span>Session Overview</span>
          </div>
          <h1 className="text-[clamp(3rem,8vw,5rem)] font-bold text-presentation-text font-montserrat mb-[2vh] animate-slide-in-down" style={{ animationDelay: '0.2s' }}>
            Presentation Agenda
          </h1>
          <p className="text-[clamp(1rem,2.5vw,1.5rem)] text-presentation-text-light animate-fade-in" style={{ animationDelay: '0.4s' }}>
            A comprehensive overview of the audio fingerprinting analysis project
          </p>
        </div>

        {/* Responsive Agenda Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[2vh] lg:gap-[3vw] mb-[4vh]">
          {agendaItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 overflow-hidden group animate-scale-in"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <div className={`h-[0.5vh] bg-${item.color}-500 w-full`}></div>
                <div className="p-[3vw] lg:p-[2vw]">
                  <div className="flex items-start space-x-[2vw]">
                    <div className={`flex-shrink-0 w-[clamp(3.5rem,6vw,4rem)] h-[clamp(3.5rem,6vw,4rem)] bg-${item.color}-500/10 rounded-xl flex items-center justify-center border border-${item.color}-200 group-hover:scale-105 transition-transform duration-300`}>
                      <Icon className={`h-[clamp(1.5rem,3vw,2rem)] w-[clamp(1.5rem,3vw,2rem)] text-${item.color}-600`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-[1vh]">
                        <h3 className={`text-[clamp(1rem,2vw,1.25rem)] font-bold text-presentation-text group-hover:text-${item.color}-700 transition-colors duration-300`}>
                          {item.title}
                        </h3>
                        <span className={`text-[clamp(0.6rem,1vw,0.75rem)] bg-${item.color}-100 text-${item.color}-800 px-[1vw] py-[0.5vh] rounded-full font-medium flex-shrink-0`}>
                          {index + 1}
                        </span>
                      </div>
                      <p className="text-[clamp(0.75rem,1.2vw,1rem)] text-presentation-text-light mb-[1.5vh] leading-relaxed">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-[0.5vw] text-[clamp(0.6rem,1vw,0.75rem)]">
                        {item.topics.map((topic, topicIndex) => (
                          <span key={topicIndex} className={`bg-${item.color}-50 text-${item.color}-700 px-[1vw] py-[0.5vh] rounded-md whitespace-nowrap`}>
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

        {/* Responsive Footer */}
        <div className="text-center animate-slide-in-up" style={{ animationDelay: '1.2s' }}>
          <div className="inline-flex items-center space-x-[2vw] px-[4vw] py-[2vh] bg-gradient-to-r from-blue-500/10 to-indigo-500/10 backdrop-blur-sm rounded-full border border-blue-200">
            <Clock className="h-[clamp(1.25rem,2vw,1.5rem)] w-[clamp(1.25rem,2vw,1.5rem)] text-blue-600" />
            <span className="text-[clamp(1rem,2vw,1.25rem)] font-medium text-blue-800">Presentation Duration: ~45 minutes</span>
            <div className="flex items-center space-x-[0.5vw]">
              <div className="w-[0.5vw] h-[0.5vw] bg-green-500 rounded-full animate-pulse"></div>
              <div className="w-[0.5vw] h-[0.5vw] bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
              <div className="w-[0.5vw] h-[0.5vw] bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgendaSlide;
