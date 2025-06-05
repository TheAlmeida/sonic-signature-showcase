
import React from 'react';
import { Volume2, Mic, AudioWaveform, Zap, Radio, Waves } from 'lucide-react';

const TitleSlide = () => {
  return (
    <div className="h-full relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Animated Audio Waveform Background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <defs>
            <pattern id="audioWave" x="0" y="0" width="200" height="100" patternUnits="userSpaceOnUse">
              <path d="M0,50 Q50,20 100,50 T200,50" stroke="currentColor" strokeWidth="2" fill="none" className="animate-pulse" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#audioWave)" />
        </svg>
      </div>

      {/* Floating Audio Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-16 animate-gentle-float opacity-15">
          <AudioWaveform className="h-24 w-24 text-blue-300" />
        </div>
        <div className="absolute top-32 right-20 animate-gentle-float opacity-10" style={{ animationDelay: '2s' }}>
          <Mic className="h-20 w-20 text-purple-300" />
        </div>
        <div className="absolute bottom-32 left-24 animate-gentle-float opacity-12" style={{ animationDelay: '4s' }}>
          <Volume2 className="h-16 w-16 text-cyan-300" />
        </div>
        <div className="absolute bottom-40 right-16 animate-gentle-float opacity-8" style={{ animationDelay: '1s' }}>
          <Radio className="h-18 w-18 text-indigo-300" />
        </div>
        <div className="absolute top-1/2 left-12 animate-gentle-float opacity-10" style={{ animationDelay: '3s' }}>
          <Waves className="h-14 w-14 text-blue-400" />
        </div>
        <div className="absolute top-1/3 right-12 animate-gentle-float opacity-12" style={{ animationDelay: '5s' }}>
          <Zap className="h-16 w-16 text-purple-400" />
        </div>
      </div>

      {/* Neural Network Pattern */}
      <div className="absolute inset-0 opacity-8">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
        
        {/* Connecting Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <line x1="25%" y1="25%" x2="33%" y2="33%" stroke="#60a5fa" strokeWidth="1" strokeDasharray="5,5" className="animate-pulse" />
          <line x1="33%" y1="33%" x2="75%" y2="67%" stroke="#a855f7" strokeWidth="1" strokeDasharray="5,5" className="animate-pulse" style={{ animationDelay: '1s' }} />
          <line x1="75%" y1="67%" x2="67%" y2="75%" stroke="#06b6d4" strokeWidth="1" strokeDasharray="5,5" className="animate-pulse" style={{ animationDelay: '2s' }} />
        </svg>
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-8 max-w-6xl mx-auto">
        {/* Main Title with Enhanced Typography */}
        <div className="mb-12 animate-fade-in-down">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-blue-500/20 text-blue-200 text-sm font-medium rounded-full backdrop-blur-sm border border-blue-400/30 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Curricular Internship Report
            </span>
          </div>
          <h1 className="text-6xl font-bold font-montserrat mb-6 leading-tight text-white">
            <span className="block animate-slide-in-left">Analysis and Benchmarking of</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
              Audio Fingerprinting Algorithms
            </span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full animate-scale-in" style={{ animationDelay: '0.8s' }}></div>
        </div>

        {/* Academic Context */}
        <div className="mb-12 animate-slide-in-up" style={{ animationDelay: '1s' }}>
          <h2 className="text-2xl font-medium text-blue-200 mb-2">
            Electrical Engineering
          </h2>
        </div>

        {/* Enhanced Author and Institution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl animate-fade-in" style={{ animationDelay: '1.2s' }}>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500/30 rounded-full flex items-center justify-center mx-auto mb-3">
                <Volume2 className="h-6 w-6 text-blue-300" />
              </div>
              <p className="font-semibold text-blue-100 mb-1">Student</p>
              <p className="text-gray-300 text-sm">Filipe Silva</p>
              <p className="text-gray-400 text-xs">Electrical Engineering</p>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500/30 rounded-full flex items-center justify-center mx-auto mb-3">
                <AudioWaveform className="h-6 w-6 text-purple-300" />
              </div>
              <p className="font-semibold text-purple-100 mb-1">Institution</p>
              <p className="text-gray-300 text-sm">Engineering Faculty</p>
              <p className="text-gray-400 text-xs">University of Porto</p>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-center">
              <div className="w-12 h-12 bg-cyan-500/30 rounded-full flex items-center justify-center mx-auto mb-3">
                <Mic className="h-6 w-6 text-cyan-300" />
              </div>
              <p className="font-semibold text-cyan-100 mb-1">Host Company</p>
              <p className="text-gray-300 text-sm">Mediaprobe</p>
              <p className="text-gray-400 text-xs">Audio Technology</p>
            </div>
          </div>
        </div>

        {/* Date with Style */}
        <div className="mt-12 animate-scale-in" style={{ animationDelay: '1.6s' }}>
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full px-6 py-3 border border-blue-400/30">
            <p className="text-blue-200 text-lg font-medium">
              {new Date().getFullYear()}
            </p>
          </div>
        </div>

        {/* Animated Progress Dots */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-fade-in" style={{ animationDelay: '2s' }}>
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleSlide;
