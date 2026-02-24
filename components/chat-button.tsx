export const ChatButton = () => {
  return (
    <div className="fixed text-[13px] bg-black box-border caret-transparent cursor-pointer flex h-[52px] leading-[18.2px] shadow-[0px_3px_20px_rgba(0,0,0,0.15)] w-[52px] z-[1000] p-[15px] rounded-[50%] right-5 bottom-5 md:text-base md:leading-[22.4px] hover:bg-zinc-800 transition-colors">
      <div className="text-[13px] items-center box-border caret-transparent flex h-full justify-center leading-[18.2px] w-full md:text-base md:leading-[22.4px]">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      </div>
    </div>
  );
};
