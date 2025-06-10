
import React from 'react';
import { Database, FileText, Headphones, Mic, Volume2, Activity, BarChart3, Shield } from 'lucide-react';

const DatasetSlide = () => {
  const datasets = [
    {
      icon: FileText,
      title: 'Open Source Dataset (pexafb_easy_small)',
      color: 'blue',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      details: [
        'Sourced from the Audio Fingerprinting Benchmark Toolkit repository',
        'Includes 99 reference tracks from the Free Music Archive (FMA)',
        '21 query files containing about 100 modified audio segments (e.g., echo, pitch changes, noise)',
        'Used during the initial validation phase of the implemented algorithms'
      ]
    },
    {
      icon: Headphones,
      title: 'Experimental Dataset',
      color: 'green',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      details: [
        'Designed during the internship to reflect the structure and requirements of Mediaprobe\'s internal database',
        'Contains 163 reference files, approximately 81% of which are music',
        'Also includes films, sports, talk-shows, and esports content',
        'Queries of 5 to 10 seconds were generated with simulated acoustic distortions',
        'Served as the main dataset for performance and robustness evaluation'
      ]
    },
    {
      icon: Volume2,
      title: 'Expanded Version with Advertising Content',
      color: 'purple',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      details: [
        'Integrated 18 advertisements (from recent Super Bowl editions) into the experimental dataset',
        'Ads were distributed among the other content types to simulate realistic broadcasting environments',
        'The final version consists of 182 reference files totaling over 90 minutes of audio',
        'Used for complex query scenarios and indirect acoustic capture tests'
      ]
    }
  ];

  return (
    <div className="h-full relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Data Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, #3b82f6 1px, transparent 1px),
            linear-gradient(180deg, #3b82f6 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Dataset Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 animate-gentle-float opacity-15">
          <Database className="h-16 w-16 text-blue-500" />
        </div>
        <div className="absolute bottom-32 left-16 animate-gentle-float opacity-12" style={{ animationDelay: '2s' }}>
          <BarChart3 className="h-14 w-14 text-green-500" />
        </div>
        <div className="absolute top-1/3 left-16 animate-gentle-float opacity-18" style={{ animationDelay: '4s' }}>
          <Activity className="h-12 w-12 text-purple-500" />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto h-full py-8 px-12">
        {/* Enhanced Header */}
        <div className="text-center mb-8 animate-slide-in-up">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4 animate-fade-in">
            <Database className="h-4 w-4" />
            <span>Research Data</span>
          </div>
          <h1 className="text-5xl font-bold text-presentation-text font-montserrat mb-4 animate-slide-in-down" style={{ animationDelay: '0.2s' }}>
            Datasets
          </h1>
          <p className="text-xl text-presentation-text-light animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Comprehensive audio datasets used for algorithm evaluation and testing
          </p>
        </div>

        {/* Dataset Cards */}
        <div className="space-y-6 mb-8">
          {datasets.map((dataset, index) => {
            const Icon = dataset.icon;
            return (
              <div
                key={index}
                className={`bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 border ${dataset.borderColor} hover:shadow-2xl transition-all duration-500 animate-slide-in-left`}
                style={{ animationDelay: `${0.6 + index * 0.2}s` }}
              >
                <div className="flex items-start space-x-6">
                  <div className={`w-16 h-16 ${dataset.bgColor} ${dataset.borderColor} border-2 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <Icon className={`h-8 w-8 text-${dataset.color}-600`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-presentation-text mb-4">{dataset.title}</h3>
                    <ul className="space-y-2">
                      {dataset.details.map((detail, detailIndex) => (
                        <li 
                          key={detailIndex}
                          className="flex items-start space-x-3 text-sm text-presentation-text-light"
                        >
                          <div className={`w-2 h-2 bg-${dataset.color}-500 rounded-full mt-2 flex-shrink-0`}></div>
                          <span className="leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Notes */}
        <div className="grid grid-cols-2 gap-6 animate-slide-in-up" style={{ animationDelay: '1.4s' }}>
          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-200">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                <Mic className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-presentation-text">Realistic Testing</h4>
            </div>
            <p className="text-sm text-presentation-text-light leading-relaxed">
              A realistic test was conducted using indirect acoustic capture (re-recording via mobile phone). 
              However, the results were considered artificially inflated due to all reference clips being included in the query. 
              The relevant segments were therefore reintegrated into the experimental dataset under controlled conditions.
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-presentation-text">Standardization</h4>
            </div>
            <p className="text-sm text-presentation-text-light leading-relaxed">
              All audio files were standardized to .wav, mono, 8 kHz format to ensure consistency during testing. 
              This standardization was crucial for fair comparison across different algorithms and reliable evaluation metrics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatasetSlide;
