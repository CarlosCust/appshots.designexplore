import { useState } from "react";
import { SearchModal } from "@/components/SearchModal";

export const SearchBar = () => {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  return (
    <>
      <SearchModal isOpen={isSearchModalOpen} onClose={() => setIsSearchModalOpen(false)} />
    <div className="relative text-xs box-border caret-transparent hidden grow-0 leading-[16.8px] min-h-0 min-w-0 order-none text-nowrap mx-0 px-0 md:text-sm md:flex md:grow md:leading-[19.6px] md:min-h-[auto] md:min-w-[auto] md:order-2 md:mx-auto md:px-5">
      <div className="static text-xs [align-items:normal] box-border caret-transparent block h-auto justify-normal leading-[16.8px] text-nowrap transform-none w-auto mb-2.5 px-0 left-auto md:absolute md:text-sm md:items-center md:flex md:h-full md:justify-center md:leading-[19.6px] md:translate-x-[-50.0%] md:w-full md:mb-0 md:px-[15px] md:left-2/4">
        <div className="relative text-xs items-center box-border caret-transparent gap-x-4 flex leading-[16.8px] min-h-0 min-w-0 gap-y-4 text-nowrap md:text-sm md:leading-[19.6px] md:min-h-[auto] md:min-w-[auto]">
          <button
            onClick={() => setIsSearchModalOpen(true)}
            className="text-xs items-center bg-zinc-100 box-border caret-transparent gap-x-2 flex h-12 leading-[16.8px] min-h-0 min-w-0 gap-y-2 text-nowrap w-max px-4 py-2.5 rounded-xl md:text-sm md:leading-[19.6px] md:min-h-[auto] md:min-w-[auto] md:w-[315px] hover:bg-zinc-200 transition-colors cursor-pointer"
          >
            <div className="text-xs items-center box-border caret-transparent flex h-[22px] justify-center leading-[16.8px] min-h-0 min-w-0 text-nowrap w-[22px] md:text-sm md:leading-[19.6px] md:min-h-[auto] md:min-w-[auto]">
              <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-500">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </div>
            <div className="relative text-xs items-center box-border caret-transparent flex leading-[16.8px] min-h-0 min-w-0 text-nowrap w-full md:text-sm md:leading-[19.6px] md:min-h-[auto] md:min-w-[auto]">
              <span className="text-zinc-600 text-base box-border caret-transparent block leading-[22.4px] min-h-0 min-w-0 text-nowrap md:min-h-[auto] md:min-w-[auto]">
                Search{" "}
                <i className="box-border caret-transparent hidden text-nowrap md:inline">
                  for apps, flows &amp; screens
                </i>
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
    </>
  );
};
