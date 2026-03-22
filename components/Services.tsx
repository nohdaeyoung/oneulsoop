const oneulgamFeatures = [
  "매일의 감정을 일기로 기록",
  "AI가 감정을 6가지로 분류·분석",
  "주간·월간 감정 리뷰 자동 생성",
  "나를 이해하는 감정 통계",
];

const geulsoopFeatures = [
  "12차원 한국어 감정 분석",
  "4축 문체 유형 진단 (16가지)",
  "나만의 글쓰기 DNA 발견",
  "AI 기반 글쓰기 성장 분석",
];

export default function Services() {
  return (
    <section className="py-24 px-6 bg-surface">
      <div className="max-w-5xl mx-auto">
        {/* 섹션 헤더 */}
        <div className="text-center mb-16">
          <p className="text-xs font-sans tracking-widest text-muted uppercase mb-3">두 가지 서비스</p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-primary">
            각자의 여정, 함께하는 성장
          </h2>
          <p className="font-sans text-secondary mt-4 max-w-md mx-auto text-base leading-relaxed">
            두 서비스는 독립적으로 사용할 수 있습니다.<br />
            연동하면 감정의 깊이가 글의 두께가 됩니다.
          </p>
        </div>

        {/* 카드 2개 */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* 오늘감 카드 */}
          <div className="bg-cream rounded-2xl p-8 border border-amber-light shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-amber-light flex items-center justify-center">
                <span className="text-amber text-lg">🌱</span>
              </div>
              <div>
                <h3 className="font-serif text-xl font-medium text-primary">오늘감</h3>
                <p className="font-sans text-xs text-muted">AI 감정 일기</p>
              </div>
            </div>

            <p className="font-sans text-secondary text-sm leading-relaxed mb-6">
              매일 쓰는 일기가 나를 이해하는 거울이 됩니다.
              AI가 감정을 분석하고, 따뜻한 위로와 통찰을 건넵니다.
            </p>

            <ul className="space-y-2 mb-8">
              {oneulgamFeatures.map((f) => (
                <li key={f} className="flex items-center gap-2 font-sans text-sm text-secondary">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="https://g.324.ing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-amber font-sans text-sm font-medium hover:gap-2.5 transition-all"
            >
              오늘감 시작하기 <span aria-hidden="true">→</span>
            </a>
          </div>

          {/* 글숲 카드 */}
          <div className="bg-cream rounded-2xl p-8 border border-forest-light shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-forest-light flex items-center justify-center">
                <span className="text-forest text-lg">🌲</span>
              </div>
              <div>
                <h3 className="font-serif text-xl font-medium text-primary">글숲</h3>
                <p className="font-sans text-xs text-muted">글쓰기 분석 플랫폼</p>
              </div>
            </div>

            <p className="font-sans text-secondary text-sm leading-relaxed mb-6">
              쌓인 글 속에서 나만의 문체와 감정 DNA를 발견합니다.
              오늘감과 연동하면 일기가 글쓰기의 씨앗이 됩니다.
            </p>

            <ul className="space-y-2 mb-8">
              {geulsoopFeatures.map((f) => (
                <li key={f} className="flex items-center gap-2 font-sans text-sm text-secondary">
                  <span className="w-1.5 h-1.5 rounded-full bg-forest flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="https://soop.324.ing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-forest font-sans text-sm font-medium hover:gap-2.5 transition-all"
            >
              글숲 둘러보기 <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
