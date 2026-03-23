export const WaraLogoMark = ({ size = 40, className = "" }: { size?: number; className?: string }) => {
  const height = size * (235.59 / 224.15);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={height}
      viewBox="0 0 224.15 235.59"
      preserveAspectRatio="xMidYMid meet"
      className={className}
    >
      {/* Top chevron */}
      <polygon points="112.03,77.04 176.07,128.52 223.97,90.03 112.03,0.08 0.09,90.03 47.99,128.52" fill="#f24e01" />
      {/* Bottom chevron */}
      <polygon points="112.03,184.09 176.07,235.55 223.97,197.08 112.03,107.13 0.09,197.08 47.99,235.55" fill="#f24e01" />
      {/* Right parallelogram */}
      <polygon points="223.97,107.4 176.07,145.89 176.07,235.55 223.97,197.08" fill="#f24e01" />
      {/* Left parallelogram */}
      <polygon points="0.09,107.4 0.09,197.08 47.99,235.57 47.99,145.89" fill="#f24e01" />
    </svg>
  );
};

export const WaraLogo = ({ light = false }: { light?: boolean }) => {
  return (
    <div className="flex items-center gap-2 lg:gap-3 cursor-pointer">
      <WaraLogoMark size={32} className="lg:hidden" />
      <WaraLogoMark size={38} className="hidden lg:block" />
      <div className="flex flex-col">
        <span
          className={`text-xl lg:text-2xl font-bold tracking-tighter leading-none ${
            light ? "text-white" : "text-wara-black"
          }`}
        >
          wara
        </span>
        <div className="flex flex-col">
          <span
            className={`text-[7px] lg:text-[8px] font-bold tracking-[0.2em] uppercase ${
              light ? "text-white/80" : "text-wara-black/80"
            }`}
          >
            Building Materials
          </span>
          <div className="h-[2px] w-full bg-wara-orange mt-0.5" />
        </div>
      </div>
    </div>
  );
};
