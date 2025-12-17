import React from 'react';
import { TrendingUp, Loader2, MinusCircle } from 'lucide-react';

const ValueProp: React.FC = () => {
  return (
    <section className="bg-[#281647] py-32 md:py-48 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Watch your sales grow powered by cutting edge AI.
          </h2>
          <p className="text-[#FCFAF7] text-lg md:text-xl max-w-2xl mx-auto">
            Designed to convert buyers. Built to scale.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Card 1 */}
          <div className="flex flex-col items-start space-y-6">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-2">
              <TrendingUp className="w-7 h-7 text-slate-900" />
            </div>
            <h3 className="text-2xl font-semibold">High engagement</h3>
            <p className="text-[#FCFAF7] leading-relaxed text-base">
              Plex AI engages buyers around what matters to them instantly. No forms. No friction. Instant answers.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-start space-y-6">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-2">
              <Loader2 className="w-7 h-7 text-slate-900" />
            </div>
            <h3 className="text-2xl font-semibold">High intent SQL's</h3>
            <p className="text-[#FCFAF7] leading-relaxed text-base">
              Plex AI qualifies buyers through real conversations. So sales focuses on deals that actually move.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-start space-y-6">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-2">
              <MinusCircle className="w-7 h-7 text-slate-900" />
            </div>
            <h3 className="text-2xl font-semibold">Reduce cost</h3>
            <p className="text-[#FCFAF7] leading-relaxed text-base">
              Only high-intent buyers reach your reps. Less pipeline noise. Lower acquisition and sales costs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProp;