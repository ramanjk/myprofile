// @flow strict

import * as React from 'react';

function ProjectCard({ project }) {

  return (
    <div className="bg-slate-900 border-slate-700 relative rounded-lg border-2 w-full overflow-hidden shadow-2xl hover:shadow-blue-500/20 transition-all duration-500">
      
      {/* DevOps Status Bar */}
      <div className="bg-slate-800 px-6 py-3 border-b border-slate-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex space-x-1">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <div className="w-3 h-3 rounded-full bg-orange-500"></div>
            </div>
            <span className="text-slate-400 text-sm font-mono">SYSTEM STATUS: OPERATIONAL</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400 text-sm font-mono">ACTIVE</span>
          </div>
        </div>
      </div>

      {/* Project Header */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 px-6 py-4 border-b border-slate-700">
        <h3 className="text-blue-400 text-xl font-bold mb-1">
          {project.name}
        </h3>
        <div className="flex items-center space-x-2">
          <span className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-semibold">
            {project.role}
          </span>
          <span className="text-slate-400 text-sm">Infrastructure Project</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6">
        
        {/* Project Overview */}
        <div>
          <h4 className="text-slate-300 font-semibold mb-3 flex items-center">
            <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Project Overview
          </h4>
          <p className="text-slate-400 leading-relaxed text-sm">
            {project.description}
          </p>
        </div>

        {/* Technology Stack */}
        <div>
          <h4 className="text-slate-300 font-semibold mb-3 flex items-center">
            <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
            Technology Stack
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {project.tools.map((tool, i) => (
              <div 
                key={i} 
                className="bg-slate-800 border border-slate-600 text-slate-300 px-3 py-2 rounded text-sm font-mono hover:bg-slate-700 hover:border-blue-500 transition-all duration-300"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>

        {/* Metrics/Stats */}
        <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-green-400 text-lg font-bold">99.9%</div>
              <div className="text-slate-400 text-xs">Uptime</div>
            </div>
            <div>
              <div className="text-blue-400 text-lg font-bold">24/7</div>
              <div className="text-slate-400 text-xs">Monitoring</div>
            </div>
            <div>
              <div className="text-orange-400 text-lg font-bold">Auto</div>
              <div className="text-slate-400 text-xs">Scaling</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectCard;