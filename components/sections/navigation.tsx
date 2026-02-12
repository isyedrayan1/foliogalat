"use client";

interface NavigationProps {
  scrolled: boolean;
}

export const Navigation: React.FC<NavigationProps> = ({ scrolled }) => {
  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/90 backdrop-blur-md border-b border-neutral-800/60 py-4' : 'bg-transparent py-6 md:py-8'}`}>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a href="#" className="text-white font-bold tracking-tight text-lg flex items-center gap-2 group">
          <div className="w-2 h-2 bg-neutral-200 rounded-sm group-hover:animate-ping"></div>
          <span className="font-mono text-sm tracking-widest group-hover:text-neutral-200 transition-colors">GALAT_FAMILY</span>
        </a>
        
        <div className="hidden sm:flex items-center gap-8 text-xs font-mono tracking-widest">
          {['WORK', 'TEAM', 'STORY', 'CONTACT'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-neutral-500 nav-link transition-colors relative group">
              <span className="mr-1 opacity-0 group-hover:opacity-100 transition-opacity text-neutral-400">{`>`}</span>
              {item}
            </a>
          ))}
        </div>
        
        <div className="sm:hidden text-xs font-mono text-neutral-200 animate-pulse">
          [MENU]
        </div>
      </div>
    </nav>
  );
};
