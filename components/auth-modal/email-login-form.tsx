export const EmailLoginForm = () => {
  return (
    <div className="text-[13px] items-start box-border caret-transparent flex flex-col leading-[18.2px] text-nowrap pb-4 px-0 md:text-base md:leading-[22.4px] md:px-[86px]">
      <div className="text-[13px] items-center box-border caret-transparent flex leading-[18.2px] text-nowrap w-full mb-5 md:text-base md:leading-[22.4px]">
        <div className="text-[13px] bg-zinc-200 box-border caret-transparent flex-1 h-px leading-[18.2px] text-nowrap md:text-base md:leading-[22.4px]"></div>
        <span className="text-zinc-500 text-sm box-border caret-transparent leading-[18.2px] text-nowrap mx-4 md:text-base md:leading-[22.4px]">
          or
        </span>
        <div className="text-[13px] bg-zinc-200 box-border caret-transparent flex-1 h-px leading-[18.2px] text-nowrap md:text-base md:leading-[22.4px]"></div>
      </div>
      <button
        type="button"
        className="text-white text-[13px] items-center bg-neutral-900 box-border caret-transparent flex min-h-[50px] justify-center leading-[18.2px] overflow-hidden text-nowrap w-full gap-2 px-0 py-3.5 rounded-[11px] md:text-base md:leading-[22.4px] hover:bg-neutral-800 transition-colors"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="16" x="2" y="4" rx="2"/>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
        </svg>
        <span className="text-white text-base box-border caret-transparent font-medium leading-[18px] text-nowrap">
          Continue with Email
        </span>
      </button>
    </div>
  );
};
