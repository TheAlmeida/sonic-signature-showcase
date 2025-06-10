
import React from 'react';
import { Target, BarChart3, Clock, Database, FlaskConical, Settings, Zap, CheckCircle } from 'lucide-react';

const MethodologySlide = () => {
  return (
    <div className="h-full relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50">
      {/* Scientific Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 20%, #3b82f6 2px, transparent 2px),
            radial-gradient(circle at 80% 80%, #6366f1 2px, transparent 2px),
            radial-gradient(circle at 40% 60%, #3b82f6 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px, 120px 120px, 60px 60px'
        }}></div>
      </div>

      {/* Laboratory Equipment Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 animate-gentle-float opacity-15">
          <FlaskConical className="h-16 w-16 text-blue-500" />
        </div>
        <div className="absolute bottom-32 left-16 animate-gentle-float opacity-12" style={{ animationDelay: '2s' }}>
          <Settings className="h-14 w-14 text-purple-500" />
        </div>
        <div className="absolute top-1/3 left-16 animate-gentle-float opacity-18" style={{ animationDelay: '4s' }}>
          <Zap className="h-12 w-12 text-indigo-500" />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto h-full py-8 px-12">
        {/* Enhanced Header */}
        <div className="text-center mb-8 animate-slide-in-up">
          <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-4 animate-fade-in">
            <FlaskConical className="h-4 w-4" />
            <span>Scientific Method</span>
          </div>
          <h1 className="text-5xl font-bold text-presentation-text font-montserrat mb-4 animate-slide-in-down" style={{ animationDelay: '0.2s' }}>
            Evaluation Methodology
          </h1>
          <p className="text-xl text-presentation-text-light animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Three-metric approach to algorithm benchmarking and analysis
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 h-4/5">
          {/* Main Metrics Overview */}
          <div className="grid grid-cols-3 gap-6 animate-slide-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="bg-blue-50 rounded-2xl p-6 text-center border border-blue-200">
              <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-blue-800 mb-2">Matching Quality</h3>
              <p className="text-sm text-blue-600">Precision & Recall evaluation</p>
            </div>
            <div className="bg-green-50 rounded-2xl p-6 text-center border border-green-200">
              <Clock className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-green-800 mb-2">Execution Time</h3>
              <p className="text-sm text-green-600">Processing speed analysis</p>
            </div>
            <div className="bg-purple-50 rounded-2xl p-6 text-center border border-purple-200">
              <Database className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-purple-800 mb-2">Memory Efficiency</h3>
              <p className="text-sm text-purple-600">Storage requirements</p>
            </div>
          </div>

          {/* Detailed Methodology */}
          <div className="grid grid-cols-3 gap-6">
            {/* Matching Evaluation */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-blue-100 animate-slide-in-left" style={{ animationDelay: '0.8s' }}>
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-lg font-bold text-presentation-text">Matching Evaluation</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Audio Fingerprinting Benchmark Toolkit</h4>
                  <p className="text-sm text-blue-700 mb-2">Developed by Pexeso (2023)</p>
                  <div className="text-xs text-blue-600 space-y-1">
                    <div>• Reference files (original audio)</div>
                    <div>• Queries (modified versions)</div>
                    <div>• Annotations (CSV with modifications)</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800">Evaluation Levels:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Track-Level:</span>
                        <p className="text-gray-600 text-xs">Match exists regardless of time</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Segment-Level:</span>
                        <p className="text-gray-600 text-xs">Time-aligned segment matching</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Bounding Box-Level:</span>
                        <p className="text-gray-600 text-xs">Strict query-reference alignment</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-700"><strong>Metrics:</strong> Precision & Recall (F-score excluded due to limited interpretative value)</p>
                </div>
              </div>
            </div>

            {/* Memory Usage Evaluation */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-purple-100 animate-slide-in-up" style={{ animationDelay: '1s' }}>
              <div className="flex items-center mb-4">
                <Database className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-lg font-bold text-presentation-text">Memory Usage</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-800 mb-2">Persistent Storage Analysis</h4>
                  <p className="text-sm text-purple-700">Required storage after processing reference files</p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800">Measurement Approach:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>Size of generated data (fingerprints, indexes)</div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>Values normalized per second of audio</div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>Uniform dataset for fairness</div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-700"><strong>Goal:</strong> Compare efficiency across systems with normalized metrics</p>
                </div>
              </div>
            </div>

            {/* Execution Time Evaluation */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-green-100 animate-slide-in-right" style={{ animationDelay: '1.2s' }}>
              <div className="flex items-center mb-4">
                <Clock className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-lg font-bold text-presentation-text">Execution Time</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">Processing Phase Analysis</h4>
                  <p className="text-sm text-green-700">Time measurement for each phase</p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800">Measured Phases:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>Fingerprint extraction</div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>Database insertion</div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>Query matching</div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-700 mb-2"><strong>Testing:</strong> 20 iterations (10 ingestion, 10 recognition)</p>
                  <p className="text-xs text-gray-700"><strong>Metric:</strong> Execution time as % of audio duration</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-3">
                  <p className="text-xs text-blue-700"><strong>Note:</strong> After adding ads, previously excluded algorithms showed improved performance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MethodologySlide;
