import React, { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { Wifi, Server, Network } from 'lucide-react';

interface ZoneInfo {
  name: string;
  stats: {
    servers: number;
    coverage: string;
    users: string;
    speed: string;
  };
  description: string;
}

const zones: ZoneInfo[] = [
  {
    name: 'North America',
    stats: {
      servers: 250,
      coverage: '98%',
      users: '2.5M+',
      speed: '2.1Gbps'
    },
    description: 'Our largest network with extensive coverage across major metropolitan areas and rural zones.'
  },
  {
    name: 'South America',
    stats: {
      servers: 120,
      coverage: '85%',
      users: '1.2M+',
      speed: '1.8Gbps'
    },
    description: 'Rapidly expanding network with strong presence in Brazil, Argentina, and Colombia.'
  },
  {
    name: 'Europe',
    stats: {
      servers: 280,
      coverage: '95%',
      users: '3.1M+',
      speed: '2.5Gbps'
    },
    description: 'Dense network coverage across EU countries with multiple redundant paths.'
  },
  {
    name: 'Africa',
    stats: {
      servers: 85,
      coverage: '65%',
      users: '800K+',
      speed: '1.5Gbps'
    },
    description: 'Growing presence with focus on major urban centers and emerging tech hubs.'
  },
  {
    name: 'Asia',
    stats: {
      servers: 310,
      coverage: '90%',
      users: '4.2M+',
      speed: '2.8Gbps'
    },
    description: 'Extensive coverage in East Asia with rapid expansion across South and Southeast Asia.'
  },
  {
    name: 'Oceania',
    stats: {
      servers: 75,
      coverage: '92%',
      users: '600K+',
      speed: '2.2Gbps'
    },
    description: 'Strong presence in Australia and New Zealand with Pacific Island expansion underway.'
  }
];

export function NinternetZonePage() {
  const [activeZone, setActiveZone] = useState<ZoneInfo | null>(null);

  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      <Navigation />

      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(168,85,247,0.15),transparent_50%)]"></div>

      <div className="relative pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <img 
              src="https://rjogrcexebenouodzjhk.supabase.co/storage/v1/object/public/Chillreach/svg/White%20logo%20-%20no%20background.svg" 
              alt="Chillreach" 
              className="h-16 w-auto mx-auto mb-6"
            />
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display">
              <span className="text-gradient">Global Network Zones</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto font-mono">
              Explore our worldwide infrastructure and coverage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {zones.map((zone) => (
              <div
                key={zone.name}
                className={`bg-slate-800/50 backdrop-blur-xl border ${
                  activeZone?.name === zone.name ? 'border-cyan-500' : 'border-slate-700'
                } rounded-2xl p-6 hover:border-cyan-500 transition-all duration-300 cursor-pointer`}
                onMouseEnter={() => setActiveZone(zone)}
                onMouseLeave={() => setActiveZone(null)}
              >
                <h3 className="text-2xl font-bold text-white mb-4 font-display">
                  {zone.name}
                </h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-700/50 p-3 rounded-lg">
                    <Server className="h-5 w-5 text-cyan-400 mb-2" />
                    <div className="text-2xl font-bold text-white font-mono">{zone.stats.servers}</div>
                    <div className="text-sm text-slate-400">Servers</div>
                  </div>
                  <div className="bg-slate-700/50 p-3 rounded-lg">
                    <Wifi className="h-5 w-5 text-cyan-400 mb-2" />
                    <div className="text-2xl font-bold text-white font-mono">{zone.stats.coverage}</div>
                    <div className="text-sm text-slate-400">Coverage</div>
                  </div>
                  <div className="bg-slate-700/50 p-3 rounded-lg">
                    <Network className="h-5 w-5 text-cyan-400 mb-2" />
                    <div className="text-2xl font-bold text-white font-mono">{zone.stats.speed}</div>
                    <div className="text-sm text-slate-400">Avg Speed</div>
                  </div>
                  <div className="bg-slate-700/50 p-3 rounded-lg">
                    <img 
                      src="https://rjogrcexebenouodzjhk.supabase.co/storage/v1/object/public/Chillreach/svg/symbol.svg" 
                      alt="Chillreach" 
                      className="h-5 w-5 mb-2"
                    />
                    <div className="text-2xl font-bold text-white font-mono">{zone.stats.users}</div>
                    <div className="text-sm text-slate-400">Users</div>
                  </div>
                </div>
                <p className="text-slate-300 font-mono text-sm">
                  {zone.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}