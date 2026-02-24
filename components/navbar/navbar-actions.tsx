import { LoginButton } from "./login-button";
import { SignupButton } from "./signup-button";
import { MobileMenuButton } from "./mobile-menu-button";

export const NavbarActions = () => {
  return (
    <div className="text-[13px] items-center box-border caret-transparent gap-x-1 flex leading-[18.2px] order-3 text-nowrap gap-y-1 md:text-base md:leading-[22.4px] md:order-4">
      <LoginButton />
      <SignupButton />
      <MobileMenuButton />
    </div>
  );
};
