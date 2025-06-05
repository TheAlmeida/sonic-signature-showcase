
import React from 'react';
import { Users, Cpu, Database, Target, TrendingUp, CheckCircle, Lightbulb, MessageCircle, BarChart3 } from 'lucide-react';

const AgendaSlide = () => {
  const agendaItems = [
    { icon: Users, title: 'Internship Context', description: 'Host company, goals, and timeline' },
    { icon: Cpu, title: 'Core Concepts & State of the Art', description: 'Audio fingerprinting fundamentals' },
    { icon: Database, title: 'Analyzed Algorithms', description: 'Mediaprobe, ACRCloud, Audfprint, Dejavu, Olaf, Soundfingerprinting' },
    { icon: Target, title: 'Evaluation Methodology', description: 'Datasets, metrics, and testing scenarios' },
    { icon: TrendingUp, title: 'Experimental Results', description: 'Performance metrics and analysis' },
    { icon: CheckCircle, title: 'Challenges & Solutions', description: 'Difficulties encountered and solutions applied' },
    { icon: Lightbulb, title: 'Future Work', description: 'Directions for continued research' },
    { icon: BarChart3, title: 'Conclusions', description: 'Key insights and improvement proposals' },
  ];

  return (
    <div className="h-full bg-gradient-to-br from-white to-slate-50 py-8 px-12">
      <div className="max-w-6xl mx-auto h-full flex flex-col">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-down">
          <h1 className="text-5xl font-bold text-presentation-text font-montserrat mb-4">
            Presentation Agenda
          </h1>
          <p className="text-xl text-presentation-text-light animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            A comprehensive overview of the audio fingerprinting analysis project
          </p>
        </div>

        {/* Agenda Grid */}
        <div className="flex-1 grid grid-cols-2 gap-8">
          {agendaItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 group animate-fade-in-up"
                style={{ animationDelay: `${0.6 + index * 0.2}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-presentation-primary rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-presentation-text mb-2 group-hover:text-presentation-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-presentation-text-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="text-center mt-8 animate-fade-in" style={{ animationDelay: '2.8s' }}>
          <div className="inline-flex items-center space-x-2 bg-presentation-primary text-white px-6 py-3 rounded-full">
            <span className="text-sm font-medium">Total Duration: ~45 minutes</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgendaSlide;
