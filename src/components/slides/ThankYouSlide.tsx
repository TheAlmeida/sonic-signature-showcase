
import React from 'react';
import { MessageCircle, Mail, Github, Linkedin, Heart, Users, ThumbsUp, ExternalLink, BookOpen, Award } from 'lucide-react';

const ThankYouSlide = () => {
  return (
    <div className="h-full relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white">
      {/* Abstract Background Design */}
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-10" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="1" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path d="M0,0 C300,100 400,300 600,400 C800,500 900,300 1200,400 L1200,800 L0,800 Z" fill="url(#grad1)" />
        </svg>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 animate-pulse-subtle">
          <div className="w-32 h-32 rounded-full border-4 border-white/20 opacity-20"></div>
        </div>
        <div className="absolute bottom-1/4 left-1/3 animate-pulse-subtle" style={{ animationDelay: '2s' }}>
          <div className="w-48 h-48 rounded-full border-4 border-white/10 opacity-10"></div>
        </div>
        <div className="absolute top-1/3 left-1/5 animate-gentle-float opacity-15" style={{ animationDelay: '1s' }}>
          <Award className="h-16 w-16 text-blue-300" />
        </div>
        <div className="absolute bottom-1/3 right-1/6 animate-gentle-float opacity-10" style={{ animationDelay: '3s' }}>
          <BookOpen className="h-12 w-12 text-purple-300" />
        </div>
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-8">
        {/* Enhanced Main Thank You */}
        <div className="mb-12 animate-scale-in">
          <div className="w-24 h-24 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center mx-auto mb-8 border border-white/30 shadow-lg">
            <ThumbsUp className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-7xl font-bold font-montserrat mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
            Thank You
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        {/* Enhanced Subtitle */}
        <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="px-6 py-3 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 mb-4">
            <h2 className="text-2xl font-medium text-blue-200">
              Audio Fingerprinting Analysis & Benchmarking
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl leading-relaxed animate-fade-in" style={{ animationDelay: '0.5s' }}>
            For your attention and interest in this comprehensive analysis of audio fingerprinting algorithms
          </p>
        </div>

        {/* Enhanced Acknowledgments */}
        <div className="mb-10 animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-10 h-1 bg-blue-400 rounded-full"></div>
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-blue-300" />
              <h3 className="text-lg font-semibold text-blue-200">Special Thanks</h3>
            </div>
            <div className="w-10 h-1 bg-blue-400 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-3 gap-6 text-center max-w-3xl">
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-colors duration-300">
              <h4 className="text-blue-200 font-medium mb-1">Mediaprobe Team</h4>
              <p className="text-sm text-gray-400">For hosting and mentorship</p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-colors duration-300">
              <h4 className="text-blue-200 font-medium mb-1">Academic Supervisors</h4>
              <p className="text-sm text-gray-400">For guidance and feedback</p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-colors duration-300">
              <h4 className="text-blue-200 font-medium mb-1">Open-Source Community</h4>
              <p className="text-sm text-gray-400">For algorithm implementations</p>
            </div>
          </div>
        </div>

        {/* Enhanced Q&A Section */}
        <div className="bg-gradient-to-br from-white/10 to-purple/5 backdrop-blur-md rounded-3xl p-8 max-w-3xl shadow-2xl border border-white/20 animate-scale-in" style={{ animationDelay: '0.9s' }}>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-12 h-1 bg-purple-400/70 rounded-full"></div>
            <div className="flex items-center space-x-3">
              <MessageCircle className="h-6 w-6 text-purple-300" />
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
                Questions & Discussion
              </h3>
            </div>
            <div className="w-12 h-1 bg-purple-400/70 rounded-full"></div>
          </div>
          
          <p className="text-lg text-blue-200 mb-8 leading-relaxed">
            Ready to discuss the findings, methodology, and potential applications
          </p>
          
          {/* Enhanced Contact Information */}
          <div className="grid grid-cols-2 gap-6">
            <a href="mailto:student@university.edu" className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-colors duration-300 group">
              <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Mail className="h-5 w-5 text-blue-300" />
              </div>
              <div className="text-left">
                <div className="text-sm font-medium text-gray-300">Email</div>
                <div className="text-blue-200 group-hover:text-blue-100 transition-colors">student@university.edu</div>
              </div>
              <ExternalLink className="h-4 w-4 text-gray-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            
            <a href="https://github.com/student" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-colors duration-300 group">
              <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Github className="h-5 w-5 text-purple-300" />
              </div>
              <div className="text-left">
                <div className="text-sm font-medium text-gray-300">Github</div>
                <div className="text-purple-200 group-hover:text-purple-100 transition-colors">github.com/student</div>
              </div>
              <ExternalLink className="h-4 w-4 text-gray-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            
            <a href="https://linkedin.com/in/student" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-colors duration-300 group">
              <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Linkedin className="h-5 w-5 text-blue-300" />
              </div>
              <div className="text-left">
                <div className="text-sm font-medium text-gray-300">LinkedIn</div>
                <div className="text-blue-200 group-hover:text-blue-100 transition-colors">linkedin.com/in/student</div>
              </div>
              <ExternalLink className="h-4 w-4 text-gray-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            
            <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <div className="w-10 h-10 bg-pink-500/20 rounded-full flex items-center justify-center">
                <Heart className="h-5 w-5 text-pink-300" />
              </div>
              <div className="text-left">
                <div className="text-sm font-medium text-gray-300">Interest</div>
                <div className="text-pink-200">Audio AI & Recognition</div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced animated footer */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in" style={{ animationDelay: '1.5s' }}>
          <div className="flex space-x-3">
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
            <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouSlide;
