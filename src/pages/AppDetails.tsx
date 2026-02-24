import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MoreVertical } from "lucide-react";
import { Navbar } from "@/sections/Navbar";
import { AuthModal } from "@/components/AuthModal";
import { ChatButton } from "@/components/ChatButton";

type AppData = {
  name: string;
  logo: string;
  formFactor: string;
  platform: string;
  rating: string;
  category: string;
  screenshots: string[];
  totalScreens: number;
};

const appsData: Record<string, AppData> = {
  "period-tracker": {
    name: "Pinkllama — Menstral cycle & ovulation app",
    logo: "/images/app-icons/period-tracker.jpg",
    formFactor: "iPhone 12",
    platform: "iOS",
    rating: "4.5/5",
    category: "Health & Fitness",
    screenshots: [
      "/images/screenshots/period-tracker-1.jpg",
      "/images/screenshots/period-tracker-2.jpg",
      "/images/screenshots/period-tracker-3.jpg",
      "/images/screenshots/period-tracker-4.jpg",
      "/images/screenshots/period-tracker-5.jpg",
      "/images/screenshots/period-tracker-6.jpg",
    ],
    totalScreens: 67,
  },
  "wikipedia": {
    name: "Wikipedia — The Free Encyclopedia",
    logo: "/images/app-icons/wikipedia.jpg",
    formFactor: "iPhone 12",
    platform: "iOS",
    rating: "4.7/5",
    category: "Reference",
    screenshots: [
      "/images/screenshots/wikipedia-1.jpg",
      "/images/screenshots/wikipedia-2.jpg",
      "/images/screenshots/wikipedia-3.jpg",
      "/images/screenshots/wikipedia-1.jpg",
      "/images/screenshots/wikipedia-2.jpg",
      "/images/screenshots/wikipedia-3.jpg",
    ],
    totalScreens: 42,
  },
  "duolingo-math": {
    name: "Duolingo Math — Lessons & Brain Training",
    logo: "/images/app-icons/duolingo-math.jpg",
    formFactor: "iPhone 12",
    platform: "iOS",
    rating: "4.6/5",
    category: "Education",
    screenshots: [
      "/images/screenshots/duolingo-math-1.jpg",
      "/images/screenshots/duolingo-math-1.jpg",
      "/images/screenshots/duolingo-math-1.jpg",
      "/images/screenshots/duolingo-math-1.jpg",
      "/images/screenshots/duolingo-math-1.jpg",
      "/images/screenshots/duolingo-math-1.jpg",
    ],
    totalScreens: 38,
  },
  "onefootball": {
    name: "OneFootball — Soccer News & Scores",
    logo: "/images/app-icons/onefootball.jpg",
    formFactor: "iPhone 12",
    platform: "iOS",
    rating: "4.3/5",
    category: "Sports",
    screenshots: [
      "/images/screenshots/onefootball-1.jpg",
      "/images/screenshots/onefootball-1.jpg",
      "/images/screenshots/onefootball-1.jpg",
      "/images/screenshots/onefootball-1.jpg",
      "/images/screenshots/onefootball-1.jpg",
      "/images/screenshots/onefootball-1.jpg",
    ],
    totalScreens: 55,
  },
  "uber-eats": {
    name: "Uber Eats — Fresh Grocery & Delivery",
    logo: "/images/app-icons/uber-eats.jpg",
    formFactor: "iPhone 12",
    platform: "iOS",
    rating: "4.2/5",
    category: "Food & Drink",
    screenshots: [
      "/images/screenshots/uber-eats-1.jpg",
      "/images/screenshots/uber-eats-1.jpg",
      "/images/screenshots/uber-eats-1.jpg",
      "/images/screenshots/uber-eats-1.jpg",
      "/images/screenshots/uber-eats-1.jpg",
      "/images/screenshots/uber-eats-1.jpg",
    ],
    totalScreens: 91,
  },
  "quora": {
    name: "Quora — Ask Questions, Get Answers",
    logo: "/images/app-icons/quora.jpg",
    formFactor: "iPhone 12",
    platform: "iOS",
    rating: "4.1/5",
    category: "Social",
    screenshots: [
      "/images/screenshots/quora-1.jpg",
      "/images/screenshots/quora-1.jpg",
      "/images/screenshots/quora-1.jpg",
      "/images/screenshots/quora-1.jpg",
      "/images/screenshots/quora-1.jpg",
      "/images/screenshots/quora-1.jpg",
    ],
    totalScreens: 29,
  },
};

