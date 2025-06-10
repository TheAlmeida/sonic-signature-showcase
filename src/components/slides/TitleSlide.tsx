
import React from 'react';
import { Volume2, Mic, AudioWaveform, Zap, Radio, Waves } from 'lucide-react';

const TitleSlide = () => {
  return (
    <div className="h-full relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Responsive Animated Audio Waveform Background */}
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

      {/* Responsive Floating Audio Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10vh] left-[8vw] animate-gentle-float opacity-15">
          <AudioWaveform className="h-[clamp(4rem,8vw,6rem)] w-[clamp(4rem,8vw,6rem)] text-blue-300" />
        </div>
        <div className="absolute top-[15vh] right-[10vw] animate-gentle-float opacity-10" style={{ animationDelay: '2s' }}>
          <Mic className="h-[clamp(3rem,6vw,5rem)] w-[clamp(3rem,6vw,5rem)] text-purple-300" />
        </div>
        <div className="absolute bottom-[15vh] left-[12vw] animate-gentle-float opacity-12" style={{ animationDelay: '4s' }}>
          <Volume2 className="h-[clamp(2.5rem,5vw,4rem)] w-[clamp(2.5rem,5vw,4rem)] text-cyan-300" />
        </div>
        <div className="absolute bottom-[20vh] right-[8vw] animate-gentle-float opacity-8" style={{ animationDelay: '1s' }}>
          <Radio className="h-[clamp(3rem,6vw,4.5rem)] w-[clamp(3rem,6vw,4.5rem)] text-indigo-300" />
        </div>
        <div className="absolute top-1/2 left-[6vw] animate-gentle-float opacity-10" style={{ animationDelay: '3s' }}>
          <Waves className="h-[clamp(2rem,4vw,3.5rem)] w-[clamp(2rem,4vw,3.5rem)] text-blue-400" />
        </div>
        <div className="absolute top-1/3 right-[6vw] animate-gentle-float opacity-12" style={{ animationDelay: '5s' }}>
          <Zap className="h-[clamp(2.5rem,5vw,4rem)] w-[clamp(2.5rem,5vw,4rem)] text-purple-400" />
        </div>
      </div>

      {/* Responsive Neural Network Pattern */}
      <div className="absolute inset-0 opacity-8">
        <div className="absolute top-1/4 left-1/4 w-[0.5vw] h-[0.5vw] bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-[0.375vw] h-[0.375vw] bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-[0.5vw] h-[0.5vw] bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-[0.375vw] h-[0.375vw] bg-indigo-400 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
        
        {/* Responsive Connecting Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <line x1="25%" y1="25%" x2="33%" y2="33%" stroke="#60a5fa" strokeWidth="1" strokeDasharray="5,5" className="animate-pulse" />
          <line x1="33%" y1="33%" x2="75%" y2="67%" stroke="#a855f7" strokeWidth="1" strokeDasharray="5,5" className="animate-pulse" style={{ animationDelay: '1s' }} />
          <line x1="75%" y1="67%" x2="67%" y2="75%" stroke="#06b6d4" strokeWidth="1" strokeDasharray="5,5" className="animate-pulse" style={{ animationDelay: '2s' }} />
        </svg>
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-[4vw] max-w-[95vw] mx-auto">
        {/* Responsive Main Title */}
        <div className="mb-[6vh] animate-fade-in-down">
          <div className="mb-[3vh]">
            <span className="inline-block px-[2vw] py-[1vh] bg-blue-500/20 text-blue-200 text-[clamp(0.75rem,1.2vw,1rem)] font-medium rounded-full backdrop-blur-sm border border-blue-400/30 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Curricular Internship Report
            </span>
          </div>
          <h1 className="text-[clamp(3rem,8vw,6rem)] font-bold font-montserrat mb-[3vh] leading-tight text-white">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
              Media Indexing
            </span>
          </h1>
          <div className="w-[clamp(8rem,20vw,16rem)] h-[0.25vh] bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full animate-scale-in" style={{ animationDelay: '0.8s' }}></div>
        </div>

        {/* Responsive Academic Context */}
        <div className="mb-[6vh] animate-slide-in-up" style={{ animationDelay: '1s' }}>
          <h2 className="text-[clamp(1.25rem,3vw,2rem)] font-medium text-blue-200 mb-[1vh]">
            Licenciatura em Engenharia Eletrotécnica e de Computadores
          </h2>
        </div>

        {/* Responsive Author and Institution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[4vw] w-full max-w-[80vw] animate-fade-in" style={{ animationDelay: '1.2s' }}>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-[3vw] border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-center">
              <div className="w-[clamp(3rem,6vw,4rem)] h-[clamp(3rem,6vw,4rem)] bg-blue-500/30 rounded-full flex items-center justify-center mx-auto mb-[1.5vh]">
                <Volume2 className="h-[clamp(1.5rem,3vw,2rem)] w-[clamp(1.5rem,3vw,2rem)] text-blue-300" />
              </div>
              <p className="font-semibold text-blue-100 mb-[0.5vh] text-[clamp(1rem,1.8vw,1.25rem)]">Student</p>
              <p className="text-gray-300 text-[clamp(0.75rem,1.2vw,1rem)]">Filipe Almeida</p>
              <p className="text-gray-400 text-[clamp(0.6rem,1vw,0.75rem)]">20399</p>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-[3vw] border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-center">
              <div className="w-[clamp(3rem,6vw,4rem)] h-[clamp(3rem,6vw,4rem)] bg-purple-500/30 rounded-full flex items-center justify-center mx-auto mb-[1.5vh]">
                <AudioWaveform className="h-[clamp(1.5rem,3vw,2rem)] w-[clamp(1.5rem,3vw,2rem)] text-purple-300" />
              </div>
              <p className="font-semibold text-purple-100 mb-[0.5vh] text-[clamp(1rem,1.8vw,1.25rem)]">Institution</p>
              <p className="text-gray-300 text-[clamp(0.75rem,1.2vw,1rem)]">Escola Superior de Tecnologia</p>
              <p className="text-gray-400 text-[clamp(0.6rem,1vw,0.75rem)]">Instituto Politécnico do Cávado e do Ave</p>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-[3vw] border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-center">
              <div className="w-[clamp(3rem,6vw,4rem)] h-[clamp(3rem,6vw,4rem)] bg-cyan-500/30 rounded-full flex items-center justify-center mx-auto mb-[1.5vh]">
                <Mic className="h-[clamp(1.5rem,3vw,2rem)] w-[clamp(1.5rem,3vw,2rem)] text-cyan-300" />
              </div>
              <p className="font-semibold text-cyan-100 mb-[0.5vh] text-[clamp(1rem,1.8vw,1.25rem)]">Host Company</p>
              <p className="text-gray-300 text-[clamp(0.75rem,1.2vw,1rem)]">Mediaprobe</p>
              <p className="text-gray-400 text-[clamp(0.6rem,1vw,0.75rem)]">Media Measurement Solutions (EIS)</p>
            </div>
          </div>
        </div>

        {/* Responsive Date */}
        <div className="mt-[6vh] animate-scale-in" style={{ animationDelay: '1.6s' }}>
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full px-[3vw] py-[1.5vh] border border-blue-400/30">
            <p className="text-blue-200 text-[clamp(1rem,2vw,1.5rem)] font-medium">
              {new Date().getFullYear()}
            </p>
          </div>
        </div>

        {/* Responsive Animated Progress Dots */}
        <div className="absolute bottom-[6vh] left-1/2 transform -translate-x-1/2 animate-fade-in" style={{ animationDelay: '2s' }}>
          <div className="flex space-x-[1vw]">
            <div className="w-[0.5vw] h-[0.5vw] bg-blue-400 rounded-full animate-pulse"></div>
            <div className="w-[0.5vw] h-[0.5vw] bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="w-[0.5vw] h-[0.5vw] bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleSlide;
