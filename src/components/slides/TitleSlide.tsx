
import React from 'react';
import { Volume2, Mic, AudioWaveform } from 'lucide-react';

const TitleSlide = () => {
  return (
    <div className="h-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20">
          <AudioWaveform className="h-32 w-32 animate-gentle-float" />
        </div>
        <div className="absolute bottom-20 right-20">
          <Mic className="h-24 w-24 animate-gentle-float" style={{ animationDelay: '2s' }} />
        </div>
        <div className="absolute top-1/2 left-10">
          <Volume2 className="h-20 w-20 animate-pulse-subtle" style={{ animationDelay: '1s' }} />
        </div>
      </div>

      <div className="text-center z-10 max-w-5xl px-8">
        {/* Main Title */}
        <div className="mb-8 animate-fade-in-down">
          <h1 className="text-6xl font-bold font-montserrat mb-4 leading-tight">
            Analysis and Benchmarking of
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              Audio Fingerprinting Algorithms
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <h2 className="text-2xl font-medium text-blue-200 mb-2">
            Curricular Internship Report
          </h2>
          <p className="text-xl text-gray-300">
            Electrical Engineering
          </p>
        </div>

        {/* Author and Institution */}
        <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
          <div className="text-lg">
            <p className="font-medium text-blue-100">Student Name</p>
            <p className="text-gray-300">Electrical Engineering Student</p>
          </div>
          
          <div className="text-lg">
            <p className="font-medium text-blue-100">Institution</p>
            <p className="text-gray-300">Engineering Faculty</p>
          </div>
          
          <div className="text-lg">
            <p className="font-medium text-blue-100">Host Company</p>
            <p className="text-gray-300">Mediaprobe</p>
          </div>
        </div>

        {/* Date */}
        <div className="mt-12 animate-fade-in" style={{ animationDelay: '1.6s' }}>
          <p className="text-gray-400 text-lg">
            {new Date().getFullYear()}
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-fade-in" style={{ animationDelay: '2s' }}>
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse-subtle"></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse-subtle" style={{ animationDelay: '0.3s' }}></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse-subtle" style={{ animationDelay: '0.6s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleSlide;
