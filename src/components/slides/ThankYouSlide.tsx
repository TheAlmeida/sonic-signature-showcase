
import React from 'react';
import { MessageCircle, Mail, Github, Linkedin, Heart, Users } from 'lucide-react';

const ThankYouSlide = () => {
  return (
    <div className="h-full bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 animate-pulse">
          <div className="w-20 h-20 border-2 border-white rounded-full"></div>
        </div>
        <div className="absolute top-20 right-20 animate-bounce" style={{ animationDuration: '3s' }}>
          <div className="w-16 h-16 border-2 border-white rounded-lg rotate-45"></div>
        </div>
        <div className="absolute bottom-20 left-20 animate-pulse" style={{ animationDelay: '1s' }}>
          <div className="w-12 h-12 bg-white rounded-full"></div>
        </div>
        <div className="absolute bottom-10 right-10 animate-bounce" style={{ animationDelay: '2s', animationDuration: '4s' }}>
          <div className="w-24 h-24 border-2 border-white rounded-full"></div>
        </div>
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-8">
        {/* Main Thank You */}
        <div className="mb-8 animate-scale-in">
          <h1 className="text-7xl font-bold font-montserrat mb-4 leading-tight">
            Thank You
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        {/* Subtitle */}
        <div className="mb-12 animate-slide-in-up" style={{ animationDelay: '0.3s' }}>
          <h2 className="text-2xl font-medium text-blue-200 mb-4">
            Audio Fingerprinting Analysis & Benchmarking
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
            For your attention and interest in this comprehensive analysis of audio fingerprinting algorithms
          </p>
        </div>

        {/* Acknowledgments */}
        <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Users className="h-6 w-6 text-blue-300" />
            <h3 className="text-lg font-semibold text-blue-200">Special Thanks</h3>
          </div>
          <div className="space-y-2 text-gray-300">
            <p>Mediaprobe team for hosting this internship</p>
            <p>Academic supervisors for their guidance</p>
            <p>Open-source community for algorithm implementations</p>
          </div>
        </div>

        {/* Q&A Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl animate-bounce-in" style={{ animationDelay: '0.9s' }}>
          <div className="flex items-center justify-center space-x-3 mb-4">
            <MessageCircle className="h-8 w-8 text-blue-300" />
            <h3 className="text-2xl font-bold">Questions & Discussion</h3>
          </div>
          <p className="text-blue-200 text-lg mb-6">
            Ready to discuss the findings, methodology, or future research directions
          </p>
          
          {/* Contact Information */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <Mail className="h-4 w-4" />
              <span>student@university.edu</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <Github className="h-4 w-4" />
              <span>github.com/student</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <Linkedin className="h-4 w-4" />
              <span>linkedin.com/in/student</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <Heart className="h-4 w-4" />
              <span>Passionate about Audio AI</span>
            </div>
          </div>
        </div>

        {/* Animated footer */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-pulse">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouSlide;
