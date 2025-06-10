
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
          backgroundSize: 'clamp(25px,4vw,35px) clamp(25px,4vw,35px)'
        }}></div>
      </div>

      {/* Responsive Document Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[8vh] right-[8vw] animate-gentle-float opacity-15">
          <FileText className="h-[clamp(3rem,6vw,5rem)] w-[clamp(3rem,6vw,5rem)] text-blue-500" />
        </div>
        <div className="absolute bottom-[12vh] left-[6vw] animate-gentle-float opacity-12" style={{ animationDelay: '2s' }}>
          <MessageCircle className="h-[clamp(2.5rem,5vw,4rem)] w-[clamp(2.5rem,5vw,4rem)] text-indigo-500" />
        </div>
        <div className="absolute top-1/3 left-[6vw] animate-gentle-float opacity-18" style={{ animationDelay: '4s' }}>
          <Clock className="h-[clamp(2rem,4vw,3rem)] w-[clamp(2rem,4vw,3rem)] text-purple-500" />
        </div>
      </div>

      <div className="relative z-10 w-full h-full py-[clamp(2vh,4vh,4vh)] px-[clamp(2vw,4vw,4vw)]">
        {/* Responsive Header */}
        <div className="text-center mb-[clamp(3vh,5vh,5vh)] animate-slide-in-up">
          <div className="inline-flex items-center space-x-[clamp(0.5vw,1vw,1vw)] bg-blue-100 text-blue-800 px-[clamp(1.5vw,2vw,2vw)] py-[clamp(0.8vh,1vh,1vh)] rounded-full text-[clamp(0.6rem,1vw,0.9rem)] font-medium mb-[clamp(1.5vh,2vh,2vh)] animate-fade-in">
            <FileText className="h-[clamp(0.8rem,1.2vw,1rem)] w-[clamp(0.8rem,1.2vw,1rem)]" />
            <span>Session Overview</span>
          </div>
          <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-bold text-presentation-text font-montserrat mb-[clamp(1.5vh,2vh,2vh)] animate-slide-in-down" style={{ animationDelay: '0.2s' }}>
            Presentation Agenda
          </h1>
          <p className="text-[clamp(0.9rem,2vw,1.3rem)] text-presentation-text-light animate-fade-in" style={{ animationDelay: '0.4s' }}>
            A comprehensive overview of the audio fingerprinting analysis project
          </p>
        </div>

        {/* Responsive Agenda Grid with Smart Spacing */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(1.5vh,2.5vh,2.5vh)] lg:gap-[clamp(2vw,3vw,3vw)] mb-[clamp(3vh,4vh,4vh)]">
          {agendaItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 overflow-hidden group animate-scale-in"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <div className={`h-[clamp(0.3vh,0.4vh,0.4vh)] bg-${item.color}-500 w-full`}></div>
                <div className="p-[clamp(2vw,2.5vw,2.5vw)] lg:p-[clamp(1.5vw,2vw,2vw)]">
                  <div className="flex items-start space-x-[clamp(1.5vw,2vw,2vw)]">
                    <div className={`flex-shrink-0 w-[clamp(2.8rem,5vw,3.5rem)] h-[clamp(2.8rem,5vw,3.5rem)] bg-${item.color}-500/10 rounded-xl flex items-center justify-center border border-${item.color}-200 group-hover:scale-105 transition-transform duration-300`}>
                      <Icon className={`h-[clamp(1.2rem,2.5vw,1.8rem)] w-[clamp(1.2rem,2.5vw,1.8rem)] text-${item.color}-600`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-[clamp(0.8vh,1vh,1vh)]">
                        <h3 className={`text-[clamp(0.9rem,1.6vw,1.1rem)] font-bold text-presentation-text group-hover:text-${item.color}-700 transition-colors duration-300`}>
                          {item.title}
                        </h3>
                        <span className={`text-[clamp(0.5rem,0.8vw,0.65rem)] bg-${item.color}-100 text-${item.color}-800 px-[clamp(0.8vw,1vw,1vw)] py-[clamp(0.4vh,0.5vh,0.5vh)] rounded-full font-medium flex-shrink-0`}>
                          {index + 1}
                        </span>
                      </div>
                      <p className="text-[clamp(0.65rem,1vw,0.85rem)] text-presentation-text-light mb-[clamp(1vh,1.2vh,1.2vh)] leading-relaxed">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-[clamp(0.4vw,0.5vw,0.5vw)] text-[clamp(0.5rem,0.8vw,0.65rem)]">
                        {item.topics.map((topic, topicIndex) => (
                          <span key={topicIndex} className={`bg-${item.color}-50 text-${item.color}-700 px-[clamp(0.8vw,1vw,1vw)] py-[clamp(0.4vh,0.5vh,0.5vh)] rounded-md whitespace-nowrap`}>
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

        {/* Responsive Footer with Safe Bottom Area */}
        <div className="text-center animate-slide-in-up" style={{ animationDelay: '1.2s' }}>
          <div className="inline-flex items-center space-x-[clamp(1.5vw,2vw,2vw)] px-[clamp(3vw,4vw,4vw)] py-[clamp(1.5vh,2vh,2vh)] bg-gradient-to-r from-blue-500/10 to-indigo-500/10 backdrop-blur-sm rounded-full border border-blue-200">
            <Clock className="h-[clamp(1rem,1.8vw,1.3rem)] w-[clamp(1rem,1.8vw,1.3rem)] text-blue-600" />
            <span className="text-[clamp(0.9rem,1.6vw,1.1rem)] font-medium text-blue-800">Presentation Duration: ~45 minutes</span>
            <div className="flex items-center space-x-[clamp(0.4vw,0.5vw,0.5vw)]">
              <div className="w-[clamp(0.4vw,0.5vw,0.5vw)] h-[clamp(0.4vw,0.5vw,0.5vw)] bg-green-500 rounded-full animate-pulse"></div>
              <div className="w-[clamp(0.4vw,0.5vw,0.5vw)] h-[clamp(0.4vw,0.5vw,0.5vw)] bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
              <div className="w-[clamp(0.4vw,0.5vw,0.5vw)] h-[clamp(0.4vw,0.5vw,0.5vw)] bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgendaSlide;
