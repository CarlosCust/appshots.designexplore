"use client";

import { useState } from "react";
import { MobileMenuDropdown } from "./mobile-menu-dropdown";

export const MobileMenuButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="text-[13px] items-center box-border caret-transparent flex leading-[18.2px] order-3 text-nowrap md:text-base md:leading-[22.4px] md:order-4">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="text-[13px] items-center bg-zinc-100 box-border caret-transparent flex h-9 justify-center leading-[18.2px] text-nowrap w-9 rounded-lg hover:bg-zinc-200 transition-colors md:text-base md:leading-[22.4px]"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
      </button>
      {isOpen && <MobileMenuDropdown />}
    </div>
  );
};
