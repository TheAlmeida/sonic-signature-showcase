
import React from 'react';
import { Building2, Target, Calendar, Users, Briefcase, MapPin, Globe, Award, Code } from 'lucide-react';

const ContextSlide = () => {
  return (
    <div className="h-full relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Corporate Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, #6366f1 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Building/Office Silhouette */}
      <div className="absolute bottom-0 left-0 right-0 h-32 opacity-10">
        <svg viewBox="0 0 1200 200" className="w-full h-full">
          <rect x="100" y="50" width="80" height="150" fill="#3b82f6" />
          <rect x="200" y="30" width="100" height="170" fill="#6366f1" />
          <rect x="320" y="70" width="90" height="130" fill="#3b82f6" />
          <rect x="430" y="40" width="120" height="160" fill="#6366f1" />
          <rect x="570" y="60" width="85" height="140" fill="#3b82f6" />
          <rect x="680" y="20" width="110" height="180" fill="#6366f1" />
          <rect x="810" y="80" width="75" height="120" fill="#3b82f6" />
          <rect x="900" y="45" width="95" height="155" fill="#6366f1" />
          <rect x="1020" y="65" width="80" height="135" fill="#3b82f6" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto h-full py-8 px-12">
        {/* Enhanced Header */}
        <div className="text-center mb-12 animate-slide-in-up">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4 animate-fade-in">
            <Building2 className="h-4 w-4" />
            <span>Professional Context</span>
          </div>
          <h1 className="text-5xl font-bold text-presentation-text font-montserrat mb-4 animate-slide-in-down" style={{ animationDelay: '0.2s' }}>
            Internship Context
          </h1>
          <p className="text-xl text-presentation-text-light animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Overview of the host company and internship framework
          </p>
        </div>

        <div className="grid grid-cols-2 gap-12 h-3/4">
          {/* Enhanced Host Company Card */}
          <div className="animate-slide-in-left" style={{ animationDelay: '0.6s' }}>
            <div className="bg-white rounded-2xl shadow-2xl p-8 h-full border border-blue-100 hover:shadow-3xl transition-all duration-500 relative overflow-hidden">
              {/* Card Header Background */}
              <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-10 rounded-t-2xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                    <Building2 className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-presentation-text">Mediaprobe</h2>
                    <p className="text-blue-600 font-medium">Audio Technology Company</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
                    <h3 className="text-lg font-semibold text-presentation-text mb-3 flex items-center">
                      <Globe className="h-5 w-5 text-blue-600 mr-2" />
                      Company Overview
                    </h3>
                    <p className="text-presentation-text-light leading-relaxed">
                      Leading Portuguese technology company specializing in audio content recognition, 
                      digital media monitoring, and AI-powered audio analysis solutions.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-4 animate-slide-in-up" style={{ animationDelay: '1s' }}>
                    <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                      <MapPin className="h-5 w-5 text-blue-600" />
                      <span className="text-presentation-text-light font-medium">Porto, Portugal</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-indigo-50 rounded-lg">
                      <Code className="h-5 w-5 text-indigo-600" />
                      <span className="text-presentation-text-light font-medium">Audio AI & Recognition Technology</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 animate-scale-in" style={{ animationDelay: '1.2s' }}>
                    <h4 className="font-semibold text-presentation-text mb-3 flex items-center">
                      <Award className="h-4 w-4 text-blue-600 mr-2" />
                      Core Technologies
                    </h4>
                    <div className="grid grid-cols-2 gap-2 text-sm text-presentation-text-light">
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>Audio Fingerprinting</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                        <span>Real-time Processing</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>Media Monitoring</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                        <span>Digital Rights Management</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Internship Details Card */}
          <div className="animate-slide-in-right" style={{ animationDelay: '0.8s' }}>
            <div className="bg-white rounded-2xl shadow-2xl p-8 h-full border border-orange-100 hover:shadow-3xl transition-all duration-500 relative overflow-hidden">
              {/* Card Header Background */}
              <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-r from-orange-500 to-red-500 opacity-10 rounded-t-2xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                    <Briefcase className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-presentation-text">Internship Goals</h2>
                    <p className="text-orange-600 font-medium">6-Month Research Project</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="animate-fade-in" style={{ animationDelay: '1s' }}>
                    <div className="flex items-start space-x-3 p-4 bg-orange-50 rounded-lg">
                      <Target className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-presentation-text mb-2">Primary Objective</h4>
                        <p className="text-presentation-text-light text-sm leading-relaxed">
                          Analyze and benchmark existing audio fingerprinting algorithms to improve 
                          Mediaprobe's current solution and provide actionable recommendations.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="animate-slide-in-up" style={{ animationDelay: '1.2s' }}>
                    <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
                      <Calendar className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-presentation-text mb-2">Timeline & Scope</h4>
                        <p className="text-presentation-text-light text-sm leading-relaxed">
                          February - July 2024 | Comprehensive evaluation of commercial and 
                          open-source audio fingerprinting solutions.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-4 animate-scale-in" style={{ animationDelay: '1.4s' }}>
                    <h4 className="font-semibold text-presentation-text mb-4 flex items-center">
                      <Users className="h-4 w-4 text-orange-600 mr-2" />
                      Key Research Activities
                    </h4>
                    <div className="space-y-3">
                      {[
                        'Literature review and state-of-the-art analysis',
                        'Implementation and testing of 6 algorithms',
                        'Performance evaluation and benchmarking',
                        'Dataset creation with noise variations',
                        'Statistical analysis and recommendations'
                      ].map((activity, index) => (
                        <div key={index} className="flex items-start space-x-3 animate-fade-in" style={{ animationDelay: `${1.6 + index * 0.1}s` }}>
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-presentation-text-light">{activity}</span>
                        </div>
                      ))}
                    </div>
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

export default ContextSlide;
