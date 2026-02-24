export const AuthFooter = () => {
  return (
    <div className="text-[10px] box-border caret-transparent leading-[13px] pt-[25px] md:text-[11px] md:leading-[14.3px]">
      {" "}
      By continuing, you acknowledge that you have read and understood, and
      agree to Appshot&#39;s{" "}
      <a
        href="https://appshots.design/TermsOfService/"
        className="text-[10px] box-border caret-transparent leading-[13px] underline md:text-[11px] md:leading-[14.3px] hover:no-underline"
      >
        Terms of Service
      </a>
      and{" "}
      <a
        href="https://appshots.design/PrivacyPolicy/"
        className="text-[10px] box-border caret-transparent leading-[13px] underline md:text-[11px] md:leading-[14.3px] hover:no-underline"
      >
        {" "}
        Privacy Policy
      </a>
      .{" "}
    </div>
  );
};
