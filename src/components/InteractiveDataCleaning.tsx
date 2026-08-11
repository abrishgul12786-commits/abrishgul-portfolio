import React, { useState } from 'react';
import { Table, Sparkles, CheckCircle2, AlertTriangle, ArrowRight, RefreshCw, FileCheck } from 'lucide-react';

export const InteractiveDataCleaning: React.FC = () => {
  const [viewState, setViewState] = useState<'messy' | 'cleaned'>('messy');
  const [isCleaning, setIsCleaning] = useState<boolean>(false);
  const [cleanedCount, setCleanedCount] = useState<number>(0);

  const rawData = [
    { id: 101, name: 'jOHn sMItH', email: 'JOHN.SMITH@GMAIL.COM ', phone: '5550192', address: '123 MAIN ST', status: 'Messy Caps & Phone' },
    { id: 102, name: 'eLIZABETH tAYLOR', email: 'elizabeth@yahoo.com', phone: '5550193', address: '456 OAK AVE', status: 'Inconsistent Format' },
    { id: 103, name: 'jOHn sMItH', email: 'JOHN.SMITH@GMAIL.COM ', phone: '5550192', address: '123 MAIN ST', status: 'DUPLICATE RECORD' },
    { id: 104, name: 'marcus vance', email: 'marcus.v@domain.net', phone: '+1-555-0194', address: '789 PINE RD', status: 'Lowercase Name' },
    { id: 105, name: 'sOPHIA cHEN', email: 'sophia.chen@tech.org ', phone: '5550195', address: '101 MAPLE ST', status: 'Trailing Space' },
  ];

  const cleanData = [
    { id: 101, name: 'John Smith', email: 'john.smith@gmail.com', phone: '+1 (555) 012-0192', address: '123 Main St', status: 'Cleaned & Standardized' },
    { id: 102, name: 'Elizabeth Taylor', email: 'elizabeth@yahoo.com', phone: '+1 (555) 012-0193', address: '456 Oak Ave', status: 'Cleaned & Standardized' },
    { id: 104, name: 'Marcus Vance', email: 'marcus.v@domain.net', phone: '+1 (555) 012-0194', address: '789 Pine Rd', status: 'Cleaned & Standardized' },
    { id: 105, name: 'Sophia Chen', email: 'sophia.chen@tech.org', phone: '+1 (555) 012-0195', address: '101 Maple St', status: 'Cleaned & Standardized' },
  ];

  const handleCleanTrigger = () => {
    setIsCleaning(true);
    setTimeout(() => {
      setIsCleaning(false);
      setViewState('cleaned');
      setCleanedCount((prev) => prev + 1);
    }, 800);
  };

  return (
    <div className="p-5 sm:p-6 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-2xl my-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Demonstration</span>
          </div>
          <h4 className="text-base font-bold text-white">
            Live Data Cleaning Transformation Engine
          </h4>
        </div>

        {/* Toggle / Clean Action */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setViewState('messy')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              viewState === 'messy'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            Show Raw Uncleaned
          </button>

          <button
            onClick={handleCleanTrigger}
            disabled={isCleaning}
            className="px-4 py-1.5 rounded-lg text-xs font-bold bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white shadow-md flex items-center gap-1.5 transition-all transform active:scale-95 disabled:opacity-50"
          >
            {isCleaning ? (
              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
            ) : (
              <Sparkles className="w-3.5 h-3.5" />
            )}
            <span>{isCleaning ? 'Cleaning...' : 'Apply Excel Cleaning'}</span>
          </button>
        </div>
      </div>

      {/* Dataset Table Display */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs font-mono">
          <thead>
            <tr className="bg-slate-800/80 text-slate-400 uppercase text-[10px] tracking-wider border-b border-slate-700">
              <th className="p-2.5">ID</th>
              <th className="p-2.5">Customer Name</th>
              <th className="p-2.5">Email Address</th>
              <th className="p-2.5">Formatted Phone</th>
              <th className="p-2.5">Quality Audit Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {(viewState === 'messy' ? rawData : cleanData).map((row) => (
              <tr key={row.id} className="hover:bg-slate-800/40 transition-colors">
                <td className="p-2.5 text-slate-500 font-bold">{row.id}</td>
                <td className={`p-2.5 font-bold ${viewState === 'messy' ? 'text-amber-300' : 'text-emerald-300'}`}>
                  {row.name}
                </td>
                <td className="p-2.5 text-slate-300">{row.email}</td>
                <td className="p-2.5 text-slate-300">{row.phone}</td>
                <td className="p-2.5">
                  <span
                    className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      viewState === 'messy'
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                        : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                    }`}
                  >
                    {viewState === 'messy' ? (
                      <>
                        <AlertTriangle className="w-3 h-3" />
                        <span>{row.status}</span>
                      </>
                    ) : (
                      <>
                        <CheckCircle2 className="w-3 h-3" />
                        <span>{row.status}</span>
                      </>
                    )}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Summary Footer Bar */}
      <div className="mt-4 pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between text-xs text-slate-400">
        <div className="flex items-center gap-4">
          <span>Rows Processed: <strong className="text-white">5</strong></span>
          <span>Duplicates Purged: <strong className={viewState === 'cleaned' ? 'text-emerald-400' : 'text-amber-400'}>{viewState === 'cleaned' ? '1' : '0'}</strong></span>
          <span>Capitalization Fixed: <strong className={viewState === 'cleaned' ? 'text-emerald-400' : 'text-slate-400'}>{viewState === 'cleaned' ? '4' : '0'}</strong></span>
        </div>
        <div className="text-teal-400 font-semibold flex items-center gap-1 mt-2 sm:mt-0">
          <FileCheck className="w-3.5 h-3.5" />
          <span>Excel Formula & VBA Automation Verified</span>
        </div>
      </div>
    </div>
  );
};
