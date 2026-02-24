export const ChatButton = () => {
  return (
    <div className="fixed text-[13px] items-center box-border caret-transparent flex leading-[18.2px] z-[2147482999] right-5 bottom-5 font-dm_sans md:text-base md:leading-[22.4px]">
      <div
        role="button"
        className="relative text-[13px] items-center bg-black shadow-[rgba(0,0,0,0.15)_0px_0px_20px_0px] box-border caret-transparent flex h-12 justify-center leading-[18.2px] w-12 rounded-[50%] md:text-base md:leading-[22.4px]"
      >
        <div className="absolute text-[13px] box-border caret-transparent flex leading-[18.2px] md:text-base md:leading-[22.4px]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        </div>
        <span className="absolute text-white text-[10px] bg-red-600 box-border caret-transparent hidden h-3 leading-[14px] w-3 rounded-[50%] right-0.5 -top-0.5"></span>
      </div>
    </div>
  );
};
