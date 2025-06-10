
import React from 'react';
import { Volume2, Mic, AudioWaveform, Zap, Radio, Waves } from 'lucide-react';

const TitleSlide = () => {
  return (
    <div className="h-full w-full relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
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

      {/* Floating Audio Icons with Screen-Aware Positioning */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[clamp(2rem,6vh,6rem)] left-[clamp(1rem,4vw,4rem)] animate-gentle-float opacity-15">
          <AudioWaveform className="h-[clamp(3rem,6vw,8rem)] w-[clamp(3rem,6vw,8rem)] text-blue-300" />
        </div>
        <div className="absolute top-[clamp(3rem,8vh,8rem)] right-[clamp(1rem,5vw,5rem)] animate-gentle-float opacity-10" style={{ animationDelay: '2s' }}>
          <Mic className="h-[clamp(2.5rem,5vw,7rem)] w-[clamp(2.5rem,5vw,7rem)] text-purple-300" />
        </div>
        <div className="absolute bottom-[clamp(3rem,8vh,8rem)] left-[clamp(2rem,6vw,6rem)] animate-gentle-float opacity-12" style={{ animationDelay: '4s' }}>
          <Volume2 className="h-[clamp(2rem,4vw,6rem)] w-[clamp(2rem,4vw,6rem)] text-cyan-300" />
        </div>
        <div className="absolute bottom-[clamp(4rem,10vh,10rem)] right-[clamp(1rem,4vw,4rem)] animate-gentle-float opacity-8" style={{ animationDelay: '1s' }}>
          <Radio className="h-[clamp(2.5rem,5vw,7rem)] w-[clamp(2.5rem,5vw,7rem)] text-indigo-300" />
        </div>
        <div className="absolute top-1/2 left-[clamp(0.5rem,2vw,3rem)] animate-gentle-float opacity-10" style={{ animationDelay: '3s' }}>
          <Waves className="h-[clamp(1.5rem,3vw,5rem)] w-[clamp(1.5rem,3vw,5rem)] text-blue-400" />
        </div>
        <div className="absolute top-1/3 right-[clamp(0.5rem,2vw,3rem)] animate-gentle-float opacity-12" style={{ animationDelay: '5s' }}>
          <Zap className="h-[clamp(2rem,4vw,6rem)] w-[clamp(2rem,4vw,6rem)] text-purple-400" />
        </div>
      </div>

      {/* Neural Network Pattern */}
      <div className="absolute inset-0 opacity-8">
        <div className="absolute top-1/4 left-1/4 w-[clamp(0.4rem,0.8vw,1.2rem)] h-[clamp(0.4rem,0.8vw,1.2rem)] bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-[clamp(0.3rem,0.6vw,1rem)] h-[clamp(0.3rem,0.6vw,1rem)] bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-[clamp(0.4rem,0.8vw,1.2rem)] h-[clamp(0.4rem,0.8vw,1.2rem)] bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-[clamp(0.3rem,0.6vw,1rem)] h-[clamp(0.3rem,0.6vw,1rem)] bg-indigo-400 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
        
        {/* Connecting Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <line x1="25%" y1="25%" x2="33%" y2="33%" stroke="#60a5fa" strokeWidth="1" strokeDasharray="5,5" className="animate-pulse" />
          <line x1="33%" y1="33%" x2="75%" y2="67%" stroke="#a855f7" strokeWidth="1" strokeDasharray="5,5" className="animate-pulse" style={{ animationDelay: '1s' }} />
          <line x1="75%" y1="67%" x2="67%" y2="75%" stroke="#06b6d4" strokeWidth="1" strokeDasharray="5,5" className="animate-pulse" style={{ animationDelay: '2s' }} />
        </svg>
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-[clamp(1rem,4vw,4rem)] w-full mx-auto">
        {/* Main Title with Smart Spacing */}
        <div className="mb-[clamp(2rem,5vh,5rem)] animate-fade-in-down">
          <div className="mb-[clamp(1.5rem,3vh,3rem)]">
            <span className="inline-block px-[clamp(1rem,2.5vw,3rem)] py-[clamp(0.5rem,1.5vh,1.5rem)] bg-blue-500/20 text-blue-200 text-[clamp(0.8rem,1.6vw,1.4rem)] font-medium rounded-full backdrop-blur-sm border border-blue-400/30 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Curricular Internship Report
            </span>
          </div>
          <h1 className="text-[clamp(3rem,8vw,8rem)] font-bold font-montserrat mb-[clamp(1.5rem,3vh,3rem)] leading-tight text-white">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
              Media Indexing
            </span>
          </h1>
          <div className="w-[clamp(8rem,20vw,16rem)] h-[clamp(0.2rem,0.4vh,0.6rem)] bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full animate-scale-in" style={{ animationDelay: '0.8s' }}></div>
        </div>

        {/* Academic Context with Responsive Sizing */}
        <div className="mb-[clamp(2rem,5vh,5rem)] animate-slide-in-up" style={{ animationDelay: '1s' }}>
          <h2 className="text-[clamp(1.2rem,3vw,2.5rem)] font-medium text-blue-200 mb-[clamp(0.5rem,1.5vh,1.5rem)]">
            Licenciatura em Engenharia Eletrotécnica e de Computadores
          </h2>
        </div>

        {/* Author and Institution Cards with Adaptive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[clamp(1.5rem,4vw,4rem)] w-full max-w-[clamp(50rem,75vw,75rem)] animate-fade-in" style={{ animationDelay: '1.2s' }}>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-[clamp(1.5rem,3vw,3rem)] border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-center">
              <div className="w-[clamp(3rem,6vw,5rem)] h-[clamp(3rem,6vw,5rem)] bg-blue-500/30 rounded-full flex items-center justify-center mx-auto mb-[clamp(0.8rem,2vh,2rem)]">
                <Volume2 className="h-[clamp(1.5rem,3vw,2.5rem)] w-[clamp(1.5rem,3vw,2.5rem)] text-blue-300" />
              </div>
              <p className="font-semibold text-blue-100 mb-[clamp(0.4rem,1vh,0.8rem)] text-[clamp(1rem,2vw,1.6rem)]">Student</p>
              <p className="text-gray-300 text-[clamp(0.8rem,1.6vw,1.25rem)]">Filipe Almeida</p>
              <p className="text-gray-400 text-[clamp(0.7rem,1.2vw,1rem)]">20399</p>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-[clamp(1.5rem,3vw,3rem)] border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-center">
              <div className="w-[clamp(3rem,6vw,5rem)] h-[clamp(3rem,6vw,5rem)] bg-purple-500/30 rounded-full flex items-center justify-center mx-auto mb-[clamp(0.8rem,2vh,2rem)]">
                <AudioWaveform className="h-[clamp(1.5rem,3vw,2.5rem)] w-[clamp(1.5rem,3vw,2.5rem)] text-purple-300" />
              </div>
              <p className="font-semibold text-purple-100 mb-[clamp(0.4rem,1vh,0.8rem)] text-[clamp(1rem,2vw,1.6rem)]">Institution</p>
              <p className="text-gray-300 text-[clamp(0.8rem,1.6vw,1.25rem)]">Escola Superior de Tecnologia</p>
              <p className="text-gray-400 text-[clamp(0.7rem,1.2vw,1rem)]">Instituto Politécnico do Cávado e do Ave</p>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-[clamp(1.5rem,3vw,3rem)] border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-center">
              <div className="w-[clamp(3rem,6vw,5rem)] h-[clamp(3rem,6vw,5rem)] bg-cyan-500/30 rounded-full flex items-center justify-center mx-auto mb-[clamp(0.8rem,2vh,2rem)]">
                <Mic className="h-[clamp(1.5rem,3vw,2.5rem)] w-[clamp(1.5rem,3vw,2.5rem)] text-cyan-300" />
              </div>
              <p className="font-semibold text-cyan-100 mb-[clamp(0.4rem,1vh,0.8rem)] text-[clamp(1rem,2vw,1.6rem)]">Host Company</p>
              <p className="text-gray-300 text-[clamp(0.8rem,1.6vw,1.25rem)]">Mediaprobe</p>
              <p className="text-gray-400 text-[clamp(0.7rem,1.2vw,1rem)]">Media Measurement Solutions (EIS)</p>
            </div>
          </div>
        </div>

        {/* Date with Proper Bottom Spacing */}
        <div className="mt-[clamp(2rem,5vh,5rem)] animate-scale-in" style={{ animationDelay: '1.6s' }}>
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full px-[clamp(2rem,5vw,5rem)] py-[clamp(0.8rem,2vh,2rem)] border border-blue-400/30">
            <p className="text-blue-200 text-[clamp(1.2rem,2.5vw,2rem)] font-medium">
              {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleSlide;
