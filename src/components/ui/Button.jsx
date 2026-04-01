export const Button = ({ children, variant = "primary", onClick, className = "" }) => {
  // Ajout de "cursor-pointer" dans le baseStyle
  const baseStyle = "cursor-pointer px-8 py-3 font-bold uppercase tracking-wider transition-all duration-300 active:scale-95 rounded-full text-sm";
  
  const variants = {
    primary: "bg-illusion-gold text-illusion-dark hover:bg-white hover:shadow-[0_0_20px_rgba(253,230,138,0.6)]",
    outline: "border border-white/30 text-white hover:border-illusion-gold hover:text-illusion-gold hover:shadow-[0_0_15px_rgba(253,230,138,0.3)]",
    ghost: "text-slate-400 hover:text-illusion-gold underline decoration-1 underline-offset-8"
  };

  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};