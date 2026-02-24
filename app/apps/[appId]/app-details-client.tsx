"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type AppData = {
  name: string;
  logo: string;
  platform: string;
  rating: string;
  category: string;
  screenshots: string[];
  totalScreens: number;
};

/* ── Hero Carousel ── */
function HeroCarousel({ screenshots }: { screenshots: string[] }) {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? screenshots.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === screenshots.length - 1 ? 0 : c + 1));

  return (
    <div className="relative bg-[#f5f5f5] rounded-[28px] overflow-hidden">
      <div className="flex items-center justify-center px-16 pt-10 pb-6">
        <div className="w-[240px] aspect-[9/19.5] rounded-[24px] overflow-hidden">
          <img
            src={screenshots[current]}
            alt={`Screenshot ${current + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full border border-[#e0e0e0] bg-white hover:bg-[#f5f5f5] transition-colors"
        aria-label="Anterior"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#121212" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full border border-[#e0e0e0] bg-white hover:bg-[#f5f5f5] transition-colors"
        aria-label="Proximo"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#121212" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>

      <div className="flex items-center justify-center gap-2 pb-5">
        {screenshots.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === current ? "bg-[#585858]" : "bg-[#d9d9d9]"
            }`}
            aria-label={`Screenshot ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export function AppDetailsClient({ appData }: { appData: AppData }) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("screens");

  return (
    <>
      {/* ── Top Section ── */}
      <div className="px-6 md:px-10 pt-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-3 mb-8">
          <button
            onClick={() => router.push("/")}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-[#e5e5e5] hover:bg-[#f5f5f5] transition-colors"
            aria-label="Voltar"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#121212" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <span className="text-[#121212] text-2xl md:text-[28px] font-normal leading-tight">
            Explore / {appData.category}
          </span>
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-[480px] flex-shrink-0">
            <HeroCarousel screenshots={appData.screenshots} />
          </div>

          <div className="flex flex-col gap-6 flex-1 min-w-0">
            <div className="w-[72px] h-[72px] rounded-[18px] overflow-hidden border border-[#e5e5e5] flex-shrink-0">
              <img src={appData.logo} alt={appData.name} className="w-full h-full object-cover" />
            </div>

            <h1 className="text-[#121212] text-3xl md:text-[36px] leading-[1.2] font-normal text-balance">
              {appData.name}
            </h1>

            <div className="flex flex-wrap items-start gap-x-8 gap-y-2">
              <div className="flex flex-col">
                <span className="text-[#7a7a7a] text-sm font-medium">Platform</span>
                <span className="text-[#121212] text-base font-medium">{appData.platform}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#7a7a7a] text-sm font-medium">Rating</span>
                <span className="text-[#121212] text-base font-medium">{appData.rating}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#7a7a7a] text-sm font-medium">Category</span>
                <span className="text-[#121212] text-base font-medium">{appData.category}</span>
              </div>
            </div>

            <p className="text-[#121212] text-[15px] leading-relaxed">
              Log in to unlock additional features and enjoy a better experience.
              Access more screens, flows, and components, plus get exclusive PRO
              benefits!
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button className="flex items-center justify-center px-7 py-3.5 bg-black rounded-full hover:bg-[#222] transition-colors">
                <span className="text-white text-[15px] font-medium">Log in</span>
              </button>
              <button className="flex items-center justify-center px-7 py-3.5 bg-[#f2f2f2] rounded-full hover:bg-[#e5e5e5] transition-colors">
                <span className="text-[#121212] text-[15px] font-medium">Save</span>
              </button>
              <button className="w-12 h-12 flex items-center justify-center rounded-full border border-[#e5e5e5] hover:bg-[#f5f5f5] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="6" r="1.5" fill="#585858" />
                  <circle cx="12" cy="12" r="1.5" fill="#585858" />
                  <circle cx="12" cy="18" r="1.5" fill="#585858" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Tabs ── */}
      <div className="px-6 md:px-10 mt-14">
        <div className="flex items-center gap-5 border-b border-[#f2f2f2] overflow-x-auto">
          <button
            onClick={() => setActiveTab("screens")}
            className={`relative pb-4 text-lg font-medium whitespace-nowrap transition-colors ${
              activeTab === "screens"
                ? "text-[#121212]"
                : "text-[#999] hover:text-[#666]"
            }`}
          >
            Screens
            {activeTab === "screens" && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#121212] rounded-full" />
            )}
          </button>

          <button
            onClick={() => setActiveTab("flows")}
            className={`relative pb-4 flex items-center gap-2 text-lg font-medium whitespace-nowrap transition-colors ${
              activeTab === "flows"
                ? "text-[#121212]"
                : "text-[#999] hover:text-[#666]"
            }`}
          >
            Flows
            <span className="px-1.5 py-0.5 bg-[#f2f2f2] rounded text-[#c2d134] text-xs font-semibold uppercase">
              PRO
            </span>
            {activeTab === "flows" && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#121212] rounded-full" />
            )}
          </button>

          <button
            onClick={() => setActiveTab("interactions")}
            className={`relative pb-4 flex items-center gap-2 text-lg font-medium whitespace-nowrap transition-colors ${
              activeTab === "interactions"
                ? "text-[#121212]"
                : "text-[#999] hover:text-[#666]"
            }`}
          >
            Interactions
            <span className="px-1.5 py-0.5 bg-[#f2f2f2] rounded text-[#e54335] text-xs font-semibold">
              Coming Soon
            </span>
            {activeTab === "interactions" && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#121212] rounded-full" />
            )}
          </button>
        </div>

        {activeTab === "screens" && (
          <div className="pt-6">
            <h2 className="text-[#121212] text-xl font-normal">All Screens</h2>
            <p className="text-[#7a7a7a] text-sm mt-1">
              {appData.totalScreens} screens
            </p>

            <div className="flex overflow-x-auto gap-4 pt-5 pb-6 -mx-1">
              {appData.screenshots.map((screenshot, index) => (
                <div key={index} className="flex-shrink-0 w-[200px]">
                  <div className="bg-[#faf9f7] rounded-[20px] overflow-hidden border border-[#eee] aspect-[9/19.5]">
                    <img
                      src={screenshot}
                      alt={`Screen ${index + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "flows" && (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <div className="px-3 py-1.5 bg-[#f2f2f2] rounded">
              <span className="text-[#8f8a73] text-sm font-medium">
                Pro Feature
              </span>
            </div>
            <p className="text-[#585858] text-lg text-center">
              Log in to access app flows and user journeys.
            </p>
            <button className="flex items-center justify-center px-7 py-3.5 bg-black rounded-full hover:bg-[#222] transition-colors mt-2">
              <span className="text-white text-[15px] font-medium">Log in</span>
            </button>
          </div>
        )}

        {activeTab === "interactions" && (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <div className="px-3 py-1.5 bg-[#f2f2f2] rounded">
              <span className="text-[#8f8a73] text-sm font-medium">
                Coming Soon
              </span>
            </div>
            <p className="text-[#585858] text-lg text-center">
              Interactions are coming soon. Stay tuned!
            </p>
          </div>
        )}
      </div>

      {/* ── Footer Login Prompt ── */}
      <div className="relative bg-white pt-4 pb-10 mt-8">
        <div className="absolute w-full -top-[120px] left-0 h-[130px] bg-gradient-to-t from-white to-transparent pointer-events-none" />

        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center max-w-[520px] w-full px-6 pb-10">
            <h2 className="text-[#121212] text-3xl md:text-[34px] font-normal leading-[1.3] text-center mb-8 text-balance">
              Log in or sign up to continue browsing
            </h2>

            <button className="flex min-h-[50px] items-center justify-center gap-2.5 w-full max-w-[340px] bg-white rounded-xl border border-[#e5e5e5] hover:bg-zinc-50 transition-colors">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M19.6 10.227c0-.709-.064-1.39-.182-2.045H10v3.868h5.382a4.6 4.6 0 0 1-1.996 3.018v2.51h3.232c1.891-1.742 2.982-4.305 2.982-7.35z" fill="#4285F4" />
                <path d="M10 20c2.7 0 4.964-.895 6.618-2.423l-3.232-2.509c-.895.6-2.04.955-3.386.955-2.605 0-4.81-1.76-5.595-4.123H1.064v2.59A9.996 9.996 0 0 0 10 20z" fill="#34A853" />
                <path d="M4.405 11.9A6.01 6.01 0 0 1 4.09 10c0-.663.114-1.308.314-1.9V5.51H1.064A9.996 9.996 0 0 0 0 10c0 1.614.386 3.14 1.064 4.49l3.34-2.59z" fill="#FBBC05" />
                <path d="M10 3.977c1.468 0 2.786.505 3.823 1.496l2.868-2.868C14.959.99 12.695 0 10 0A9.996 9.996 0 0 0 1.064 5.51l3.34 2.59C5.192 5.736 7.396 3.977 10 3.977z" fill="#EA4335" />
              </svg>
              <span className="text-[#121212] text-[15px] font-medium">
                Continue with Google
              </span>
            </button>

            <div className="text-center mt-5">
              <p className="text-[#7a7a7a] text-[11px] leading-[16px]">
                By continuing, you acknowledge that you have read and understood,
                and agree to Seekfy&apos;s{" "}
                <span className="underline cursor-pointer">Terms of Service</span>{" "}
                and{" "}
                <span className="underline cursor-pointer">Privacy Policy</span>.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-1 text-[#7a7a7a] text-sm">
            <span>2026 Seekfy. All Rights Reserved.</span>
            <span className="underline cursor-pointer ml-2">Terms</span>
            <span>&amp;</span>
            <span className="underline cursor-pointer">Privacy</span>
          </div>
        </div>
      </div>
    </>
  );
}
