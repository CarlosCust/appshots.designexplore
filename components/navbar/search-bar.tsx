"use client";

import { useState } from "react";
import { SearchModal } from "@/components/search-modal";

export const SearchBar = () => {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  return (
    <>
      <div
        className="text-[13px] items-center bg-zinc-50 box-border caret-transparent flex leading-[18.2px] min-w-[130px] order-3 text-nowrap p-1.5 rounded-lg border border-gray-200 border-solid md:text-base md:min-w-[250px] md:order-2 md:leading-[22.4px] md:px-4 md:py-2 md:rounded-2xl cursor-pointer hover:bg-zinc-100 transition-colors"
        onClick={() => setIsSearchModalOpen(true)}
      >
        <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-500">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <span className="text-zinc-500 text-[11px] box-border caret-transparent leading-[11px] ml-1 text-nowrap md:text-sm md:leading-[14px] md:ml-2">
          Search for apps, flows & screens
        </span>
      </div>
      <SearchModal isOpen={isSearchModalOpen} onClose={() => setIsSearchModalOpen(false)} />
    </>
  );
};
