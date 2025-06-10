
import React from 'react';
import { AlertTriangle, CheckCircle, Wrench, Target, Shield, Code, BookOpen, FileText, Users } from 'lucide-react';

const ChallengesSlide = () => {
  const challenges = [
    {
      icon: Wrench,
      title: 'Algorithm Installation',
      description: 'Several audio fingerprinting algorithms were difficult to install due to missing documentation and dependency issues. This required troubleshooting, code adaptation, and strong technical autonomy.',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      impact: 'High'
    },
    {
      icon: BookOpen,
      title: 'In-depth Understanding',
      description: 'Beyond running the algorithms, it was necessary to deeply understand how they processed audio and performed matching. This involved studying scientific literature and source code.',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      impact: 'High'
    },
    {
      icon: Target,
      title: 'Formulating Recommendations',
      description: 'Proposing improvements to Mediaprobe\'s internal system was limited by the lack of access to its source code, making it hard to assess the feasibility of suggestions.',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      impact: 'Medium'
    },
    {
      icon: FileText,
      title: 'Report Writing',
      description: 'Summarising technical findings clearly and coherently was demanding, requiring precision, structure, and communication skills.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      impact: 'Medium'
    }
  ];

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'High': return 'bg-red-100 text-red-800';
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
            Summary of difficulties encountered during the internship and solutions implemented
          </p>
        </div>

        {/* Enhanced Challenges Grid */}
        <div className="grid grid-cols-2 gap-8 mb-8">
          {challenges.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className={`bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border ${item.borderColor} hover:shadow-2xl transition-all duration-500 animate-slide-in-left`}
                style={{ animationDelay: `${0.6 + index * 0.2}s` }}
              >
                <div className="flex items-start space-x-6 mb-6">
                  <div className={`w-16 h-16 ${item.bgColor} ${item.borderColor} border-2 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <Icon className={`h-8 w-8 ${item.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <h3 className="text-xl font-bold text-presentation-text">{item.title}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${getImpactColor(item.impact)}`}>
                        {item.impact} Impact
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-presentation-text-light leading-relaxed">
                  {item.description}
                </p>
                
                {/* Solution Status */}
                <div className="mt-6 p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm font-medium text-green-800">
                      Successfully addressed through strategic approach and persistence
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200 animate-slide-in-up" style={{ animationDelay: '1.4s' }}>
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mr-4 shadow-lg">
              <Users className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-presentation-text">Key Learning Outcomes</h3>
          </div>
          
          <div className="grid grid-cols-3 gap-6 text-center">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-blue-200 hover:shadow-lg transition-all duration-300">
              <div className="text-3xl font-bold text-blue-600 mb-2">Technical</div>
              <div className="text-sm text-blue-800 font-medium">Autonomy</div>
              <div className="text-xs text-blue-600 mt-1">Problem-solving skills</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-green-200 hover:shadow-lg transition-all duration-300">
              <div className="text-3xl font-bold text-green-600 mb-2">Research</div>
              <div className="text-sm text-green-800 font-medium">Methodology</div>
              <div className="text-xs text-green-600 mt-1">Deep analysis</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-purple-200 hover:shadow-lg transition-all duration-300">
              <div className="text-3xl font-bold text-purple-600 mb-2">Communication</div>
              <div className="text-sm text-purple-800 font-medium">Skills</div>
              <div className="text-xs text-purple-600 mt-1">Technical writing</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengesSlide;
