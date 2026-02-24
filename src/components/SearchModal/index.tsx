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
          {/* Logo Icon */}
          <div className="flex-shrink-0">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <rect width="40" height="40" rx="10" fill="#121212" />
              <circle cx="13" cy="13" r="2.5" fill="white" />
              <circle cx="20" cy="13" r="2.5" fill="white" />
              <circle cx="27" cy="13" r="2.5" fill="white" />
              <circle cx="13" cy="20" r="2.5" fill="white" />
              <circle cx="20" cy="20" r="2.5" fill="white" />
              <circle cx="27" cy="20" r="2.5" fill="white" />
              <circle cx="13" cy="27" r="2.5" fill="white" />
              <circle cx="20" cy="27" r="2.5" fill="white" />
              <circle cx="27" cy="27" r="2.5" fill="white" />
            </svg>
          </div>

          {/* Search Icon + Input */}
          <div className="flex-1 flex items-center gap-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#9CA3AF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="flex-shrink-0"
            >
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

          {/* Platform Selector Pill */}
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

          {/* Esc + Close */}
          <div className="flex-shrink-0 flex items-center gap-2 ml-1">
            <span className="text-sm text-[#cccccc] font-medium select-none">Esc</span>
            <button
              className="w-9 h-9 flex items-center justify-center rounded-full border border-[#f2f2f2] hover:bg-[#f2f2f2] transition-colors"
              aria-label="Fechar busca"
              onClick={onClose}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 3L13 13M3 13L13 3"
                  stroke="#585858"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="px-6">
          <div className="relative border-b border-[#f2f2f2]">
            <button
              type="button"
              className="relative pb-3 text-sm font-medium text-[#121212]"
            >
              All
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#121212] rounded-full" />
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="min-h-[420px] max-h-[520px] overflow-y-auto flex items-center justify-center">
          {/* Empty State */}
          <div className="text-center px-6 py-16">
            <div className="mx-auto mb-5 w-16 h-16 flex items-center justify-center">
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                <circle cx="24" cy="24" r="15" stroke="#cccccc" strokeWidth="2.5" />
                <path d="M35 35L48 48" stroke="#cccccc" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#121212] mb-2">
              Find design inspiration
            </h3>
            <p className="text-sm text-[#585858] leading-relaxed max-w-xs mx-auto">
              Search for apps, flows, screens, UI elements or
              <br />
              text in screens
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
