
import React from 'react';
import { TrendingUp, Clock, Database, Target } from 'lucide-react';

const ResultsSlide = () => {
  const results = [
    { name: 'Mediaprobe', precision: 95, recall: 92, time: 120, memory: 85, color: 'bg-blue-500' },
    { name: 'ACRCloud', precision: 98, recall: 94, time: 80, memory: 60, color: 'bg-green-500' },
    { name: 'Audfprint', precision: 88, recall: 85, time: 200, memory: 120, color: 'bg-purple-500' },
    { name: 'Dejavu', precision: 82, recall: 78, time: 350, memory: 200, color: 'bg-orange-500' },
    { name: 'Olaf', precision: 90, recall: 87, time: 150, memory: 90, color: 'bg-red-500' },
    { name: 'Soundfingerprinting', precision: 93, recall: 89, time: 110, memory: 75, color: 'bg-indigo-500' }
  ];

  return (
    <div className="h-full bg-gradient-to-br from-white to-gray-50 py-8 px-12">
      <div className="max-w-7xl mx-auto h-full">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in-down">
          <h1 className="text-5xl font-bold text-presentation-text font-montserrat mb-4">
            Experimental Results
          </h1>
          <p className="text-xl text-presentation-text-light animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Comprehensive performance analysis across all metrics
          </p>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-2 gap-8 h-4/5">
          {/* Precision Chart */}
          <div className="bg-white rounded-xl shadow-lg p-6 animate-fade-in-left" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center mb-4 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
              <Target className="h-6 w-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-bold text-presentation-text">Precision (%)</h3>
            </div>
            <div className="space-y-3">
              {results.map((result, index) => (
                <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${1.2 + index * 0.2}s` }}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-presentation-text">{result.name}</span>
                    <span className="text-sm font-bold text-presentation-text">{result.precision}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${result.color} animate-progress-fill`}
                      style={{ 
                        '--progress-width': `${result.precision}%`,
                        animationDelay: `${1.4 + index * 0.2}s`
                      } as React.CSSProperties}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recall Chart */}
          <div className="bg-white rounded-xl shadow-lg p-6 animate-fade-in-right" style={{ animationDelay: '0.8s' }}>
            <div className="flex items-center mb-4 animate-fade-in-up" style={{ animationDelay: '1.1s' }}>
              <TrendingUp className="h-6 w-6 text-green-600 mr-3" />
              <h3 className="text-xl font-bold text-presentation-text">Recall (%)</h3>
            </div>
            <div className="space-y-3">
              {results.map((result, index) => (
                <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${1.4 + index * 0.2}s` }}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-presentation-text">{result.name}</span>
                    <span className="text-sm font-bold text-presentation-text">{result.recall}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${result.color} animate-progress-fill`}
                      style={{ 
                        '--progress-width': `${result.recall}%`,
                        animationDelay: `${1.6 + index * 0.2}s`
                      } as React.CSSProperties}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Execution Time Chart */}
          <div className="bg-white rounded-xl shadow-lg p-6 animate-fade-in-left" style={{ animationDelay: '1.0s' }}>
            <div className="flex items-center mb-4 animate-fade-in-up" style={{ animationDelay: '1.3s' }}>
              <Clock className="h-6 w-6 text-orange-600 mr-3" />
              <h3 className="text-xl font-bold text-presentation-text">Execution Time (ms)</h3>
            </div>
            <div className="space-y-3">
              {results.map((result, index) => (
                <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${1.6 + index * 0.2}s` }}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-presentation-text">{result.name}</span>
                    <span className="text-sm font-bold text-presentation-text">{result.time}ms</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${result.color} animate-progress-fill`}
                      style={{ 
                        '--progress-width': `${(400 - result.time) / 4}%`,
                        animationDelay: `${1.8 + index * 0.2}s`
                      } as React.CSSProperties}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Memory Usage Chart */}
          <div className="bg-white rounded-xl shadow-lg p-6 animate-fade-in-right" style={{ animationDelay: '1.2s' }}>
            <div className="flex items-center mb-4 animate-fade-in-up" style={{ animationDelay: '1.5s' }}>
              <Database className="h-6 w-6 text-purple-600 mr-3" />
              <h3 className="text-xl font-bold text-presentation-text">Memory Usage (MB)</h3>
            </div>
            <div className="space-y-3">
              {results.map((result, index) => (
                <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${1.8 + index * 0.2}s` }}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-presentation-text">{result.name}</span>
                    <span className="text-sm font-bold text-presentation-text">{result.memory}MB</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${result.color} animate-progress-fill`}
                      style={{ 
                        '--progress-width': `${(250 - result.memory) / 2.5}%`,
                        animationDelay: `${2.0 + index * 0.2}s`
                      } as React.CSSProperties}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsSlide;
