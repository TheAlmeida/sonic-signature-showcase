
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

      {/* Floating Audio Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[clamp(3rem,8vh,8rem)] left-[clamp(2rem,6vw,8rem)] animate-gentle-float opacity-15">
          <AudioWaveform className="h-[clamp(4rem,8vw,12rem)] w-[clamp(4rem,8vw,12rem)] text-blue-300" />
        </div>
        <div className="absolute top-[clamp(4rem,12vh,10rem)] right-[clamp(2rem,8vw,10rem)] animate-gentle-float opacity-10" style={{ animationDelay: '2s' }}>
          <Mic className="h-[clamp(3rem,6vw,10rem)] w-[clamp(3rem,6vw,10rem)] text-purple-300" />
        </div>
        <div className="absolute bottom-[clamp(4rem,12vh,12rem)] left-[clamp(3rem,10vw,12rem)] animate-gentle-float opacity-12" style={{ animationDelay: '4s' }}>
          <Volume2 className="h-[clamp(2.5rem,5vw,8rem)] w-[clamp(2.5rem,5vw,8rem)] text-cyan-300" />
        </div>
        <div className="absolute bottom-[clamp(5rem,15vh,15rem)] right-[clamp(2rem,6vw,8rem)] animate-gentle-float opacity-8" style={{ animationDelay: '1s' }}>
          <Radio className="h-[clamp(3rem,6vw,9rem)] w-[clamp(3rem,6vw,9rem)] text-indigo-300" />
        </div>
        <div className="absolute top-1/2 left-[clamp(1.5rem,4vw,6rem)] animate-gentle-float opacity-10" style={{ animationDelay: '3s' }}>
          <Waves className="h-[clamp(2rem,4vw,7rem)] w-[clamp(2rem,4vw,7rem)] text-blue-400" />
        </div>
        <div className="absolute top-1/3 right-[clamp(1.5rem,4vw,6rem)] animate-gentle-float opacity-12" style={{ animationDelay: '5s' }}>
          <Zap className="h-[clamp(2.5rem,5vw,8rem)] w-[clamp(2.5rem,5vw,8rem)] text-purple-400" />
        </div>
      </div>

      {/* Neural Network Pattern */}
      <div className="absolute inset-0 opacity-8">
        <div className="absolute top-1/4 left-1/4 w-[clamp(0.5rem,1vw,1.5rem)] h-[clamp(0.5rem,1vw,1.5rem)] bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-[clamp(0.375rem,0.8vw,1.25rem)] h-[clamp(0.375rem,0.8vw,1.25rem)] bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-[clamp(0.5rem,1vw,1.5rem)] h-[clamp(0.5rem,1vw,1.5rem)] bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-[clamp(0.375rem,0.8vw,1.25rem)] h-[clamp(0.375rem,0.8vw,1.25rem)] bg-indigo-400 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
        
        {/* Connecting Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <line x1="25%" y1="25%" x2="33%" y2="33%" stroke="#60a5fa" strokeWidth="1" strokeDasharray="5,5" className="animate-pulse" />
          <line x1="33%" y1="33%" x2="75%" y2="67%" stroke="#a855f7" strokeWidth="1" strokeDasharray="5,5" className="animate-pulse" style={{ animationDelay: '1s' }} />
          <line x1="75%" y1="67%" x2="67%" y2="75%" stroke="#06b6d4" strokeWidth="1" strokeDasharray="5,5" className="animate-pulse" style={{ animationDelay: '2s' }} />
        </svg>
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-[clamp(2rem,6vw,8rem)] w-full mx-auto">
        {/* Main Title */}
        <div className="mb-[clamp(3rem,8vh,8rem)] animate-fade-in-down">
          <div className="mb-[clamp(2rem,4vh,4rem)]">
            <span className="inline-block px-[clamp(1.5rem,3vw,4rem)] py-[clamp(0.75rem,2vh,2rem)] bg-blue-500/20 text-blue-200 text-[clamp(1rem,2vw,1.75rem)] font-medium rounded-full backdrop-blur-sm border border-blue-400/30 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Curricular Internship Report
            </span>
          </div>
          <h1 className="text-[clamp(4rem,12vw,12rem)] font-bold font-montserrat mb-[clamp(2rem,5vh,5rem)] leading-tight text-white">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
              Media Indexing
            </span>
          </h1>
          <div className="w-[clamp(12rem,25vw,20rem)] h-[clamp(0.25rem,0.5vh,0.75rem)] bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full animate-scale-in" style={{ animationDelay: '0.8s' }}></div>
        </div>

        {/* Academic Context */}
        <div className="mb-[clamp(4rem,8vh,8rem)] animate-slide-in-up" style={{ animationDelay: '1s' }}>
          <h2 className="text-[clamp(1.5rem,4vw,3rem)] font-medium text-blue-200 mb-[clamp(0.75rem,2vh,2rem)]">
            Licenciatura em Engenharia Eletrotécnica e de Computadores
          </h2>
        </div>

        {/* Author and Institution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[clamp(2rem,6vw,6rem)] w-full max-w-[clamp(60rem,85vw,85rem)] animate-fade-in" style={{ animationDelay: '1.2s' }}>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-[clamp(2rem,4vw,4rem)] border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-center">
              <div className="w-[clamp(4rem,8vw,6rem)] h-[clamp(4rem,8vw,6rem)] bg-blue-500/30 rounded-full flex items-center justify-center mx-auto mb-[clamp(1rem,3vh,3rem)]">
                <Volume2 className="h-[clamp(2rem,4vw,3rem)] w-[clamp(2rem,4vw,3rem)] text-blue-300" />
              </div>
              <p className="font-semibold text-blue-100 mb-[clamp(0.5rem,1vh,1rem)] text-[clamp(1.25rem,2.5vw,2rem)]">Student</p>
              <p className="text-gray-300 text-[clamp(1rem,2vw,1.5rem)]">Filipe Almeida</p>
              <p className="text-gray-400 text-[clamp(0.875rem,1.5vw,1.25rem)]">20399</p>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-[clamp(2rem,4vw,4rem)] border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-center">
              <div className="w-[clamp(4rem,8vw,6rem)] h-[clamp(4rem,8vw,6rem)] bg-purple-500/30 rounded-full flex items-center justify-center mx-auto mb-[clamp(1rem,3vh,3rem)]">
                <AudioWaveform className="h-[clamp(2rem,4vw,3rem)] w-[clamp(2rem,4vw,3rem)] text-purple-300" />
              </div>
              <p className="font-semibold text-purple-100 mb-[clamp(0.5rem,1vh,1rem)] text-[clamp(1.25rem,2.5vw,2rem)]">Institution</p>
              <p className="text-gray-300 text-[clamp(1rem,2vw,1.5rem)]">Escola Superior de Tecnologia</p>
              <p className="text-gray-400 text-[clamp(0.875rem,1.5vw,1.25rem)]">Instituto Politécnico do Cávado e do Ave</p>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-[clamp(2rem,4vw,4rem)] border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-center">
              <div className="w-[clamp(4rem,8vw,6rem)] h-[clamp(4rem,8vw,6rem)] bg-cyan-500/30 rounded-full flex items-center justify-center mx-auto mb-[clamp(1rem,3vh,3rem)]">
                <Mic className="h-[clamp(2rem,4vw,3rem)] w-[clamp(2rem,4vw,3rem)] text-cyan-300" />
              </div>
              <p className="font-semibold text-cyan-100 mb-[clamp(0.5rem,1vh,1rem)] text-[clamp(1.25rem,2.5vw,2rem)]">Host Company</p>
              <p className="text-gray-300 text-[clamp(1rem,2vw,1.5rem)]">Mediaprobe</p>
              <p className="text-gray-400 text-[clamp(0.875rem,1.5vw,1.25rem)]">Media Measurement Solutions (EIS)</p>
            </div>
          </div>
        </div>

        {/* Date */}
        <div className="mt-[clamp(4rem,8vh,8rem)] animate-scale-in" style={{ animationDelay: '1.6s' }}>
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full px-[clamp(3rem,6vw,6rem)] py-[clamp(1rem,3vh,3rem)] border border-blue-400/30">
            <p className="text-blue-200 text-[clamp(1.5rem,3vw,2.5rem)] font-medium">
              {new Date().getFullYear()}
            </p>
          </div>
        </div>

        {/* Animated Progress Dots */}
        <div className="absolute bottom-[clamp(4rem,8vh,8rem)] left-1/2 transform -translate-x-1/2 animate-fade-in" style={{ animationDelay: '2s' }}>
          <div className="flex space-x-[clamp(0.75rem,2vw,2rem)]">
            <div className="w-[clamp(0.75rem,1.5vw,1.5rem)] h-[clamp(0.75rem,1.5vw,1.5rem)] bg-blue-400 rounded-full animate-pulse"></div>
            <div className="w-[clamp(0.75rem,1.5vw,1.5rem)] h-[clamp(0.75rem,1.5vw,1.5rem)] bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="w-[clamp(0.75rem,1.5vw,1.5rem)] h-[clamp(0.75rem,1.5vw,1.5rem)] bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleSlide;
