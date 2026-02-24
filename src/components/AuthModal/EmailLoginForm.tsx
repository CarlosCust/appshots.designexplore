export const EmailLoginForm = () => {
  return (
    <div className="text-[13px] box-border caret-transparent hidden leading-[18.2px] md:text-[15px] md:leading-[21px]">
      <div className="relative text-stone-500 text-sm box-border caret-transparent leading-[18.2px] my-6 md:text-base md:leading-[20.8px] before:accent-auto before:bg-stone-300 before:box-border before:caret-transparent before:text-stone-500 before:block before:text-sm before:not-italic before:normal-nums before:font-medium before:h-[0.6px] before:tracking-[normal] before:leading-[18.2px] before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-center before:indent-[0px] before:normal-case before:visible before:w-full before:z-[1] before:border-separate before:left-0 before:top-2/4 before:font-indivisible before:md:text-base before:md:leading-[20.8px]">
        <span className="relative text-sm bg-white box-border caret-transparent leading-[18.2px] z-[2] px-2.5 md:text-base md:leading-[20.8px]">
          Or
        </span>
      </div>
      <div className="text-[13px] box-border caret-transparent leading-[18.2px] md:text-[15px] md:leading-[21px]">
        <input
          type="email"
          name="email"
          placeholder="Enter email address"
          value=""
          className="text-sm bg-transparent box-border caret-transparent block leading-[19.6px] min-h-[50px] text-left w-full border border-stone-300 px-[15px] py-2.5 rounded-[11px] border-solid md:text-base md:leading-[22.4px]"
        />
      </div>
      <input
        type="submit"
        name="submit_login"
        value="Continue with Email"
        className="relative text-sm box-border caret-transparent block leading-[19.6px] min-h-[50px] text-nowrap w-full border border-gray-200 mt-5 px-[15px] py-2.5 rounded-[11px] border-solid md:text-base md:leading-[22.4px]"
      />
    </div>
  );
};
