export const AppCardImage = () => {
  return (
    <div className="relative text-[13px] aspect-[0.462_/_1] bg-stone-50 box-border caret-transparent leading-[18.2px] overflow-hidden rounded-3xl md:text-base md:leading-[22.4px]">
      <div className="relative text-[13px] box-border caret-transparent flex h-full leading-[18.2px] md:text-base md:leading-[22.4px]">
        <div className="absolute text-[13px] box-border caret-transparent shrink-0 h-full leading-[18.2px] w-full z-[2] left-0 top-0 md:text-base md:leading-[22.4px]">
          <img
            src="/images/screenshots/period-tracker-1.jpg"
            alt="Period Tracker screenshot 1"
            className="text-[13px] box-border caret-transparent h-full leading-[18.2px] max-w-full object-cover object-[50%_0%] w-full md:text-base md:leading-[22.4px]"
          />
        </div>
      </div>
    </div>
  );
};
