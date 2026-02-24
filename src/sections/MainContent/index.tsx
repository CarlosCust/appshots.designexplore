import { ExploreHeader } from "@/sections/MainContent/components/ExploreHeader";

export const MainContent = () => {
  return (
    <div className="text-[13px] box-border caret-transparent leading-[18.2px] max-w-full min-h-[1010px] w-full mx-auto px-[15px] md:text-base md:leading-[22.4px] md:px-10">
      <ExploreHeader />
      <div className="text-[13px] box-border caret-transparent leading-[18.2px] md:text-base md:leading-[22.4px]"></div>
      <div className="fixed text-[13px] items-center bg-white shadow-[rgba(0,0,0,0.07)_0px_4px_4px_0px] box-border caret-transparent gap-x-[18px] flex h-[52.204px] leading-[18.2px] gap-y-[18px] translate-x-[-50.0%] z-[1002] border border-neutral-200 p-2 rounded-2xl border-solid left-2/4 bottom-8 md:text-base md:leading-[22.4px]">
        <div className="relative text-neutral-700 text-[13px] items-center bg-white box-border caret-transparent flex h-9 justify-center leading-[18.2px] w-9 border rounded-lg border-solid border-white md:text-base md:leading-[22.4px] hover:text-white hover:bg-zinc-100">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
        </div>
        <div className="relative text-white text-[13px] items-center bg-black box-border caret-transparent flex h-9 justify-center leading-[18.2px] w-9 border rounded-lg border-solid border-white md:text-base md:leading-[22.4px]">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
        </div>
        <div className="relative text-neutral-700 text-[13px] items-center bg-white box-border caret-transparent flex h-9 justify-center leading-[18.2px] w-9 border rounded-lg border-solid border-white md:text-base md:leading-[22.4px] hover:text-white hover:bg-zinc-100">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </div>
        <div className="relative text-neutral-700 text-[13px] items-center bg-white box-border caret-transparent flex h-9 justify-center leading-[18.2px] w-9 border rounded-lg border-solid border-white md:text-base md:leading-[22.4px] hover:text-white hover:bg-zinc-100">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>
        </div>
      </div>
    </div>
  );
};
