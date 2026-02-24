import { useState } from "react";

export const PlatformSelector = () => {
  const [activeTab, setActiveTab] = useState<"apps" | "resources">("apps");

  return (
    <div className="relative text-[13px] box-border caret-transparent hidden leading-[18.2px] min-h-0 min-w-0 order-none text-nowrap md:text-base md:flex md:leading-[22.4px] md:min-h-[auto] md:min-w-[auto] md:order-2">
      <div className="relative text-[13px] bg-zinc-100 box-border caret-transparent leading-[18.2px] min-h-0 min-w-0 text-nowrap border-zinc-100 overflow-hidden ml-2.5 rounded-[70px] border-[3px] border-solid md:text-base md:leading-[22.4px] md:min-h-[auto] md:min-w-[auto] md:ml-[25px]">
        <div
          className="absolute text-[13px] bg-black box-border caret-transparent h-full leading-[18.2px] pointer-events-none text-nowrap z-0 rounded-[60px] top-0 transition-all duration-300 ease-in-out md:text-base md:leading-[22.4px]"
          style={{
            width: activeTab === "apps" ? "60px" : "100px",
            left: activeTab === "apps" ? "0px" : "63px",
          }}
        />
        <button
          type="button"
          title="Apps"
          className={`relative text-sm bg-transparent caret-transparent leading-[15.4px] text-center text-nowrap z-[1] mr-[3px] px-[15px] py-[7px] rounded-[60px] transition-colors duration-200 ${
            activeTab === "apps" ? "text-white pointer-events-none" : "text-zinc-600 cursor-pointer hover:text-zinc-900"
          }`}
          onClick={() => setActiveTab("apps")}
        >
          Apps
        </button>
        <button
          type="button"
          title="Resources"
          className={`relative text-sm bg-transparent caret-transparent leading-[15.4px] text-center text-nowrap z-[1] px-[15px] py-[7px] rounded-[60px] transition-colors duration-200 ${
            activeTab === "resources" ? "text-white pointer-events-none" : "text-zinc-600 cursor-pointer hover:text-zinc-900"
          }`}
          onClick={() => setActiveTab("resources")}
        >
          Resources
        </button>
      </div>
    </div>
  );
};
