'use client';

import React from 'react';

const clients = [
  { name: 'TRW', sub: 'THE ROUGE WALL' },
  { name: 'DI', sub: 'design inc' },
  { name: 'SAAR', sub: 'सॉर' },
  { name: 'PAA', sub: 'Priyanka Arjun & Assoc.' },
  { name: 'ARCO', sub: 'Architecture Studio' },
  { name: 'MARBLE', sub: 'Design Collective' },
];

const ClientsMarquee: React.FC = () => {
  // Duplicate clients to create a seamless infinite loop
  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <section className="w-full py-12 bg-white overflow-hidden border-y border-gray-100">
      <div className="container mx-auto px-6 mb-8 text-center">
        <h3 className="text-gray-400 text-sm font-bold tracking-[0.3em] uppercase">Trusted Partners</h3>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee flex gap-8 whitespace-nowrap">
          {duplicatedClients.map((client, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-64 h-32 bg-white border border-[#C6A052]/30 rounded-xl flex flex-col items-center justify-center p-6 hover:border-[#C6A052] transition-colors shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#4A3228] flex items-center justify-center text-white font-black text-xl rounded">
                  {client.name[0]}
                </div>
                <div className="flex flex-col">
                  <span className="font-black text-2xl tracking-tighter text-[#4A3228] leading-none">
                    {client.name}
                  </span>
                  <span className="text-[10px] tracking-wider font-bold text-gray-400 uppercase leading-none mt-1">
                    {client.sub}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ClientsMarquee;