const getAppData = (appId: string): AppData => {
  if (appsData[appId]) return appsData[appId];
  const name = appId.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  return {
    name,
    logo: "/images/app-icons/period-tracker.jpg",
    formFactor: "iPhone 12",
    platform: "iOS",
    rating: "4.5/5",
    category: "Apps",
    screenshots: Array.from({ length: 6 }, () => "/images/screenshots/period-tracker-1.jpg"),
    totalScreens: 10,
  };
};

const HeroScreenshots = ({ screenshots }: { screenshots: string[] }) => {
  const display = screenshots.slice(0, 3);
  return (
    <div className="flex gap-2.5 p-2.5 h-[503px]">
      {display.map((src, i) => (
        <div
          key={i}
          className="flex-1 rounded-[21px] overflow-hidden border border-[#eeeeee] bg-[#faf9f7]"
        >
          <img
            src={src}
            alt={`Screenshot ${i + 1}`}
            className="w-full h-full object-cover rounded-[21px]"
          />
        </div>
      ))}
    </div>
  );
};

export const AppDetails = () => {
  const { appId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("screens");

  const appData = getAppData(appId || "");

  return (
    <div className="bg-white min-h-screen font-indivisible">
      <Navbar />
      <div className="h-[76px]" />

      {/* ── Top Section ── */}
      <div className="px-10 pt-[30px]">
        {/* Breadcrumb */}
        <div className="flex items-center gap-0 mb-8">
          <button
            onClick={() => navigate("/")}
            className="text-[#121212] text-[32px] leading-[44.8px] font-normal hover:opacity-70 transition-opacity"
          >
            Explore
          </button>
          <div className="px-2">
            <span className="text-[#626262] text-[32px] leading-[44.8px] font-normal">/</span>
          </div>
          <span className="text-[#121212] text-[32px] leading-[44.8px] font-normal">
            {appData.category}
          </span>
        </div>

        {/* Two-column layout */}
        <div className="flex flex-wrap items-start">
          {/* Left: Hero Screenshots */}
          <div className="w-full lg:max-w-[722.8px] lg:w-[722.8px]">
            <HeroScreenshots screenshots={appData.screenshots} />
          </div>

          {/* Right: App Info */}
          <div className="flex flex-col flex-1 items-start gap-6 pl-[30px] pr-[60px] py-0 max-w-[900px] min-w-[280px]">
            {/* App Logo */}
            <div className="w-[88px] h-[88px] rounded-[20px] overflow-hidden border border-[#80808040] flex-shrink-0">
              <img
                src={appData.logo}
                alt={appData.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Title + Metadata */}
            <div className="flex flex-col items-start gap-6 w-full">
              <p className="text-[#121212] text-[41.3px] leading-[50.4px] font-normal">
                {appData.name}
              </p>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 w-full">
                <div className="flex flex-col items-start min-w-[100px]">
                  <div className="text-[#121212] text-lg font-medium leading-[25.2px] opacity-50">
                    Form factor
                  </div>
                  <div className="text-[#121212] text-[17.4px] leading-[25.2px] font-normal">
                    {appData.formFactor}
                  </div>
                </div>
                <div className="flex flex-col items-start min-w-[74px]">
                  <div className="text-[#121212] text-lg font-medium leading-[25.2px] opacity-50">
                    Platform
                  </div>
                  <div className="text-[#121212] text-lg leading-[25.2px] font-normal">
                    {appData.platform}
                  </div>
                </div>
                <div className="flex flex-col items-start">
                  <div className="text-[#121212] text-lg font-medium leading-[25.2px] opacity-50">
                    Rating
                  </div>
                  <div className="text-[#121212] text-lg leading-[25.2px] font-normal">
                    {appData.rating}
                  </div>
                </div>
                <div className="flex flex-col items-start">
                  <div className="text-[#121212] text-[17.7px] font-medium leading-[25.2px] opacity-50">
                    Category
                  </div>
                  <div className="text-[#121212] text-lg leading-[25.2px] font-normal">
                    {appData.category}
                  </div>
                </div>
              </div>
            </div>

            {/* Description + Actions */}
            <div className="flex flex-col items-start gap-6 w-full">
              <p className="text-[#121212] text-[15.6px] leading-6 font-medium">
                Log in to unlock additional features and enjoy a better
                <br />
                experience. Access more screens, flows, and components,
                <br />
                plus get exclusive PRO benefits!
              </p>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-3">
                <button className="flex items-center justify-center px-[30px] py-5 bg-black rounded-[45px] hover:bg-[#222] transition-colors">
                  <span className="text-white text-[15.8px] font-medium leading-4">Log in</span>
                </button>
                <button className="flex items-center justify-center px-[30px] py-5 bg-[#e9e9e9] rounded-[45px] hover:bg-[#ddd] transition-colors">
                  <span className="text-[#121212] text-[15.9px] font-medium leading-4">Save</span>
                </button>
                <button className="w-14 h-14 flex items-center justify-center rounded-full bg-[#f2f2f2] hover:bg-[#e5e5e5] transition-colors">
                  <MoreVertical className="w-5 h-5 text-[#666]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Tabs ── */}
      <div className="w-[calc(100%-80px)] mx-10 mt-16">
        <div className="flex items-center overflow-x-auto pb-5">
          <div className="flex items-center gap-0">
            {/* Screens */}
            <div className="pr-5">
              <button
                onClick={() => setActiveTab("screens")}
                className={`pb-1 inline-block ${
                  activeTab === "screens"
                    ? "border-b-[1.6px] border-[#121212]"
                    : "border-b-[1.6px] border-transparent"
                }`}
              >
                <span
                  className={`text-[19.8px] font-medium leading-5 whitespace-nowrap ${
                    activeTab === "screens" ? "text-[#121212]" : "text-[#999]"
                  }`}
                >
                  Screens
                </span>
              </button>
            </div>

            {/* Flows */}
            <div className="pr-5">
              <button
                onClick={() => setActiveTab("flows")}
                className={`pb-1 inline-flex items-center ${
                  activeTab === "flows"
                    ? "border-b-[1.6px] border-[#121212]"
                    : "border-b-[1.6px] border-transparent"
                }`}
              >
                <span
                  className={`text-xl font-medium leading-5 whitespace-nowrap ${
                    activeTab === "flows" ? "text-[#121212]" : "text-[#999]"
                  }`}
                >
                  Flows
                </span>
                <div className="pl-2.5 pt-[3px]">
                  <div className="px-1.5 py-1 bg-[#e9e9e9] rounded-[5px]">
                    <span className="text-[#8f8a73] text-sm font-medium leading-[14px]">Pro</span>
                  </div>
                </div>
              </button>
            </div>

            {/* Interactions */}
            <div>
              <button
                onClick={() => setActiveTab("interactions")}
                className={`pb-1 inline-flex items-center ${
                  activeTab === "interactions"
                    ? "border-b-[1.6px] border-[#121212]"
                    : "border-b-[1.6px] border-transparent"
                }`}
              >
                <span
                  className={`text-xl font-medium leading-5 whitespace-nowrap ${
                    activeTab === "interactions" ? "text-[#121212]" : "text-[#999]"
                  }`}
                >
                  Interactions
                </span>
                <div className="pl-2.5 pt-[3px]">
                  <div className="px-1.5 py-1 bg-[#e9e9e9] rounded-[5px]">
                    <span className="text-[#8f8a73] text-sm font-medium leading-[14px]">
                      Coming Soon
                    </span>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* ── Screens Tab Content ── */}
        {activeTab === "screens" && (
          <div className="flex flex-col items-start w-full">
            {/* Header */}
            <div className="flex flex-col items-start gap-[2.2px] pt-5 pb-[13px] w-full">
              <div className="text-[#585858] text-[23.8px] leading-[33.6px] font-normal">
                All Screens
              </div>
              <div className="text-[#666] text-[13.6px] leading-[19.6px] font-medium">
                {appData.totalScreens} screens
              </div>
            </div>

            {/* Horizontal scroll of phone screenshots */}
            <div className="flex overflow-x-auto w-full pb-5 -mx-2.5">
              {appData.screenshots.map((screenshot, index) => (
                <div key={index} className="flex-shrink-0 w-[244px] p-2.5">
                  <div
                    className="relative rounded-[21px] overflow-hidden border border-[#eeeeee] bg-[#faf9f7]"
                    style={{ height: "482px" }}
                  >
                    <img
                      src={screenshot}
                      alt={`Screen ${index + 1}`}
                      className="absolute top-px left-px w-[223px] h-[482px] rounded-[21px] object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Flows Tab Content ── */}
        {activeTab === "flows" && (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <div className="px-3 py-1.5 bg-[#e9e9e9] rounded-[5px]">
              <span className="text-[#8f8a73] text-sm font-medium">Pro Feature</span>
            </div>
            <p className="text-[#585858] text-lg font-normal text-center">
              Log in to access app flows and user journeys.
            </p>
            <button className="flex items-center justify-center px-[30px] py-5 bg-black rounded-[45px] hover:bg-[#222] transition-colors mt-2">
              <span className="text-white text-[15.8px] font-medium leading-4">Log in</span>
            </button>
          </div>
        )}

        {/* ── Interactions Tab Content ── */}
        {activeTab === "interactions" && (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <div className="px-3 py-1.5 bg-[#e9e9e9] rounded-[5px]">
              <span className="text-[#8f8a73] text-sm font-medium">Coming Soon</span>
            </div>
            <p className="text-[#585858] text-lg font-normal text-center">
              Interactions are coming soon. Stay tuned!
            </p>
          </div>
        )}
      </div>

      {/* ── Footer Login Prompt ── */}
      <div className="relative bg-white pt-[15px] pb-[30px] mt-8">
        <div className="absolute w-full -top-[135px] left-0 h-[150px] bg-gradient-to-t from-white to-transparent pointer-events-none" />

        <div className="flex flex-col items-center gap-[19.51px]">
          {/* CTA */}
          <div className="flex flex-col items-center max-w-[570px] w-full pt-2.5 pb-10 px-10">
            <div className="pb-[30px] text-center">
              <p className="text-[#121212] text-[36px] font-normal leading-[54px]">
                Log in or sign up to continue browsing
              </p>
            </div>

            <div className="flex flex-col items-start pb-5 px-[86px] w-full">
              <button className="flex min-h-[50px] items-center justify-center gap-2 px-0 py-3.5 w-full bg-white rounded-[11px] overflow-hidden border border-[#e9e9e9] hover:bg-zinc-50 transition-colors">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.6 10.227c0-.709-.064-1.39-.182-2.045H10v3.868h5.382a4.6 4.6 0 0 1-1.996 3.018v2.51h3.232c1.891-1.742 2.982-4.305 2.982-7.35z" fill="#4285F4"/>
                  <path d="M10 20c2.7 0 4.964-.895 6.618-2.423l-3.232-2.509c-.895.6-2.04.955-3.386.955-2.605 0-4.81-1.76-5.595-4.123H1.064v2.59A9.996 9.996 0 0 0 10 20z" fill="#34A853"/>
                  <path d="M4.405 11.9A6.01 6.01 0 0 1 4.09 10c0-.663.114-1.308.314-1.9V5.51H1.064A9.996 9.996 0 0 0 0 10c0 1.614.386 3.14 1.064 4.49l3.34-2.59z" fill="#FBBC05"/>
                  <path d="M10 3.977c1.468 0 2.786.505 3.823 1.496l2.868-2.868C14.959.99 12.695 0 10 0A9.996 9.996 0 0 0 1.064 5.51l3.34 2.59C5.192 5.736 7.396 3.977 10 3.977z" fill="#EA4335"/>
                </svg>
                <span className="text-[#121212] text-[15.8px] font-medium leading-[18px]">
                  Continue with Google
                </span>
              </button>
            </div>

            <div className="text-center">
              <p className="text-[#121212] text-[10.7px] font-medium leading-[14.3px]">
                By continuing, you acknowledge that you have read and understood, and agree to Appshot's
              </p>
              <div className="flex items-center justify-center gap-1 mt-1 flex-wrap">
                <span className="text-[#121212] text-[10.7px] font-medium leading-[14.3px] underline cursor-pointer">
                  Terms of Service
                </span>
                <span className="text-[#121212] text-[11px] font-medium leading-[14.3px]">and</span>
                <span className="text-[#121212] text-[10.8px] font-medium leading-[14.3px] underline cursor-pointer">
                  Privacy Policy
                </span>
                <span className="text-[#121212] text-[11px] font-medium leading-[14.3px]">.</span>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <p className="text-[#121212] text-[14.9px] font-medium leading-[21px]">
              © 2026 Appshots. All Rights Reserved.
            </p>
            <span className="text-[#121212] text-[15px] font-medium leading-[21px] underline cursor-pointer">
              Terms
            </span>
            <span className="text-[#121212] text-[15px] font-medium leading-[21px]">&amp;</span>
            <span className="text-[#121212] text-[15px] font-medium leading-[21px] underline cursor-pointer">
              Privacy
            </span>
          </div>
        </div>
      </div>

      <AuthModal />
      <ChatButton />
    </div>
  );
};
