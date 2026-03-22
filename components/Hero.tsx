export default function Hero() {
  return (
    <section className="pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* 브랜드 태그 */}
        <p className="text-sm font-sans tracking-widest text-muted uppercase mb-8">
          오늘숲 플랫폼
        </p>

        {/* 메인 헤드라인 */}
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight text-primary mb-6">
          오늘의 감정이,
          <br />
          <span className="text-brand">내일의 글이 됩니다</span>
        </h1>

        {/* 서브카피 */}
        <p className="font-sans text-lg text-secondary leading-relaxed max-w-xl mx-auto mb-12">
          오늘감으로 매일의 감정을 기록하세요.
          쌓인 감정의 결이 글숲에서 나만의 글쓰기로 피어납니다.
        </p>

        {/* CTA 버튼 2개 */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://oneulgam.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber text-white font-sans text-sm font-medium hover:bg-amber/90 transition-all shadow-sm hover:shadow-md"
          >
            오늘감 시작하기
            <span aria-hidden="true">→</span>
          </a>
          <a
            href="https://geulsegye.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-forest text-forest font-sans text-sm font-medium hover:bg-forest-light transition-all"
          >
            글숲 둘러보기
            <span aria-hidden="true">→</span>
          </a>
        </div>

        {/* 배경 장식 */}
        <div className="mt-20 relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-5 select-none pointer-events-none">
            <span className="font-serif text-[200px] text-brand leading-none">숲</span>
          </div>
          <div className="relative flex justify-center gap-16 text-center">
            <div>
              <p className="font-serif text-3xl font-medium text-amber">감정</p>
              <p className="font-sans text-xs text-muted mt-1">오늘감</p>
            </div>
            <div className="flex items-center text-border text-2xl">→</div>
            <div>
              <p className="font-serif text-3xl font-medium text-forest">글</p>
              <p className="font-sans text-xs text-muted mt-1">글숲</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
