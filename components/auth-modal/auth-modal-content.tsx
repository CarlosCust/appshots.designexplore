import { SocialLoginButtons } from "./social-login-buttons";
import { EmailLoginForm } from "./email-login-form";
import { AuthFooter } from "./auth-footer";

export const AuthModalContent = () => {
  return (
    <div className="text-[13px] bg-white box-border caret-transparent leading-[18.2px] max-w-[950px] text-nowrap w-full mx-auto mt-8 md:text-base md:leading-[22.4px]">
      <div className="text-[13px] items-center box-border caret-transparent flex flex-col leading-[18.2px] text-nowrap md:text-base md:leading-[22.4px]">
        <div className="text-[13px] box-border caret-transparent flex flex-col leading-[18.2px] w-full text-nowrap md:text-base md:leading-[22.4px]">
          <div className="text-[13px] items-center box-border caret-transparent flex flex-col leading-[18.2px] text-nowrap max-w-[410px] mx-auto pb-5 pt-3 md:text-base md:leading-[22.4px] md:max-w-[570px] md:pb-[60px]">
            <div className="text-[13px] box-border caret-transparent flex flex-col leading-[18.2px] text-nowrap pb-[15px] md:text-base md:leading-[22.4px] md:pb-[30px]">
              <p className="text-neutral-900 text-[26px] box-border caret-transparent text-center font-normal leading-[36px] text-wrap md:text-[36px] md:leading-[54px]">
                Log in or sign up to continue browsing
              </p>
            </div>

            <SocialLoginButtons />
            <EmailLoginForm />
            <AuthFooter />
          </div>
        </div>
      </div>
    </div>
  );
};
