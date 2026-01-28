
import React from 'react';

interface SuccessToastProps {
  message: string;
}

const SuccessToast: React.FC<SuccessToastProps> = ({ message }) => {
  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[110] animate-in slide-in-from-bottom-10 duration-500">
      <div className="bg-slate-900 text-white px-8 py-4 rounded-full shadow-2xl flex items-center space-x-3 border border-slate-700">
        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
        </div>
        <span className="font-bold text-sm tracking-tight">{message}</span>
      </div>
    </div>
  );
};

export default SuccessToast;
