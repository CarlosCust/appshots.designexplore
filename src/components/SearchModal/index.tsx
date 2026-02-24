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

  const handleClearSearch = () => {
    setSearchQuery("");
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-start justify-center pt-20 px-4 bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="magic-search-container w-full max-w-[1042px] bg-white rounded-[36px] shadow-[0_10px_40px_rgba(0,0,0,0.15)] p-6 relative animate-in fade-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Section */}
        <div className="magic-search-top flex items-start gap-4 mb-6">
          {/* Logo */}
          <div className="search-logo-container flex-shrink-0">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="w-8 h-8">
              <rect width="32" height="32" rx="8" fill="black"/>
              <path d="M8 22V10l5 6 5-6v12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="22" cy="14" r="4" stroke="white" strokeWidth="2"/>
              <path d="M25 17l2 2" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>

          {/* Search Form */}
          <div className="search-form-wrap flex-1">
            <div className="search-form">
              <div className="search-controls-wrap">
                <div className="search-controls flex flex-col gap-4">
                  {/* Search Input */}
                  <div className="search-input-wrap relative">
                    <input
                      type="text"
                      id="search-popup-input"
                      placeholder=""
                      className="search-input w-full h-14 px-4 pr-12 text-base rounded-2xl border-2 border-gray-200 focus:border-black focus:outline-none transition-colors"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      autoFocus
                    />
                    {searchQuery && (
                      <button
                        className="clear-button absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                        aria-label="Clear search"
                        onClick={handleClearSearch}
                      >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path
                            d="M1 1L11 11M1 11L11 1"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </button>
                    )}
                    {!searchQuery && (
                      <div className="placeholder-overlay absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none flex items-center gap-1 text-gray-400">
                        <span>Try "Onboarding"</span>
                        <span className="animated-cursor inline-block w-0.5 h-5 bg-black animate-pulse"></span>
                      </div>
                    )}
                  </div>

                  {/* Platform Toggle */}
                  <div className="platform-toggle relative flex items-center gap-2 bg-gray-100 rounded-full p-1 w-fit">
                    <div
                      className="glider absolute h-[calc(100%-8px)] bg-black rounded-full transition-all duration-300 ease-out"
                      style={{
                        width: "75px",
                        transform: `translateX(${
                          activePlatform === "iOS" ? "0px" : activePlatform === "Android" ? "83px" : "166px"
                        })`,
                      }}
                    />
                    <button
                      type="button"
                      className={`platform-button relative z-10 px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                        activePlatform === "iOS" ? "text-white" : "text-gray-700"
                      }`}
                      onClick={() => setActivePlatform("iOS")}
                    >
                      iOS
                    </button>
                    <button
                      type="button"
                      className={`platform-button relative z-10 px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                        activePlatform === "Android" ? "text-white" : "text-gray-700"
                      }`}
                      onClick={() => setActivePlatform("Android")}
                    >
                      Android
                    </button>
                    <button
                      type="button"
                      className={`platform-button relative z-10 px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                        activePlatform === "Web" ? "text-white" : "text-gray-700"
                      }`}
                      onClick={() => setActivePlatform("Web")}
                    >
                      Web
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Close Button */}
          <button
            className="magic-search-close flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close search"
            onClick={onClose}
          >
            <span className="esc-text text-sm text-gray-600 font-medium">Esc</span>
            <span className="close-icon w-5 h-5">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M5 5L15 15M5 15L15 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </button>
        </div>

        {/* Content Section */}
        <div className="magic-search-content">
          {/* Tab Section */}
          <div className="tab-section mb-6">
            <div className="tab-toggle relative flex items-center gap-4 border-b border-gray-200">
              <div
                className="glider absolute bottom-0 h-0.5 bg-black transition-all duration-300"
                style={{ width: "19px", transform: "translateX(0px)" }}
              />
              <button
                type="button"
                className="tab-button relative pb-3 text-sm font-medium text-black"
              >
                All
              </button>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="scrollable-content max-h-[400px] overflow-y-auto">
            {/* Empty State */}
            <div className="empty-state-container flex items-center justify-center py-16">
              <div className="empty-search-state text-center">
                <div className="empty-search-icon mx-auto mb-6 w-20 h-20 flex items-center justify-center">
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                    <circle cx="35" cy="35" r="20" stroke="#D1D5DB" strokeWidth="3" />
                    <path d="M50 50L65 65" stroke="#D1D5DB" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Find design inspiration
                </h3>
                <p className="text-gray-600">
                  Search for apps, flows, screens, UI elements or text in screens
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
