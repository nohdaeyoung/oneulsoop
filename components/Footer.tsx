export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border-subtle">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-serif text-base font-medium text-primary mb-1">오늘숲</p>
            <p className="font-sans text-xs text-muted">오늘의 감정이, 내일의 글이 됩니다.</p>
          </div>

          <div className="flex items-center gap-8 font-sans text-sm text-secondary">
            <a
              href="https://oneulgam.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber transition-colors flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber inline-block" />
              오늘감
            </a>
            <a
              href="https://geulsegye.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-forest transition-colors flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-forest inline-block" />
              글숲
            </a>
          </div>

          <p className="font-sans text-xs text-muted">
            © 2026 오늘숲. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
