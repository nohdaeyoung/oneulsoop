export default function CTASection() {
  return (
    <section className="py-24 px-6 bg-surface">
      <div className="max-w-3xl mx-auto">
        {/* 따옴표 장식 */}
        <div className="text-center mb-12">
          <span className="font-serif text-6xl text-border select-none" aria-hidden="true">"</span>
          <blockquote className="font-serif text-xl md:text-2xl text-primary font-medium leading-relaxed -mt-4 mb-4">
            감정을 기록하는 사람은<br />
            결국 자신의 이야기를 쓰게 됩니다.
          </blockquote>
          <span className="font-serif text-6xl text-border select-none leading-none" aria-hidden="true">"</span>
        </div>

        {/* 구분선 */}
        <div className="flex items-center gap-4 mb-12">
          <div className="flex-1 border-t border-border-subtle" />
          <span className="font-sans text-xs text-muted tracking-widest uppercase">오늘숲</span>
          <div className="flex-1 border-t border-border-subtle" />
        </div>

        {/* CTA 영역 */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-amber-light rounded-2xl p-6 text-center border border-amber-muted">
            <p className="font-serif text-lg font-medium text-primary mb-2">감정부터 시작하기</p>
            <p className="font-sans text-sm text-secondary mb-5 leading-relaxed">
              오늘 하루의 감정을 기록하는 것부터.
              오늘감은 무료로 시작할 수 있습니다.
            </p>
            <a
              href="https://g.324.ing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber text-white font-sans text-sm font-medium hover:bg-amber/90 transition-colors"
            >
              오늘감 무료 시작 →
            </a>
          </div>

          <div className="bg-forest-light rounded-2xl p-6 text-center border border-forest-muted">
            <p className="font-serif text-lg font-medium text-primary mb-2">글쓰기로 바로 가기</p>
            <p className="font-sans text-sm text-secondary mb-5 leading-relaxed">
              이미 글을 쓰고 계신가요?
              글숲에서 나의 문체 DNA를 발견해보세요.
            </p>
            <a
              href="https://soop.324.ing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-forest text-white font-sans text-sm font-medium hover:bg-forest/90 transition-colors"
            >
              글숲 둘러보기 →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
