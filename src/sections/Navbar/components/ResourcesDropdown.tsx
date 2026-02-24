export const ResourcesDropdown = () => {
  return (
    <div className="relative text-xs items-center box-border caret-transparent hidden leading-[16.8px] mr-[15px] md:text-[13px] md:leading-[18.2px] md:mr-[25px]">
      <div className="relative text-xs items-center box-border caret-transparent flex leading-[16.8px] md:text-[13px] md:leading-[18.2px]">
        <span className="text-xs box-border caret-transparent block leading-3 mx-[5px] md:text-[13px] md:leading-[13px]">
          Resources
        </span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-current">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
      <div className="absolute text-xs bg-white shadow-[rgba(0,0,0,0.06)_0px_2px_3px_1px] box-border caret-transparent hidden leading-[16.8px] min-w-[100px] z-[999] rounded-[7px] left-0 top-[calc(100%_+_20px)] md:text-[13px] md:leading-[18.2px]">
        <ul className="text-xs box-border caret-transparent leading-[16.8px] list-none p-3 md:text-[13px] md:leading-[18.2px]">
          <li className="text-xs box-border caret-transparent leading-[16.8px] mb-2.5 md:text-[13px] md:leading-[18.2px]">
            <a
              href="https://appshots.design/explore?platform=ios&type=apps"
              className="text-zinc-600 text-xs box-border caret-transparent leading-[16.8px] md:text-[13px] md:leading-[18.2px] hover:text-neutral-900 hover:border-neutral-900"
            >
              Sub. Agency
            </a>
          </li>
          <li className="text-xs box-border caret-transparent leading-[16.8px] mb-2.5 md:text-[13px] md:leading-[18.2px]">
            <a
              href="https://appshots.design/explore?platform=ios&type=apps"
              className="text-zinc-600 text-xs box-border caret-transparent leading-[16.8px] md:text-[13px] md:leading-[18.2px] hover:text-neutral-900 hover:border-neutral-900"
            >
              Insights
            </a>
          </li>
          <li className="text-xs box-border caret-transparent leading-[16.8px] md:text-[13px] md:leading-[18.2px]">
            <a
              href="https://appshots.design/explore?platform=ios&type=apps"
              className="text-zinc-600 text-xs box-border caret-transparent leading-[16.8px] md:text-[13px] md:leading-[18.2px] hover:text-neutral-900 hover:border-neutral-900"
            >
              Font Drops
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
