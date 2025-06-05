
import React from 'react';
import { Building2, Target, Calendar, Users, Briefcase, MapPin } from 'lucide-react';

const ContextSlide = () => {
  return (
    <div className="h-full bg-gradient-to-br from-white to-blue-50 py-8 px-12">
      <div className="max-w-6xl mx-auto h-full">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-in-up">
          <h1 className="text-5xl font-bold text-presentation-text font-montserrat mb-4">
            Internship Context
          </h1>
          <p className="text-xl text-presentation-text-light">
            Overview of the host company and internship framework
          </p>
        </div>

        <div className="grid grid-cols-2 gap-12 h-3/4">
          {/* Host Company */}
          <div className="animate-slide-in-left">
            <div className="bg-white rounded-2xl shadow-xl p-8 h-full">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-presentation-primary rounded-lg flex items-center justify-center mr-4">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-presentation-text">Host Company</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-presentation-text mb-2">Mediaprobe</h3>
                  <p className="text-presentation-text-light leading-relaxed">
                    Leading technology company specializing in audio content recognition and digital media monitoring solutions.
                  </p>
                </div>

                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-presentation-primary" />
                  <span className="text-presentation-text-light">Portugal</span>
                </div>

                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-presentation-primary" />
                  <span className="text-presentation-text-light">Audio Technology & AI Solutions</span>
                </div>

                <div className="bg-blue-50 rounded-lg p-4 mt-6">
                  <h4 className="font-semibold text-presentation-text mb-2">Company Focus</h4>
                  <ul className="text-sm text-presentation-text-light space-y-1">
                    <li>• Audio fingerprinting technology</li>
                    <li>• Real-time content identification</li>
                    <li>• Media monitoring solutions</li>
                    <li>• Digital rights management</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Internship Details */}
          <div className="animate-slide-in-right">
            <div className="bg-white rounded-2xl shadow-xl p-8 h-full">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-presentation-accent rounded-lg flex items-center justify-center mr-4">
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-presentation-text">Internship Goals</h2>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <Target className="h-5 w-5 text-presentation-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-presentation-text mb-1">Primary Objective</h4>
                    <p className="text-presentation-text-light text-sm">
                      Analyze and benchmark existing audio fingerprinting algorithms to improve company's current solution
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Calendar className="h-5 w-5 text-presentation-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-presentation-text mb-1">Timeline</h4>
                    <p className="text-presentation-text-light text-sm">
                      6-month curricular internship (February - July 2024)
                    </p>
                  </div>
                </div>

                <div className="bg-orange-50 rounded-lg p-4">
                  <h4 className="font-semibold text-presentation-text mb-3">Key Activities</h4>
                  <ul className="text-sm text-presentation-text-light space-y-2">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-presentation-accent rounded-full"></div>
                      <span>Literature review and state-of-the-art analysis</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-presentation-accent rounded-full"></div>
                      <span>Implementation and testing of algorithms</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-presentation-accent rounded-full"></div>
                      <span>Performance evaluation and benchmarking</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-presentation-accent rounded-full"></div>
                      <span>Recommendations for algorithm improvement</span>
                    </li>
                  </ul>
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
