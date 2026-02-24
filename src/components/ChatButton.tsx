export const ChatButton = () => {
  return (
    <div className="fixed text-[13px] items-center box-border caret-transparent flex leading-[18.2px] z-[2147482999] right-5 bottom-5 font-dm_sans md:text-base md:leading-[22.4px]">
      <div
        role="button"
        className="relative text-[13px] items-center bg-black shadow-[rgba(0,0,0,0.15)_0px_0px_20px_0px] box-border caret-transparent flex h-12 justify-center leading-[18.2px] w-12 rounded-[50%] md:text-base md:leading-[22.4px]"
      >
        <div className="absolute text-[13px] box-border caret-transparent flex leading-[18.2px] md:text-base md:leading-[22.4px]">
          <img
            src="https://c.animaapp.com/mm0uycwofWc9G5/assets/icon-11.svg"
            alt="Icon"
            className="text-[13px] box-border caret-transparent h-6 leading-[18.2px] w-6 md:text-base md:leading-[22.4px]"
          />
        </div>
        <span className="absolute text-white text-[10px] bg-red-600 box-border caret-transparent hidden h-3 leading-[14px] w-3 rounded-[50%] right-0.5 -top-0.5"></span>
      </div>
    </div>
  );
};
