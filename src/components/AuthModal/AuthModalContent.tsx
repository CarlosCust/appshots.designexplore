import { SocialLoginButtons } from "@/components/AuthModal/SocialLoginButtons";
import { EmailLoginForm } from "@/components/AuthModal/EmailLoginForm";
import { AuthFooter } from "@/components/AuthModal/AuthFooter";

export const AuthModalContent = () => {
  return (
    <div className="text-[13px] items-center box-border caret-transparent flex flex-col justify-center leading-[18.2px] max-w-full min-h-full w-[570px] mx-auto pt-2.5 pb-10 px-[15px] md:text-[15px] md:leading-[21px] md:px-10">
      <div className="text-[21px] font-semibold box-border caret-transparent leading-[31.5px] text-wrap mb-5 md:text-4xl md:leading-[54px] md:text-nowrap md:mb-[30px]">
        Log in or sign up to continue browsing
      </div>
      <div className="text-[13px] box-border caret-transparent leading-[18.2px] max-w-[318px] w-full mx-auto md:text-[15px] md:leading-[21px]">
        <SocialLoginButtons
          provider="google"
          iconUrl="https://appshots.design/images/google.svg"
          text="Continue with Google"
          variant="flex"
        />
        <SocialLoginButtons
          provider="twitter"
          iconUrl="https://appshots.design/images/twitter.svg"
          text="Continue with Twitter"
          variant="hidden"
        />
        <EmailLoginForm />
      </div>
      <AuthFooter />
    </div>
  );
};
