
import React from 'react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-sky-50">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-indigo-200/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] bg-sky-200/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 mb-6 bg-indigo-100 text-indigo-700 rounded-full text-sm font-bold tracking-wide uppercase animate-bounce">
            Limited Time Offer
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight mb-8">
            당신의 첫 시작을 응원하는<br/>
            <span className="text-indigo-600">50,000원</span> 특별 할인
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            지금 바로 신청하고 전 품목 적용 가능한 특별 할인 쿠폰을 받으세요. 
            선착순 1,000명에게만 드리는 한정 혜택입니다.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={onCtaClick}
              className="w-full sm:w-auto px-10 py-5 bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-bold rounded-2xl shadow-xl shadow-indigo-200 transition-all transform hover:-translate-y-1 active:scale-95"
            >
              지금 무료 쿠폰 받기
            </button>
            <a 
              href="#event" 
              className="w-full sm:w-auto px-10 py-5 bg-white border border-slate-200 text-slate-700 text-lg font-bold rounded-2xl hover:bg-slate-50 transition-all"
            >
              상세 내용 보기
            </a>
          </div>

          <div className="mt-16 flex items-center justify-center space-x-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             <img src="https://picsum.photos/id/1/120/40" alt="Partner Logo" className="h-8" />
             <img src="https://picsum.photos/id/2/120/40" alt="Partner Logo" className="h-8" />
             <img src="https://picsum.photos/id/3/120/40" alt="Partner Logo" className="h-8" />
             <img src="https://picsum.photos/id/4/120/40" alt="Partner Logo" className="h-8" />
          </div>
        </div>

        {/* Visual representation of a coupon */}
        <div className="mt-20 max-w-lg mx-auto float-animation">
          <div className="relative bg-white p-8 rounded-3xl shadow-2xl border border-indigo-100 overflow-hidden">
            <div className="absolute top-0 right-0 p-4">
              <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
            </div>
            <div className="border-b-2 border-dashed border-slate-100 pb-6 mb-6">
              <span className="text-sm font-bold text-indigo-500 uppercase tracking-widest">Special Voucher</span>
              <div className="text-4xl font-black text-slate-800 mt-2">50,000 KRW</div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-tighter">Expires on</p>
                <p className="text-sm font-semibold text-slate-600">2025. 12. 31</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-slate-400 uppercase tracking-tighter">Coupon Code</p>
                <p className="text-sm font-mono font-bold text-indigo-600">SPARK-2025-WINS</p>
              </div>
            </div>
            {/* Cutout circles for coupon look */}
            <div className="absolute top-1/2 -left-3 w-6 h-6 bg-slate-50 rounded-full shadow-inner"></div>
            <div className="absolute top-1/2 -right-3 w-6 h-6 bg-slate-50 rounded-full shadow-inner"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
