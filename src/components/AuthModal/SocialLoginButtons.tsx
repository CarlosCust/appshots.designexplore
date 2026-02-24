export type SocialLoginButtonsProps = {
  provider: string;
  iconUrl: string;
  text: string;
  variant: string;
};

export const SocialLoginButtons = (props: SocialLoginButtonsProps) => {
  return (
    <div
      className={`relative text-sm items-center bg-white box-border caret-transparent justify-center leading-[18px] min-h-[50px] w-full border border-gray-200 overflow-hidden mb-5 rounded-[11px] border-solid md:text-base ${props.variant}`}
    >
      <img
        src={props.iconUrl}
        alt={props.provider}
        className="text-sm aspect-[auto_20_/_20] box-border caret-transparent h-5 max-w-full w-5 mr-3 md:text-base"
      />
      <span className="text-sm box-border caret-transparent md:text-base block">
        {props.text}
      </span>
    </div>
  );
};
