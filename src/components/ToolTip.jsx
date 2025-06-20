export const ToolTip = ({ text, children }) => (
  <div style={{fontFamily: "Jockey One"}} className="relative group inline-block">
    {children}
    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 capitalize px-2 py-1 bg-gray-200 text-slate-950 text-sm rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap z-50">
      {text}
    </div>
  </div>
);
