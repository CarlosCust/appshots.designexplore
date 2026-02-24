import { ExploreHeader } from "@/sections/MainContent/components/ExploreHeader";

export const MainContent = () => {
  return (
    <div className="text-[13px] box-border caret-transparent leading-[18.2px] max-w-full min-h-[1010px] w-full mx-auto px-[15px] md:text-base md:leading-[22.4px] md:px-10">
      <ExploreHeader />
      <div className="text-[13px] box-border caret-transparent leading-[18.2px] md:text-base md:leading-[22.4px]"></div>
      <div className="fixed text-[13px] items-center bg-white shadow-[rgba(0,0,0,0.07)_0px_4px_4px_0px] box-border caret-transparent gap-x-[18px] flex h-[52.204px] leading-[18.2px] gap-y-[18px] translate-x-[-50.0%] z-[1002] border border-neutral-200 p-2 rounded-2xl border-solid left-2/4 bottom-8 md:text-base md:leading-[22.4px]">
        <div className="relative text-neutral-700 text-[13px] items-center bg-white box-border caret-transparent flex h-9 justify-center leading-[18.2px] w-9 border rounded-lg border-solid border-white md:text-base md:leading-[22.4px] hover:text-white hover:bg-zinc-100">
          <img
            src="https://appshots.design/images/dock/home_icon.svg"
            className="text-[13px] items-center box-border caret-transparent flex h-9 justify-center leading-[18.2px] max-w-full object-contain w-9 md:text-base md:leading-[22.4px]"
          />
        </div>
        <div className="relative text-white text-[13px] items-center bg-black box-border caret-transparent flex h-9 justify-center leading-[18.2px] w-9 border rounded-lg border-solid border-white md:text-base md:leading-[22.4px]">
          <img
            src="https://appshots.design/images/dock/explore_icon.svg"
            className="text-[13px] items-center box-border caret-transparent flex brightness-0 invert-[1] h-9 justify-center leading-[18.2px] max-w-full object-contain w-9 md:text-base md:leading-[22.4px]"
          />
        </div>
        <div className="relative text-neutral-700 text-[13px] items-center bg-white box-border caret-transparent flex h-9 justify-center leading-[18.2px] w-9 border rounded-lg border-solid border-white md:text-base md:leading-[22.4px] hover:text-white hover:bg-zinc-100">
          <img
            src="https://appshots.design/images/dock/search_icon.svg"
            className="text-[13px] items-center box-border caret-transparent flex h-9 justify-center leading-[18.2px] max-w-full object-contain w-9 md:text-base md:leading-[22.4px]"
          />
        </div>
        <div className="relative text-neutral-700 text-[13px] items-center bg-white box-border caret-transparent flex h-9 justify-center leading-[18.2px] w-9 border rounded-lg border-solid border-white md:text-base md:leading-[22.4px] hover:text-white hover:bg-zinc-100">
          <img
            src="https://appshots.design/images/dock/collections_icon.svg"
            className="text-[13px] items-center box-border caret-transparent flex h-9 justify-center leading-[18.2px] max-w-full object-contain w-9 md:text-base md:leading-[22.4px]"
          />
        </div>
      </div>
    </div>
  );
};
