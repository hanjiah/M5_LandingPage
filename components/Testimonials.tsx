
import React from 'react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "김민준",
      role: "직장인",
      text: "친구 추천으로 신청했는데, 진짜 신청하자마자 문자가 오더라고요. 이번 겨울 외투 장만할 때 요긴하게 썼습니다!",
      image: "https://picsum.photos/id/64/100/100"
    },
    {
      name: "이지영",
      role: "프리랜서",
      text: "다른 곳들은 신청 과정이 복잡한데 여기는 정말 간단해요. 할인 폭도 커서 다른 분들께도 강력 추천합니다.",
      image: "https://picsum.photos/id/65/100/100"
    },
    {
      name: "박서준",
      role: "대학생",
      text: "학생이라 한 푼이 아쉬운데 이런 좋은 이벤트 열어주셔서 감사합니다. 덕분에 사고 싶었던 신발 저렴하게 샀어요!",
      image: "https://picsum.photos/id/66/100/100"
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16">
            <div className="mb-6 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">수많은 고객이<br/>이미 증명하고 있습니다</h2>
              <p className="text-slate-600">실제 사용자들의 생생한 후기를 확인해 보세요.</p>
            </div>
            <div className="flex space-x-2">
              <div className="flex -space-x-4">
                {[1,2,3,4].map(i => (
                  <img key={i} src={`https://picsum.photos/id/${i+10}/40/40`} className="w-10 h-10 rounded-full border-2 border-white" alt="Avatar" />
                ))}
              </div>
              <div className="pl-4">
                <div className="flex text-yellow-400">
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                  ))}
                </div>
                <p className="text-sm font-bold text-slate-700">평점 4.9/5.0</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, idx) => (
              <div key={idx} className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 flex flex-col justify-between hover:scale-[1.02] transition-transform">
                <p className="text-slate-700 italic mb-8">"{review.text}"</p>
                <div className="flex items-center space-x-4">
                  <img src={review.image} className="w-12 h-12 rounded-2xl object-cover" alt={review.name} />
                  <div>
                    <h4 className="font-bold text-slate-900">{review.name}</h4>
                    <p className="text-xs text-slate-400">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
