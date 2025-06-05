
import React from 'react';
import { Database, Target, BarChart3, Clock, CheckCircle, ArrowDown, FlaskConical, Settings, Zap } from 'lucide-react';

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
            Systematic approach to algorithm benchmarking and analysis
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 h-4/5">
          {/* Enhanced Left Column - Datasets & Metrics */}
          <div className="space-y-6">
            {/* Datasets */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-blue-100 animate-slide-in-left" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center mb-6 animate-fade-in" style={{ animationDelay: '0.8s' }}>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                  <Database className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-presentation-text">Research Datasets</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-4 animate-slide-in-up" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-blue-800">Clean Audio Dataset</h4>
                    <span className="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded-full">Baseline</span>
                  </div>
                  <p className="text-sm text-blue-700 mb-2">1000 tracks across multiple genres</p>
                  <div className="grid grid-cols-2 gap-2 text-xs text-blue-600">
                    <div>• High quality (320kbps)</div>
                    <div>• Diverse genres</div>
                    <div>• Varied durations</div>
                    <div>• Multiple languages</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-4 animate-slide-in-up" style={{ animationDelay: '1.2s' }}>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-green-800">Noisy Audio Dataset</h4>
                    <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded-full">Robustness</span>
                  </div>
                  <p className="text-sm text-green-700 mb-2">Same tracks with environmental noise</p>
                  <div className="grid grid-cols-2 gap-2 text-xs text-green-600">
                    <div>• SNR: 10-30dB</div>
                    <div>• Traffic noise</div>
                    <div>• Crowd chatter</div>
                    <div>• Wind/microphone</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-4 animate-slide-in-up" style={{ animationDelay: '1.4s' }}>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-purple-800">Modified Audio Dataset</h4>
                    <span className="text-xs bg-purple-200 text-purple-800 px-2 py-1 rounded-full">Distortion</span>
                  </div>
                  <p className="text-sm text-purple-700 mb-2">Speed/pitch variations and compression</p>
                  <div className="grid grid-cols-2 gap-2 text-xs text-purple-600">
                    <div>• ±5% speed change</div>
                    <div>• Pitch shifting</div>
                    <div>• MP3 compression</div>
                    <div>• Echo effects</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Metrics */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-green-100 animate-slide-in-left" style={{ animationDelay: '0.8s' }}>
              <div className="flex items-center mb-6 animate-fade-in" style={{ animationDelay: '1s' }}>
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-presentation-text">Performance Metrics</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Target, label: 'Precision', desc: 'True positive accuracy', color: 'blue' },
                  { icon: CheckCircle, label: 'Recall', desc: 'Detection completeness', color: 'green' },
                  { icon: Clock, label: 'Speed', desc: 'Processing time', color: 'orange' },
                  { icon: Database, label: 'Memory', desc: 'Resource efficiency', color: 'purple' }
                ].map((metric, index) => {
                  const Icon = metric.icon;
                  return (
                    <div key={index} className={`text-center p-4 bg-${metric.color}-50 rounded-xl border border-${metric.color}-100 hover:shadow-lg transition-all duration-300 animate-scale-in`} style={{ animationDelay: `${1.2 + index * 0.1}s` }}>
                      <Icon className={`h-8 w-8 text-${metric.color}-500 mx-auto mb-2`} />
                      <div className={`text-sm font-bold text-${metric.color}-800`}>{metric.label}</div>
                      <div className={`text-xs text-${metric.color}-600 mt-1`}>{metric.desc}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Enhanced Right Column - Testing Process */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-purple-100 animate-slide-in-right" style={{ animationDelay: '1s' }}>
            <div className="flex items-center mb-6 animate-fade-in" style={{ animationDelay: '1.2s' }}>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                <FlaskConical className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-presentation-text">Experimental Protocol</h3>
            </div>
            
            <div className="space-y-4 overflow-y-auto max-h-96">
              {[
                { 
                  step: 1, 
                  title: 'Dataset Preparation', 
                  desc: 'Audio preprocessing and segmentation',
                  details: ['Format standardization', 'Quality validation', 'Metadata extraction'],
                  color: 'blue'
                },
                { 
                  step: 2, 
                  title: 'Fingerprint Generation', 
                  desc: 'Create reference database fingerprints',
                  details: ['Feature extraction', 'Hash computation', 'Index creation'],
                  color: 'green'
                },
                { 
                  step: 3, 
                  title: 'Query Processing', 
                  desc: 'Generate test query fingerprints',
                  details: ['Noise application', 'Distortion simulation', 'Query preparation'],
                  color: 'orange'
                },
                { 
                  step: 4, 
                  title: 'Matching & Identification', 
                  desc: 'Compare queries against database',
                  details: ['Similarity computation', 'Threshold optimization', 'Result ranking'],
                  color: 'purple'
                },
                { 
                  step: 5, 
                  title: 'Results Collection', 
                  desc: 'Gather comprehensive metrics',
                  details: ['Performance logging', 'Error analysis', 'Statistical measures'],
                  color: 'red'
                },
                { 
                  step: 6, 
                  title: 'Statistical Analysis', 
                  desc: 'Analyze and compare results',
                  details: ['Significance testing', 'Confidence intervals', 'Comparative analysis'],
                  color: 'indigo'
                }
              ].map((item, index) => (
                <div key={index} className="animate-slide-in-up" style={{ animationDelay: `${1.4 + index * 0.15}s` }}>
                  <div className={`bg-${item.color}-50 border border-${item.color}-100 rounded-xl p-4 hover:shadow-lg transition-all duration-300 group`}>
                    <div className="flex items-start space-x-4">
                      <div className={`w-10 h-10 bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 text-white rounded-xl flex items-center justify-center text-sm font-bold shadow-lg group-hover:scale-105 transition-transform`}>
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <h4 className={`font-bold text-${item.color}-800 mb-1`}>{item.title}</h4>
                        <p className={`text-sm text-${item.color}-700 mb-2`}>{item.desc}</p>
                        <div className="space-y-1">
                          {item.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className={`flex items-center text-xs text-${item.color}-600`}>
                              <div className={`w-1.5 h-1.5 bg-${item.color}-400 rounded-full mr-2`}></div>
                              {detail}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  {index < 5 && (
                    <div className="flex justify-center py-2 animate-pulse">
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
