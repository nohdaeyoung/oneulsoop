export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-border-subtle">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="font-serif text-lg font-medium tracking-tight text-primary">
          오늘숲
        </span>
        <div className="flex items-center gap-6 text-sm text-secondary">
          <a
            href="https://oneulgam.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber transition-colors"
          >
            오늘감
          </a>
          <a
            href="https://geulsegye.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-forest transition-colors"
          >
            글숲
          </a>
        </div>
      </div>
    </nav>
  );
}
