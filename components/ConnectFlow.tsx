const steps = [
  {
    day: "1일차~",
    icon: "✍️",
    title: "오늘감에서 기록 시작",
    description: "매일 일기를 씁니다. AI가 감정을 분석하고 에너지 수준, 감정 키워드를 추출합니다.",
    color: "amber",
  },
  {
    day: "30일차~",
    icon: "📊",
    title: "감정 패턴이 쌓입니다",
    description: "주간·월간 리뷰를 통해 나의 감정 흐름이 보입니다. 어떤 감정이 자주 찾아오는지 알게 됩니다.",
    color: "amber",
  },
  {
    day: "연동 신청",
    icon: "🔗",
    title: "글숲에 연동 요청",
    description: "오늘감 설정에서 글숲 연동을 신청합니다. 같은 계정(Google/Kakao)으로 자동 연결됩니다.",
    color: "brand",
  },
  {
    day: "이후",
    icon: "🌲",
    title: "글숲이 감정을 읽습니다",
    description: "12차원 감정 분석이 오늘감 데이터에 적용됩니다. 나의 문체 DNA와 감정 패턴이 글쓰기 추천으로 이어집니다.",
    color: "forest",
  },
];

const colorMap: Record<string, string> = {
  amber: "bg-amber-light text-amber border-amber-muted",
  forest: "bg-forest-light text-forest border-forest-muted",
  brand: "bg-elevated text-brand border-border",
};

export default function ConnectFlow() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* 섹션 헤더 */}
        <div className="text-center mb-16">
          <p className="text-xs font-sans tracking-widest text-muted uppercase mb-3">연동 여정</p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-primary">
            일기가 글이 되는 과정
          </h2>
          <p className="font-sans text-secondary mt-4 text-base leading-relaxed">
            연동은 강제가 아닙니다. 준비가 됐을 때, 자연스럽게.
          </p>
        </div>

        {/* 스텝 */}
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={step.title} className="relative">
              {/* 연결선 (마지막 제외) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(100%_-_12px)] w-6 border-t border-dashed border-border z-10" />
              )}

              <div className="bg-surface rounded-xl p-6 border border-border-subtle h-full flex flex-col">
                <div className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-sans font-medium border mb-4 w-fit ${colorMap[step.color]}`}>
                  {step.day}
                </div>
                <div className="text-2xl mb-3">{step.icon}</div>
                <h3 className="font-serif text-base font-medium text-primary mb-2">{step.title}</h3>
                <p className="font-sans text-sm text-secondary leading-relaxed flex-1">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 하단 강조 문구 */}
        <div className="mt-12 text-center">
          <p className="font-sans text-sm text-muted">
            오늘감을 충분히 쌓은 후 연동하면, 글숲의 분석이 훨씬 더 풍부해집니다.
          </p>
        </div>
      </div>
    </section>
  );
}
