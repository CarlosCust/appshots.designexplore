import { useNavigate } from "react-router-dom";

export type AppCardProps = {
  imageUrl: string;
  imageAlt: string;
  hasOuterWrapper?: boolean;
  showDots?: boolean;
  labelClassName?: string;
  appId?: string;
};

export const AppCard = (props: AppCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (props.appId) {
      navigate(`/apps/${props.appId}`);
    }
  };

  const content = (
    <div className="relative text-[13px] box-border caret-transparent leading-[18.2px] md:text-base md:leading-[22.4px] bg-zinc-50 overflow-hidden p-8 rounded-[40px]">
      <div className="text-[13px] box-border caret-transparent leading-[18.2px] md:text-base md:leading-[22.4px] relative">
        <div className="text-[13px] box-border caret-transparent leading-[18.2px] z-[4] md:text-base md:leading-[22.4px] absolute items-center flex justify-between w-[calc(100%_+_16px)] -left-2 -top-2">
          <div className="relative text-[13px] box-border caret-transparent leading-[18.2px] z-[4] md:text-base md:leading-[22.4px]">
            <input
              type="checkbox"
              className="text-neutral-600 text-[13.3333px] bg-transparent box-border caret-transparent hidden leading-[normal] ml-1 mr-[3px] my-[3px] p-0"
            />
            <label
              title="select"
              className={`relative text-[13px] bg-white box-border caret-transparent block h-8 leading-[18.2px] w-8 border-zinc-400 rounded-[50%] border-[3px] border-solid md:text-base md:leading-[22.4px] after:accent-auto after:box-border after:caret-transparent after:text-stone-500 after:hidden after:text-[13px] after:not-italic after:normal-nums after:font-medium after:h-3 after:tracking-[normal] after:leading-[18.2px] after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-1.5 after:border-separate after:left-[11px] after:top-[5px] after:font-indivisible after:md:text-base after:md:leading-[22.4px] ${props.labelClassName || ""}`}
            ></label>
          </div>
        </div>
      </div>
      <div className="relative text-[13px] aspect-[0.462_/_1] bg-stone-50 box-border caret-transparent leading-[18.2px] overflow-hidden rounded-3xl md:text-base md:leading-[22.4px]">
        <div className="relative text-[13px] box-border caret-transparent flex h-full leading-[18.2px] md:text-base md:leading-[22.4px]">
          <div className="absolute text-[13px] box-border caret-transparent shrink-0 h-full leading-[18.2px] w-full z-[2] left-0 top-0 md:text-base md:leading-[22.4px]">
            <img
              src={props.imageUrl}
              alt={props.imageAlt}
              className="text-[13px] box-border caret-transparent h-full leading-[18.2px] max-w-full object-cover object-[50%_0%] w-full md:text-base md:leading-[22.4px]"
            />
          </div>
        </div>
      </div>
      <div
        title="View App"
        onClick={handleClick}
        className="absolute text-[13px] box-border caret-transparent h-full leading-[18.2px] w-full z-[2] left-0 top-0 md:text-base md:leading-[22.4px] cursor-pointer"
      ></div>
      {props.showDots && (
        <div className="absolute text-[13px] box-border caret-transparent h-1/4 leading-[18.2px] opacity-0 w-full z-[2] ml-auto bottom-0 inset-x-0 md:text-base md:leading-[22.4px] md:opacity-100">
          <div className="absolute text-[13px] box-border caret-transparent gap-x-1 flex justify-center leading-[18.2px] gap-y-1 w-full bottom-3 inset-x-0 md:text-base md:leading-[22.4px]">
            <span className="relative text-[13px] box-border caret-transparent block h-2 leading-[18.2px] w-2 rounded-full md:text-base md:leading-[22.4px] before:accent-auto before:bg-[url(data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%278%27%20height=%278%27%20fill=%27none%27%20viewBox=%270%200%208%208%27%3E%3Cpath%20fill=%27%237A7A7A%27%20d=%27M3.25.433a1.5%201.5%200%200%201%201.5%200l1.964%201.134a1.5%201.5%200%200%201%20.75%201.299v2.268a1.5%201.5%200%200%201-.75%201.299L4.75%207.567a1.5%201.5%200%200%201-1.5%200L1.286%206.433a1.5%201.5%200%200%201-.75-1.299V2.866a1.5%201.5%200%200%201%20.75-1.299z%27/%3E%3C/svg%3E)] before:bg-center before:bg-no-repeat before:bg-contain before:box-border before:caret-transparent before:text-stone-500 before:block before:text-[13px] before:not-italic before:normal-nums before:font-medium before:h-full before:tracking-[normal] before:leading-[18.2px] before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-start before:indent-[0px] before:normal-case before:visible before:w-full before:border-separate before:font-indivisible before:md:text-base before:md:leading-[22.4px]"></span>
            <span className="text-[13px] bg-zinc-300 box-border caret-transparent block h-2 leading-[18.2px] w-2 rounded-full md:text-base md:leading-[22.4px]"></span>
            <span className="text-[13px] bg-zinc-300 box-border caret-transparent block h-2 leading-[18.2px] w-2 rounded-full md:text-base md:leading-[22.4px]"></span>
          </div>
        </div>
      )}
    </div>
  );

  if (props.hasOuterWrapper) {
    return (
      <div className="text-[13px] box-border caret-transparent leading-[18.2px] overflow-hidden md:text-base md:leading-[22.4px]">
        {content}
      </div>
    );
  }

  return content;
};
