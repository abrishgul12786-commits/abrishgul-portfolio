import React, { useState } from 'react';
import { Calculator, Clock, DollarSign, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

interface QuoteCalculatorProps {
  onSelectPackage: (details: string) => void;
}

export const QuoteCalculator: React.FC<QuoteCalculatorProps> = ({ onSelectPackage }) => {
  const [serviceType, setServiceType] = useState<string>('data-entry');
  const [tier, setTier] = useState<'basic' | 'standard' | 'premium'>('standard');
  const [volume, setVolume] = useState<number>(500); // e.g. rows or pages

  // Calculation Logic
  const getCalculation = () => {
    let baseRate = 0.03; // per row/item
    let baseHours = 12;
    let serviceName = 'Data Entry & Cleaning';

    if (serviceType === 'excel') {
      baseRate = 0.05;
      baseHours = 18;
      serviceName = 'Microsoft Excel Advanced Formulas';
    } else if (serviceType === 'pdf-conversion') {
      baseRate = 0.08;
      baseHours = 12;
      serviceName = 'PDF to Excel Conversion';
    } else if (serviceType === 'ai-website') {
      baseRate = 0.15;
      baseHours = 48;
      serviceName = 'AI Website Development';
    } else if (serviceType === 'ai-agent') {
      baseRate = 0.20;
      baseHours = 72;
      serviceName = 'Custom AI Agent & Chatbot';
    }

    const tierMultiplier = tier === 'basic' ? 0.8 : tier === 'standard' ? 1.0 : 1.4;
    const rawPrice = Math.max(15, Math.round(volume * baseRate * tierMultiplier));
    const rawHours = Math.round(baseHours * (volume > 1000 ? 1.5 : 1));

    return {
      serviceName,
      price: rawPrice,
      hours: rawHours,
      days: Math.ceil(rawHours / 24),
    };
  };

  const estimate = getCalculation();

  const handleOrderEstimate = () => {
    const summary = `${estimate.serviceName} (${tier.toUpperCase()} Tier) - Est. Volume: ${volume} items. Price: ~$${estimate.price}, Delivery: ${estimate.days} days`;
    onSelectPackage(summary);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 text-white relative overflow-hidden my-12 rounded-3xl mx-4 sm:mx-6 lg:mx-8 shadow-2xl border border-teal-800/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold uppercase tracking-wider mb-2 border border-teal-500/30">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Tool</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Instant Fiverr Quote & Delivery Estimator
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-2">
            Calculate estimated turnaround time and cost for your custom Data Entry, Excel, or AI project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-800/60 p-6 sm:p-8 rounded-2xl border border-slate-700/80 backdrop-blur-md">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Service Selection */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                Select Service Category
              </label>
              <select
                value={serviceType}
                onChange={(e) => setServiceType(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 font-medium"
              >
                <option value="data-entry">Data Entry & Cleaning (Rows)</option>
                <option value="excel">Microsoft Excel Formulas & Pivot Tables</option>
                <option value="pdf-conversion">PDF to Excel Table Extraction (Pages)</option>
                <option value="ai-website">AI Website Development</option>
                <option value="ai-agent">Custom AI Agents & Chatbot Setup</option>
              </select>
            </div>

            {/* Tier Selection */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                Package Complexity
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['basic', 'standard', 'premium'] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTier(t)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold capitalize transition-all border ${
                      tier === t
                        ? 'bg-teal-600 text-white border-teal-400 shadow-md'
                        : 'bg-slate-900 text-slate-400 border-slate-700 hover:text-white'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Volume Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Estimated Quantity / Volume
                </label>
                <span className="text-xs font-extrabold text-teal-400 px-2 py-0.5 rounded-md bg-teal-950 border border-teal-800">
                  {volume} {serviceType.includes('pdf') ? 'Pages' : 'Rows / Units'}
                </span>
              </div>
              <input
                type="range"
                min={50}
                max={5000}
                step={50}
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                className="w-full accent-teal-500 h-2 bg-slate-900 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
                <span>50 Units</span>
                <span>2,500 Units</span>
                <span>5,000 Units</span>
              </div>
            </div>
          </div>

          {/* Estimate Result Box */}
          <div className="lg:col-span-5 bg-gradient-to-br from-teal-900/80 to-slate-900 p-6 rounded-2xl border border-teal-500/40 text-center flex flex-col justify-between h-full">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-teal-300">
                Estimated Fiverr Package
              </span>
              <h4 className="text-lg font-bold text-white mt-1 mb-4">
                {estimate.serviceName}
              </h4>

              <div className="py-4 border-y border-teal-800/60 my-4 flex items-center justify-around">
                <div>
                  <span className="text-[10px] uppercase text-slate-400 font-semibold block">Est. Cost</span>
                  <span className="text-3xl font-black text-teal-400 flex items-center justify-center">
                    ${estimate.price}
                  </span>
                </div>
                <div className="h-8 w-px bg-teal-800/60"></div>
                <div>
                  <span className="text-[10px] uppercase text-slate-400 font-semibold block">Delivery</span>
                  <span className="text-xl font-bold text-white flex items-center justify-center gap-1 mt-1">
                    <Clock className="w-4 h-4 text-emerald-400" />
                    {estimate.days} {estimate.days === 1 ? 'Day' : 'Days'}
                  </span>
                </div>
              </div>

              <ul className="text-xs text-slate-300 space-y-1.5 text-left mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>100% Accuracy & Manual Double Check</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Unlimited Revisions on Fiverr</span>
                </li>
              </ul>
            </div>

            <button
              onClick={handleOrderEstimate}
              className="w-full py-3 rounded-xl font-bold text-white bg-teal-600 hover:bg-teal-500 shadow-lg shadow-teal-600/30 flex items-center justify-center gap-2 text-sm transition-all active:scale-95"
            >
              <span>Order Custom Package</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
