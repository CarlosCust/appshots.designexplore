export const Footer = () => {
  return (
    <div className="text-[13px] box-border caret-transparent leading-[18.2px] max-w-full w-full mx-auto px-[15px] md:text-[15px] md:leading-[21px] md:px-10">
      <p className="text-[13px] box-border caret-transparent leading-[18.2px] md:text-[15px] md:leading-[21px]">
        {" "}
        © 2026 Appshots. All Rights Reserved.{" "}
        <a
          href="https://appshots.design/TermsOfService/"
          className="text-[13px] box-border caret-transparent leading-[18.2px] underline md:text-[15px] md:leading-[21px] hover:no-underline"
        >
          Terms{" "}
        </a>
        &amp;{" "}
        <a
          href="https://appshots.design/PrivacyPolicy/"
          className="text-[13px] box-border caret-transparent leading-[18.2px] underline md:text-[15px] md:leading-[21px] hover:no-underline"
        >
          {" "}
          Privacy
        </a>
      </p>
    </div>
  );
};
