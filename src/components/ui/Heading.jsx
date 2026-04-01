export const Heading = ({ children, variant = "h1", className = "" }) => {
  const baseStyle = "uppercase tracking-widest";
  
  const variants = {
    h1: "font-sans font-bold text-4xl md:text-5xl mb-6 text-illusion-text-base drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]",
    h2: "font-serif text-3xl md:text-4xl italic mb-4 text-illusion-gold drop-shadow-[0_0_8px_rgba(253,230,138,0.4)]",
    h3: "font-sans text-xl font-medium text-illusion-text-base",
    p: "font-serif italic text-lg text-slate-300 tracking-normal capitalize"
  };

  const Tag = variant;

  return (
    <Tag className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </Tag>
  );
};