export const CategoryNav = () => {
  return (
    <div className="sticky text-[13px] items-center bg-white shadow-[rgb(255,255,255)_0px_-10px_24px_5px] box-border caret-transparent gap-x-6 flex leading-[18.2px] gap-y-6 text-nowrap z-[5] overflow-auto py-4 top-[72px] md:text-base md:leading-[22.4px]">
      <button
        type="button"
        className="relative text-stone-950/30 text-[13.3333px] items-center bg-zinc-100 caret-transparent flex shrink-0 h-8 justify-center leading-[normal] text-center text-nowrap w-8 rounded-[5px] hover:bg-gray-200"
      >
        <img
          src="https://c.animaapp.com/mm0uycwofWc9G5/assets/icon-4.svg"
          alt="Icon"
          className="box-border caret-transparent h-4 text-nowrap w-4"
        />
      </button>
      <div className="relative text-[13px] box-border caret-transparent gap-x-4 flex leading-[18.2px] gap-y-4 text-nowrap md:text-base md:gap-x-6 md:leading-[22.4px] md:gap-y-6">
        <button className="relative text-black text-lg items-center bg-transparent caret-transparent flex leading-5 text-center text-nowrap px-0 py-[5px] md:text-xl md:leading-6 after:accent-auto after:bg-black after:box-border after:caret-transparent after:text-black after:block after:text-lg after:not-italic after:normal-nums after:font-medium after:h-0.5 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-center after:indent-[0px] after:normal-case after:text-nowrap after:origin-[0%_50%] after:visible after:w-full after:border-separate after:-bottom-0.5 after:font-indivisible after:md:text-xl after:md:leading-6">
          Apps{" "}
          <span className="text-white text-xs bg-black box-border caret-transparent block leading-3 text-nowrap ml-1.5 p-1.5 rounded-[50px]">
            617
          </span>
        </button>
        <button className="relative text-zinc-600 text-lg items-center bg-transparent caret-transparent flex leading-5 text-center text-nowrap px-0 py-[5px] md:text-xl md:leading-6 hover:text-black hover:border-black">
          Screens{" "}
          <span className="text-zinc-400 text-xs bg-zinc-50 box-border caret-transparent block leading-3 text-nowrap ml-1.5 p-1.5 rounded-[50px]">
            116.231
          </span>
        </button>
        <button className="relative text-zinc-600 text-lg items-center bg-transparent caret-transparent flex leading-5 text-center text-nowrap px-0 py-[5px] md:text-xl md:leading-6 hover:text-black hover:border-black">
          UI Elements{" "}
          <span className="text-zinc-400 text-xs bg-zinc-50 box-border caret-transparent block leading-3 text-nowrap ml-1.5 p-1.5 rounded-[50px]">
            2.287
          </span>
        </button>
        <button className="relative text-zinc-600 text-lg items-center bg-transparent caret-transparent flex leading-5 text-center text-nowrap px-0 py-[5px] md:text-xl md:leading-6 hover:text-black hover:border-black">
          Flows{" "}
          <span className="text-zinc-400 text-xs bg-zinc-50 box-border caret-transparent block leading-3 text-nowrap ml-1.5 p-1.5 rounded-[50px]">
            5.897
          </span>
        </button>
      </div>
    </div>
  );
};
