export const Card = ({ title, children, footer, className = "" }) => {
  return (
    <div className={`relative overflow-hidden group border border-white/5 bg-white/5 backdrop-blur-lg p-10 rounded-3xl transition-all duration-500 hover:border-illusion-gold/30 hover:bg-white/10 ${className}`}>
      <div className="absolute -inset-px bg-gradient-to-br from-illusion-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10 flex flex-col h-full">
        {title && (
          <h3 className="text-illusion-gold font-sans font-semibold uppercase tracking-[0.2em] text-lg mb-4">
            {title}
          </h3>
        )}
        <div className="text-slate-300 text-sm leading-relaxed mb-6 flex-grow">
          {children}
        </div>
        {footer && (
          <div className="mt-auto pt-4 border-t border-white/5 text-xs font-semibold text-illusion-gold/80 uppercase tracking-widest">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};