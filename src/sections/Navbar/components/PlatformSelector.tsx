import { useState } from "react";

export const PlatformSelector = () => {
  const [activeTab, setActiveTab] = useState<"apps" | "resources">("apps");

  return (
    <div className="relative hidden md:flex md:order-2 ml-6">
      <div className="relative flex items-center bg-[#f2f2f2] rounded-full p-[5px]">
        <button
          type="button"
          title="Apps"
          className={`relative z-[1] text-[14px] font-medium leading-none text-center text-nowrap px-[18px] py-[9px] rounded-full transition-all duration-300 ${
            activeTab === "apps"
              ? "bg-black text-white"
              : "bg-transparent text-[#585858] cursor-pointer hover:text-black"
          }`}
          onClick={() => setActiveTab("apps")}
        >
          Apps
        </button>
        <button
          type="button"
          title="Resources"
          className={`relative z-[1] text-[14px] font-medium leading-none text-center text-nowrap px-[18px] py-[9px] rounded-full transition-all duration-300 ${
            activeTab === "resources"
              ? "bg-black text-white"
              : "bg-transparent text-[#585858] cursor-pointer hover:text-black"
          }`}
          onClick={() => setActiveTab("resources")}
        >
          Resources
        </button>
      </div>
    </div>
  );
};
