
import React from 'react';
import { TrendingUp, Clock, Database, Target, BarChart, Award, Zap } from 'lucide-react';

const ResultsSlide = () => {
  const results = [
    { name: 'Mediaprobe', precision: 95, recall: 92, time: 120, memory: 85, color: 'bg-blue-500', rank: 3 },
    { name: 'ACRCloud', precision: 98, recall: 94, time: 80, memory: 60, color: 'bg-green-500', rank: 1 },
    { name: 'Audfprint', precision: 88, recall: 85, time: 200, memory: 120, color: 'bg-purple-500', rank: 5 },
    { name: 'Dejavu', precision: 82, recall: 78, time: 350, memory: 200, color: 'bg-orange-500', rank: 6 },
    { name: 'Olaf', precision: 90, recall: 87, time: 150, memory: 90, color: 'bg-red-500', rank: 4 },
    { name: 'Soundfingerprinting', precision: 93, recall: 89, time: 110, memory: 75, color: 'bg-indigo-500', rank: 2 }
  ];

  const getMetricGrade = (value: number, type: 'accuracy' | 'time' | 'memory') => {
    if (type === 'accuracy') {
      if (value >= 95) return { grade: 'A+', color: 'text-green-600' };
      if (value >= 90) return { grade: 'A', color: 'text-blue-600' };
      if (value >= 85) return { grade: 'B', color: 'text-yellow-600' };
      return { grade: 'C', color: 'text-red-600' };
    } else {
      // For time and memory, lower is better
      if (value <= 100) return { grade: 'A+', color: 'text-green-600' };
      if (value <= 150) return { grade: 'A', color: 'text-blue-600' };
      if (value <= 200) return { grade: 'B', color: 'text-yellow-600' };
      return { grade: 'C', color: 'text-red-600' };
    }
  };

  return (
    <div className="h-full relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-indigo-50">
      {/* Data Visualization Background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <pattern id="dataGrid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <rect width="60" height="60" fill="none" stroke="#3b82f6" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dataGrid)" />
          
          {/* Simulated Chart Lines */}
          <polyline points="100,600 200,500 300,400 400,350 500,300 600,250" 
                   fill="none" stroke="#3b82f6" strokeWidth="2" opacity="0.3" />
          <polyline points="100,700 200,650 300,550 400,500 500,450 600,400" 
                   fill="none" stroke="#6366f1" strokeWidth="2" opacity="0.3" />
        </svg>
      </div>

      {/* Floating Chart Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 animate-gentle-float opacity-15">
          <BarChart className="h-16 w-16 text-blue-500" />
        </div>
        <div className="absolute bottom-32 left-16 animate-gentle-float opacity-12" style={{ animationDelay: '2s' }}>
          <TrendingUp className="h-14 w-14 text-green-500" />
        </div>
        <div className="absolute top-1/3 right-12 animate-gentle-float opacity-18" style={{ animationDelay: '4s' }}>
          <Award className="h-12 w-12 text-purple-500" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto h-full py-8 px-12">
        {/* Enhanced Header */}
        <div className="text-center mb-8 animate-slide-in-up">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4 animate-fade-in">
            <TrendingUp className="h-4 w-4" />
            <span>Performance Analysis</span>
          </div>
          <h1 className="text-5xl font-bold text-presentation-text font-montserrat mb-4 animate-slide-in-down" style={{ animationDelay: '0.2s' }}>
            Experimental Results
          </h1>
          <p className="text-xl text-presentation-text-light animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Comprehensive performance metrics and statistical analysis
          </p>
        </div>

        {/* Enhanced Charts Grid */}
        <div className="grid grid-cols-2 gap-8 h-4/5">
          {/* Precision Chart */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-blue-100 animate-slide-in-left" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center justify-between mb-6 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <div className="flex items-center">
                <Target className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-presentation-text">Precision Analysis</h3>
              </div>
              <div className="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                True Positive Rate
              </div>
            </div>
            <div className="space-y-4">
              {results.sort((a, b) => b.precision - a.precision).map((result, index) => {
                const grade = getMetricGrade(result.precision, 'accuracy');
                return (
                  <div key={index} className="animate-slide-in-up" style={{ animationDelay: `${1 + index * 0.1}s` }}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <div className={`w-4 h-4 ${result.color} rounded-full`}></div>
                        <span className="text-sm font-medium text-presentation-text">{result.name}</span>
                        <span className={`text-xs font-bold px-2 py-1 rounded ${grade.color} bg-gray-100`}>
                          {grade.grade}
                        </span>
                      </div>
                      <span className="text-sm font-bold text-presentation-text">{result.precision}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`h-3 rounded-full ${result.color} animate-progress-fill relative`}
                        style={{ 
                          '--progress-width': `${result.precision}%`,
                          animationDelay: `${1.2 + index * 0.1}s`
                        } as React.CSSProperties}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Recall Chart */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-green-100 animate-slide-in-right" style={{ animationDelay: '0.8s' }}>
            <div className="flex items-center justify-between mb-6 animate-fade-in" style={{ animationDelay: '1s' }}>
              <div className="flex items-center">
                <TrendingUp className="h-6 w-6 text-green-600 mr-3" />
                <h3 className="text-xl font-bold text-presentation-text">Recall Analysis</h3>
              </div>
              <div className="text-sm text-green-600 bg-green-50 px-3 py-1 rounded-full">
                Detection Rate
              </div>
            </div>
            <div className="space-y-4">
              {results.sort((a, b) => b.recall - a.recall).map((result, index) => {
                const grade = getMetricGrade(result.recall, 'accuracy');
                return (
                  <div key={index} className="animate-slide-in-up" style={{ animationDelay: `${1.2 + index * 0.1}s` }}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <div className={`w-4 h-4 ${result.color} rounded-full`}></div>
                        <span className="text-sm font-medium text-presentation-text">{result.name}</span>
                        <span className={`text-xs font-bold px-2 py-1 rounded ${grade.color} bg-gray-100`}>
                          {grade.grade}
                        </span>
                      </div>
                      <span className="text-sm font-bold text-presentation-text">{result.recall}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`h-3 rounded-full ${result.color} animate-progress-fill relative`}
                        style={{ 
                          '--progress-width': `${result.recall}%`,
                          animationDelay: `${1.4 + index * 0.1}s`
                        } as React.CSSProperties}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Execution Time Chart */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-orange-100 animate-slide-in-left" style={{ animationDelay: '1s' }}>
            <div className="flex items-center justify-between mb-6 animate-fade-in" style={{ animationDelay: '1.2s' }}>
              <div className="flex items-center">
                <Clock className="h-6 w-6 text-orange-600 mr-3" />
                <h3 className="text-xl font-bold text-presentation-text">Processing Speed</h3>
              </div>
              <div className="text-sm text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
                Lower is Better
              </div>
            </div>
            <div className="space-y-4">
              {results.sort((a, b) => a.time - b.time).map((result, index) => {
                const grade = getMetricGrade(result.time, 'time');
                return (
                  <div key={index} className="animate-slide-in-up" style={{ animationDelay: `${1.4 + index * 0.1}s` }}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <div className={`w-4 h-4 ${result.color} rounded-full`}></div>
                        <span className="text-sm font-medium text-presentation-text">{result.name}</span>
                        <span className={`text-xs font-bold px-2 py-1 rounded ${grade.color} bg-gray-100`}>
                          {grade.grade}
                        </span>
                      </div>
                      <span className="text-sm font-bold text-presentation-text">{result.time}ms</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`h-3 rounded-full ${result.color} animate-progress-fill relative`}
                        style={{ 
                          '--progress-width': `${Math.max(10, (400 - result.time) / 4)}%`,
                          animationDelay: `${1.6 + index * 0.1}s`
                        } as React.CSSProperties}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Memory Usage Chart */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-purple-100 animate-slide-in-right" style={{ animationDelay: '1.2s' }}>
            <div className="flex items-center justify-between mb-6 animate-fade-in" style={{ animationDelay: '1.4s' }}>
              <div className="flex items-center">
                <Database className="h-6 w-6 text-purple-600 mr-3" />
                <h3 className="text-xl font-bold text-presentation-text">Memory Efficiency</h3>
              </div>
              <div className="text-sm text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                Resource Usage
              </div>
            </div>
            <div className="space-y-4">
              {results.sort((a, b) => a.memory - b.memory).map((result, index) => {
                const grade = getMetricGrade(result.memory, 'memory');
                return (
                  <div key={index} className="animate-slide-in-up" style={{ animationDelay: `${1.6 + index * 0.1}s` }}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <div className={`w-4 h-4 ${result.color} rounded-full`}></div>
                        <span className="text-sm font-medium text-presentation-text">{result.name}</span>
                        <span className={`text-xs font-bold px-2 py-1 rounded ${grade.color} bg-gray-100`}>
                          {grade.grade}
                        </span>
                      </div>
                      <span className="text-sm font-bold text-presentation-text">{result.memory}MB</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`h-3 rounded-full ${result.color} animate-progress-fill relative`}
                        style={{ 
                          '--progress-width': `${Math.max(10, (250 - result.memory) / 2.5)}%`,
                          animationDelay: `${1.8 + index * 0.1}s`
                        } as React.CSSProperties}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsSlide;
