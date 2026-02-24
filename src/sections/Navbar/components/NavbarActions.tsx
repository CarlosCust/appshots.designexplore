import { ResourcesDropdown } from "@/sections/Navbar/components/ResourcesDropdown";
import { LoginButton } from "@/sections/Navbar/components/LoginButton";
import { SignupButton } from "@/sections/Navbar/components/SignupButton";
import { ProfileIcon } from "@/sections/Navbar/components/ProfileIcon";

export const NavbarActions = () => {
  return (
    <div className="absolute text-xs items-center box-border caret-transparent flex justify-normal leading-[16.8px] min-h-0 min-w-0 order-3 right-0 md:static md:text-[13px] md:justify-end md:leading-[18.2px] md:min-h-[auto] md:min-w-[auto] md:order-4 md:right-auto">
      <ResourcesDropdown />
      <LoginButton />
      <SignupButton />
      <ProfileIcon />
    </div>
  );
};
