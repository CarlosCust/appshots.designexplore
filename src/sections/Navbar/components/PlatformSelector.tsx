export const PlatformSelector = () => {
  return (
    <div className="relative text-[13px] box-border caret-transparent hidden leading-[18.2px] min-h-0 min-w-0 order-none text-nowrap md:text-base md:flex md:leading-[22.4px] md:min-h-[auto] md:min-w-[auto] md:order-2">
      <div className="relative text-[13px] bg-zinc-100 box-border caret-transparent leading-[18.2px] min-h-0 min-w-0 text-nowrap border-zinc-100 overflow-hidden ml-2.5 rounded-[70px] border-[3px] border-solid md:text-base md:leading-[22.4px] md:min-h-[auto] md:min-w-[auto] md:ml-[25px]">
        <div className="absolute text-[13px] bg-black box-border caret-transparent h-full leading-[18.2px] pointer-events-none text-nowrap w-[53.9px] z-0 rounded-[60px] left-0 top-0 md:text-base md:leading-[22.4px]"></div>
        <button
          type="button"
          title="iOS"
          className="relative text-white text-sm bg-transparent caret-transparent leading-[15.4px] pointer-events-none text-center text-nowrap z-[1] mr-[3px] px-[15px] py-[7px] rounded-[60px]"
        >
          iOS
        </button>
        <button
          type="button"
          title="Android"
          className="relative text-zinc-600 text-sm bg-transparent caret-transparent leading-[15.4px] text-center text-nowrap z-[1] mr-[3px] px-[15px] py-[7px] rounded-[60px]"
        >
          Android
        </button>
        <button
          type="button"
          title="Web"
          className="relative text-zinc-600 text-sm bg-transparent caret-transparent leading-[15.4px] text-center text-nowrap z-[1] px-[15px] py-[7px] rounded-[60px]"
          onClick={() => window.location.href = 'https://appshots.design/explore?platform=web&type=apps'}
        >
          Web
        </button>
      </div>
    </div>
  );
};
