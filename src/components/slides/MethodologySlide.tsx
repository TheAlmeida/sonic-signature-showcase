
import React from 'react';
import { Database, Target, BarChart3, Clock, CheckCircle, ArrowDown } from 'lucide-react';

const MethodologySlide = () => {
  return (
    <div className="h-full bg-gradient-to-br from-white to-blue-50 py-8 px-12">
      <div className="max-w-6xl mx-auto h-full">
        {/* Header */}
        <div className="text-center mb-8 animate-slide-in-up">
          <h1 className="text-5xl font-bold text-presentation-text font-montserrat mb-4">
            Evaluation Methodology
          </h1>
          <p className="text-xl text-presentation-text-light">
            Systematic approach to algorithm benchmarking
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 h-4/5">
          {/* Left Column - Datasets & Metrics */}
          <div className="space-y-6">
            {/* Datasets */}
            <div className="bg-white rounded-xl shadow-lg p-6 animate-slide-in-left">
              <div className="flex items-center mb-4">
                <Database className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-presentation-text">Datasets</h3>
              </div>
              <div className="space-y-3">
                <div className="bg-blue-50 rounded-lg p-3">
                  <h4 className="font-semibold text-blue-800 mb-1">Clean Audio Dataset</h4>
                  <p className="text-sm text-blue-600">1000 tracks, various genres, high quality</p>
                </div>
                <div className="bg-green-50 rounded-lg p-3">
                  <h4 className="font-semibold text-green-800 mb-1">Noisy Audio Dataset</h4>
                  <p className="text-sm text-green-600">Same tracks with added noise (SNR: 10-30dB)</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-3">
                  <h4 className="font-semibold text-purple-800 mb-1">Modified Audio Dataset</h4>
                  <p className="text-sm text-purple-600">Speed/pitch variations, compression artifacts</p>
                </div>
              </div>
            </div>

            {/* Metrics */}
            <div className="bg-white rounded-xl shadow-lg p-6 animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center mb-4">
                <BarChart3 className="h-6 w-6 text-green-600 mr-3" />
                <h3 className="text-xl font-bold text-presentation-text">Evaluation Metrics</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <Target className="h-6 w-6 text-blue-500 mx-auto mb-1" />
                  <div className="text-sm font-semibold">Precision</div>
                  <div className="text-xs text-gray-600">True positives accuracy</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-green-500 mx-auto mb-1" />
                  <div className="text-sm font-semibold">Recall</div>
                  <div className="text-xs text-gray-600">Detection completeness</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <Clock className="h-6 w-6 text-orange-500 mx-auto mb-1" />
                  <div className="text-sm font-semibold">Execution Time</div>
                  <div className="text-xs text-gray-600">Processing speed</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <Database className="h-6 w-6 text-purple-500 mx-auto mb-1" />
                  <div className="text-sm font-semibold">Memory Usage</div>
                  <div className="text-xs text-gray-600">Resource efficiency</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Testing Process */}
          <div className="bg-white rounded-xl shadow-lg p-6 animate-slide-in-right">
            <h3 className="text-xl font-bold text-presentation-text mb-6 text-center">
              Testing Process Flow
            </h3>
            
            <div className="space-y-4">
              {[
                { step: 1, title: 'Dataset Preparation', desc: 'Audio preprocessing and segmentation' },
                { step: 2, title: 'Fingerprint Generation', desc: 'Create fingerprints for reference database' },
                { step: 3, title: 'Query Processing', desc: 'Generate fingerprints for test queries' },
                { step: 4, title: 'Matching & Identification', desc: 'Compare queries against database' },
                { step: 5, title: 'Results Collection', desc: 'Gather performance metrics' },
                { step: 6, title: 'Statistical Analysis', desc: 'Analyze and compare results' }
              ].map((item, index) => (
                <div key={index} className="animate-slide-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-8 h-8 bg-presentation-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-presentation-text">{item.title}</h4>
                      <p className="text-sm text-presentation-text-light">{item.desc}</p>
                    </div>
                  </div>
                  {index < 5 && (
                    <div className="ml-4 animate-pulse">
                      <ArrowDown className="h-4 w-4 text-gray-400" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MethodologySlide;
