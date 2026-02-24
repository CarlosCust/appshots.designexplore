export const CategoryNav = () => {
  return (
    <div className="sticky text-[13px] items-center bg-white shadow-[rgb(255,255,255)_0px_-10px_24px_5px] box-border caret-transparent gap-x-6 flex leading-[18.2px] gap-y-6 text-nowrap z-[5] overflow-auto py-4 top-[72px] md:text-base md:leading-[22.4px]">
      <button
        type="button"
        className="relative text-stone-950/30 text-[13.3333px] items-center bg-zinc-100 caret-transparent flex shrink-0 h-8 justify-center leading-[normal] text-center text-nowrap w-8 rounded-[5px] hover:bg-gray-200"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><line x1="21" x2="14" y1="4" y2="4"/><line x1="10" x2="3" y1="4" y2="4"/><line x1="21" x2="12" y1="12" y2="12"/><line x1="8" x2="3" y1="12" y2="12"/><line x1="21" x2="16" y1="20" y2="20"/><line x1="12" x2="3" y1="20" y2="20"/><line x1="14" x2="14" y1="2" y2="6"/><line x1="8" x2="8" y1="10" y2="14"/><line x1="16" x2="16" y1="18" y2="22"/></svg>
      </button>
      <div className="relative text-[13px] box-border caret-transparent gap-x-4 flex leading-[18.2px] gap-y-4 text-nowrap md:text-base md:gap-x-6 md:leading-[22.4px] md:gap-y-6">
        <button className="relative text-black text-lg items-center bg-transparent caret-transparent flex leading-5 text-center text-nowrap px-0 py-[5px] md:text-xl md:leading-6 after:accent-auto after:bg-black after:box-border after:caret-transparent after:text-black after:block after:text-lg after:not-italic after:normal-nums after:font-medium after:h-0.5 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-center after:indent-[0px] after:normal-case after:text-nowrap after:origin-[0%_50%] after:visible after:w-full after:border-separate after:-bottom-0.5 after:font-indivisible after:md:text-xl after:md:leading-6">
          Mobile{" "}
          <span className="text-white text-xs bg-black box-border caret-transparent block leading-3 text-nowrap ml-1.5 p-1.5 rounded-[50px]">
            617
          </span>
        </button>
        <button className="relative text-zinc-600 text-lg items-center bg-transparent caret-transparent flex leading-5 text-center text-nowrap px-0 py-[5px] md:text-xl md:leading-6 hover:text-black hover:border-black">
          Web{" "}
          <span className="text-zinc-400 text-xs bg-zinc-50 box-border caret-transparent block leading-3 text-nowrap ml-1.5 p-1.5 rounded-[50px]">
            1.342
          </span>
        </button>
        <button className="relative text-zinc-600 text-lg items-center bg-transparent caret-transparent flex leading-5 text-center text-nowrap px-0 py-[5px] md:text-xl md:leading-6 hover:text-black hover:border-black">
          Marketing Pages{" "}
          <span className="text-zinc-400 text-xs bg-zinc-50 box-border caret-transparent block leading-3 text-nowrap ml-1.5 p-1.5 rounded-[50px]">
            856
          </span>
        </button>
      </div>
    </div>
  );
};
