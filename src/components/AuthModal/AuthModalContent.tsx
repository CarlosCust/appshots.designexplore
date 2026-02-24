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
          iconUrl="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Cpath fill='%234285F4' d='M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z'/%3E%3Cpath fill='%2334A853' d='M6.3 14.7l7 5.1C15 16.3 19.2 13 24 13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 16.3 2 9.7 6.6 6.3 14.7z'/%3E%3Cpath fill='%23FBBC05' d='M24 46c5.4 0 10.3-1.8 14.1-4.9l-6.5-5.5C29.5 37.5 26.9 38 24 38c-6 0-11.1-3.7-13.2-9l-7 5.4C7.2 41.3 15 46 24 46z'/%3E%3Cpath fill='%23EA4335' d='M44.5 20H24v8.5h11.8c-1 3.2-3 5.8-5.6 7.6l6.5 5.5c3.8-3.5 6.3-8.7 6.3-15.1 0-1.3-.2-2.7-.5-4z'/%3E%3C/svg%3E"
          text="Continue with Google"
          variant="flex"
        />
        <SocialLoginButtons
          provider="twitter"
          iconUrl="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z'/%3E%3C/svg%3E"
          text="Continue with Twitter"
          variant="hidden"
        />
        <EmailLoginForm />
      </div>
      <AuthFooter />
    </div>
  );
};
