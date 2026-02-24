export const AuthFooter = () => {
  return (
    <>
      <div className="text-[13px] box-border caret-transparent leading-[18.2px] text-nowrap px-0 text-center md:text-base md:leading-[22.4px] md:px-[86px]">
        <p className="text-neutral-900 text-[10.7px] box-border caret-transparent font-medium leading-[14.3px] text-wrap md:text-[11px]">
          By continuing, you acknowledge that you have read and understood, and agree to Seekfy&apos;s
        </p>
        <div className="flex items-center justify-center gap-1 mt-1 flex-wrap">
          <span className="text-neutral-900 text-[10.7px] font-medium leading-[14.3px] underline cursor-pointer">Terms of Service</span>
          <span className="text-neutral-900 text-[11px] font-medium leading-[14.3px]">and</span>
          <span className="text-neutral-900 text-[10.8px] font-medium leading-[14.3px] underline cursor-pointer">Privacy Policy</span>
          <span className="text-neutral-900 text-[11px] font-medium leading-[14.3px]">.</span>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 flex-wrap mt-10">
        <p className="text-neutral-900 text-[14.9px] font-medium leading-[21px]">
          &copy; 2026 Seekfy. All Rights Reserved.
        </p>
        <span className="text-neutral-900 text-[15px] font-medium leading-[21px] underline cursor-pointer">Terms</span>
        <span className="text-neutral-900 text-[15px] font-medium leading-[21px]">&amp;</span>
        <span className="text-neutral-900 text-[15px] font-medium leading-[21px] underline cursor-pointer">Privacy</span>
      </div>
    </>
  );
};
