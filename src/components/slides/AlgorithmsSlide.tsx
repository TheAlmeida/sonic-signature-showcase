
import React from 'react';
import { Building2, Cloud, Github, Database, Cpu, Zap, Code, Shield, Globe } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const AlgorithmsSlide = () => {
  const commercialAlgorithms = [
    {
      name: 'MP ACR',
      type: 'Commercial',
      icon: Building2,
      color: 'bg-blue-600',
      description: 'No access to source code'
    },
    {
      name: 'ACRCloud',
      type: 'Commercial API',
      icon: Cloud,
      color: 'bg-green-600',
      description: 'No access to source code'
    }
  ];

  const tableData = [
    {
      feature: 'Language',
      audfprint: 'Python',
      dejavu: 'Python',
      olaf: 'C',
      soundfingerprinting: 'C#'
    },
    {
      feature: 'Open Source',
      audfprint: 'Yes',
      dejavu: 'Yes',
      olaf: 'Yes',
      soundfingerprinting: 'Yes'
    },
    {
      feature: 'Hash Type',
      audfprint: '32-bit int; landmark pairs (freq1, freq2, Δt)',
      dejavu: '160-bit SHA1 (80-bit used); (freq1, freq2, Δt)',
      olaf: '64-bit int; 3 peaks (freq, mag, Δt)',
      soundfingerprinting: 'MinHash vector; wavelet coeffs'
    },
    {
      feature: 'Database',
      audfprint: '.pklz file with hash table',
      dejavu: 'Relational DB (MySQL/PostgreSQL)',
      olaf: 'LMDB',
      soundfingerprinting: 'In-memory or external (e.g., Emy)'
    },
    {
      feature: 'Peak Pairing',
      audfprint: 'Yes',
      dejavu: 'Yes',
      olaf: 'Yes',
      soundfingerprinting: 'No (wavelet-based)'
    },
    {
      feature: 'Matching Strategy',
      audfprint: 'Offset voting',
      dejavu: 'Offset voting',
      olaf: 'Histogram of (track_id, delta) votes',
      soundfingerprinting: 'Hamming + temporal alignment'
    },
    {
      feature: 'Noise Robustness',
      audfprint: 'High',
      dejavu: 'Medium–High',
      olaf: 'High',
      soundfingerprinting: 'Medium'
    }
  ];

  return (
    <div className="h-full relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Digital Circuit Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="40" cy="40" r="2" fill="#60a5fa" />
              <path d="M20,40 L60,40 M40,20 L40,60" stroke="#60a5fa" strokeWidth="1" opacity="0.6" />
              <circle cx="20" cy="20" r="1.5" fill="#3b82f6" />
              <circle cx="60" cy="60" r="1.5" fill="#3b82f6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      {/* Floating Algorithm Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 animate-gentle-float opacity-20">
          <Code className="h-16 w-16 text-blue-400" />
        </div>
        <div className="absolute bottom-32 left-16 animate-gentle-float opacity-15" style={{ animationDelay: '2s' }}>
          <Shield className="h-14 w-14 text-indigo-400" />
        </div>
        <div className="absolute top-1/3 right-16 animate-gentle-float opacity-18" style={{ animationDelay: '4s' }}>
          <Globe className="h-12 w-12 text-cyan-400" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto h-full py-8 px-12">
        {/* Enhanced Header */}
        <div className="text-center mb-8 animate-slide-in-up">
          <div className="inline-flex items-center space-x-2 bg-blue-500/20 backdrop-blur-sm text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-4 animate-fade-in border border-blue-400/30">
            <Code className="h-4 w-4" />
            <span>Algorithm Analysis</span>
          </div>
          <h1 className="text-5xl font-bold text-white font-montserrat mb-4 animate-slide-in-down" style={{ animationDelay: '0.2s' }}>
            Analyzed Algorithms
          </h1>
          <p className="text-xl text-blue-200 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Comprehensive evaluation of commercial and open-source solutions
          </p>
        </div>

        {/* Commercial Algorithms Summary */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          {commercialAlgorithms.map((algorithm, index) => {
            const Icon = algorithm.icon;
            return (
              <div
                key={index}
                className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 border border-gray-200 animate-scale-in"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <div className={`absolute top-0 left-0 right-0 h-1 ${algorithm.color}`}></div>
                <div className="flex items-center mb-4">
                  <div className={`w-14 h-14 ${algorithm.color} rounded-xl flex items-center justify-center mr-4 shadow-lg`}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900">
                      {algorithm.name}
                    </h3>
                    <span className="text-xs px-2 py-1 rounded-full font-medium bg-blue-100 text-blue-800">
                      {algorithm.type}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  {algorithm.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Open Source Algorithms Comparison Table */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 border border-gray-200 animate-slide-in-up" style={{ animationDelay: '0.8s' }}>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Open Source Algorithms Comparison
          </h2>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-bold text-gray-900">Feature</TableHead>
                  <TableHead className="font-bold text-purple-700">Audfprint</TableHead>
                  <TableHead className="font-bold text-orange-700">Dejavu</TableHead>
                  <TableHead className="font-bold text-red-700">Olaf</TableHead>
                  <TableHead className="font-bold text-indigo-700">Soundfingerprinting</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tableData.map((row, index) => (
                  <TableRow key={index} className="hover:bg-gray-50">
                    <TableCell className="font-medium text-gray-900">{row.feature}</TableCell>
                    <TableCell className="text-purple-700">{row.audfprint}</TableCell>
                    <TableCell className="text-orange-700">{row.dejavu}</TableCell>
                    <TableCell className="text-red-700">{row.olaf}</TableCell>
                    <TableCell className="text-indigo-700">{row.soundfingerprinting}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Enhanced Summary Stats */}
        <div className="grid grid-cols-3 gap-4 mt-6 animate-slide-in-up" style={{ animationDelay: '1.2s' }}>
          <div className="bg-blue-500/20 backdrop-blur-sm rounded-xl p-4 text-center border border-blue-400/30">
            <div className="text-3xl font-bold text-blue-300 mb-1">2</div>
            <div className="text-sm text-blue-200 font-medium">Commercial Solutions</div>
            <div className="text-xs text-blue-400">MP ACR, ACRCloud</div>
          </div>
          <div className="bg-green-500/20 backdrop-blur-sm rounded-xl p-4 text-center border border-green-400/30">
            <div className="text-3xl font-bold text-green-300 mb-1">4</div>
            <div className="text-sm text-green-200 font-medium">Open Source Libraries</div>
            <div className="text-xs text-green-400">Python, C, C# implementations</div>
          </div>
          <div className="bg-purple-500/20 backdrop-blur-sm rounded-xl p-4 text-center border border-purple-400/30">
            <div className="text-3xl font-bold text-purple-300 mb-1">7</div>
            <div className="text-sm text-purple-200 font-medium">Key Features Compared</div>
            <div className="text-xs text-purple-400">Comprehensive analysis</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlgorithmsSlide;
