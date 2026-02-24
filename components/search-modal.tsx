"use client";

import { useState, useEffect } from "react";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activePlatform, setActivePlatform] = useState<"iOS" | "Android" | "Web">("iOS");

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const platforms = ["iOS", "Android", "Web"] as const;

  const getPlatformGliderStyle = () => {
    const widths = { iOS: 48, Android: 72, Web: 48 };
    const offsets = { iOS: 4, Android: 56, Web: 132 };
    return {
      width: `${widths[activePlatform]}px`,
      transform: `translateX(${offsets[activePlatform]}px)`,
    };
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-start justify-center pt-16 px-4 bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-[960px] bg-white rounded-[28px] shadow-[0_10px_60px_rgba(0,0,0,0.12)] overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header */}
        <div className="flex items-center gap-3 px-6 pt-6 pb-4">
          <div className="flex-shrink-0">
            <svg width="40" height="40" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="34" height="34" rx="17" fill="black"/>
              <path d="M11.3462 7.83009C11.2685 7.51422 11.7235 7.25699 11.9543 7.4862C13.3499 8.87206 16.0057 11.2409 18.4246 11.8832C20.8074 12.516 24.2302 11.8108 26.1399 11.3072C26.4576 11.2235 26.7256 11.6861 26.4949 11.92C25.1068 13.3271 22.7889 15.9483 22.1479 18.3322C21.4984 20.7482 22.2183 24.2336 22.7155 26.1278C22.7979 26.4416 22.3506 26.7053 22.1161 26.481C20.6945 25.1212 17.9775 22.7806 15.5358 22.1497C13.1505 21.5334 9.71365 22.2092 7.84494 22.677C7.53085 22.7556 7.27497 22.3108 7.50078 22.0788C8.84321 20.6993 11.1512 18.0706 11.8125 15.7007C12.4906 13.2708 11.8182 9.74864 11.3462 7.83009Z" fill="white"/>
            </svg>
          </div>

          <div className="flex-1 flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              type="text"
              placeholder=""
              className="w-full text-base text-[#121212] bg-transparent outline-none placeholder:text-zinc-400"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
          </div>

          <div className="flex-shrink-0 relative flex items-center bg-[#f2f2f2] rounded-full p-1">
            <div
              className="absolute h-[calc(100%-8px)] bg-[#121212] rounded-full transition-all duration-300 ease-out"
              style={getPlatformGliderStyle()}
            />
            {platforms.map((platform) => (
              <button
                key={platform}
                type="button"
                className={`relative z-10 px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 ${
                  activePlatform === platform
                    ? "text-white"
                    : "text-[#585858] hover:text-[#121212]"
                }`}
                onClick={() => setActivePlatform(platform)}
              >
                {platform}
              </button>
            ))}
          </div>

          <div className="flex-shrink-0 flex items-center gap-2 ml-1">
            <span className="text-sm text-[#cccccc] font-medium select-none">Esc</span>
            <button
              className="w-9 h-9 flex items-center justify-center rounded-full border border-[#f2f2f2] hover:bg-[#f2f2f2] transition-colors"
              aria-label="Fechar busca"
              onClick={onClose}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 3L13 13M3 13L13 3" stroke="#585858" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="px-6">
          <div className="relative border-b border-[#f2f2f2]">
            <button type="button" className="relative pb-3 text-sm font-medium text-[#121212]">
              All
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#121212] rounded-full" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="min-h-[420px] max-h-[520px] overflow-y-auto flex items-center justify-center">
          <div className="text-center px-6 py-16">
            <div className="mx-auto mb-5 w-16 h-16 flex items-center justify-center">
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                <circle cx="24" cy="24" r="15" stroke="#cccccc" strokeWidth="2.5" />
                <path d="M35 35L48 48" stroke="#cccccc" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#121212] mb-2">Find design inspiration</h3>
            <p className="text-sm text-[#585858] leading-relaxed max-w-xs mx-auto">
              Search for apps, flows, screens, UI elements or<br />text in screens
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
