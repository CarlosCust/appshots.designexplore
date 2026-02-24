import { AuthModalContent } from "@/components/AuthModal/AuthModalContent";

export const AuthModal = () => {
  return (
    <div className="relative text-neutral-900 text-[13px] bg-white box-border caret-transparent leading-[18.2px] text-center w-full z-[99] pb-5 left-0 bottom-0 md:text-[15px] md:leading-[21px] md:pb-[30px] before:accent-auto before:bg-[linear-gradient(to_top,rgb(255,255,255)_20%,rgba(255,255,255,0))] before:box-border before:caret-transparent before:text-neutral-900 before:block before:text-[13px] before:not-italic before:normal-nums before:font-medium before:h-[150px] before:tracking-[normal] before:leading-[18.2px] before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-center before:indent-[0px] before:normal-case before:top-[-150px] before:visible before:w-full before:border-separate before:left-0 before:font-indivisible before:md:text-[15px] before:md:leading-[21px]">
      <div className="relative text-[13px] box-border caret-transparent leading-[18.2px] z-[999999] overflow-auto mb-5 md:text-[15px] md:leading-[21px]">
        <AuthModalContent />
      </div>
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
    </div>
  );
};
