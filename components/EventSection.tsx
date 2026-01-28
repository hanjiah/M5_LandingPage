
import React from 'react';

interface EventSectionProps {
  onCtaClick: () => void;
}

const EventSection: React.FC<EventSectionProps> = ({ onCtaClick }) => {
  const steps = [
    {
      number: '01',
      title: '회원가입/로그인',
      description: '간편 가입으로 5초 만에 완료하세요.'
    },
    {
      number: '02',
      title: '쿠폰 신청하기',
      description: '하단 버튼을 클릭하여 신청서를 제출합니다.'
    },
    {
      number: '03',
      title: '즉시 혜택 받기',
      description: '신청 즉시 계정으로 쿠폰이 발송됩니다.'
    }
  ];

  return (
    <section id="event" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">참여 방법은 매우 간단합니다</h2>
            <p className="text-slate-600">단 세 단계로 여러분의 쇼핑을 더 즐겁게 만들어보세요.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {steps.map((step, idx) => (
              <div key={idx} className="relative p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow group">
                <span className="text-6xl font-black text-indigo-100 absolute top-4 right-8 group-hover:text-indigo-200 transition-colors">{step.number}</span>
                <h3 className="text-xl font-bold text-slate-800 mb-3 relative z-10">{step.title}</h3>
                <p className="text-slate-600 relative z-10 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-indigo-900 rounded-[3rem] p-8 md:p-16 text-white flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-md">
              <h3 className="text-3xl font-bold mb-4">아직 늦지 않았습니다!</h3>
              <p className="text-indigo-100 opacity-90 leading-relaxed">
                현재 <span className="text-yellow-400 font-bold">428명</span>이 이미 쿠폰을 받아갔습니다. 남은 수량이 얼마 남지 않았으니 지금 바로 신청하세요!
              </p>
            </div>
            <div className="flex-shrink-0">
              <button 
                onClick={onCtaClick}
                className="px-10 py-5 bg-white text-indigo-900 text-lg font-black rounded-2xl hover:bg-indigo-50 transition-all shadow-xl active:scale-95"
              >
                쿠폰 신청하러 가기
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSection;
