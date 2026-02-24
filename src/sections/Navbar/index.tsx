import { NavbarLogo } from "@/sections/Navbar/components/NavbarLogo";
import { PlatformSelector } from "@/sections/Navbar/components/PlatformSelector";
import { SearchBar } from "@/sections/Navbar/components/SearchBar";
import { NavbarActions } from "@/sections/Navbar/components/NavbarActions";
import { MobileMenuButton } from "@/sections/Navbar/components/MobileMenuButton";

export const Navbar = () => {
  return (
    <div className="fixed text-[13px] bg-white border-b-zinc-100 border-l-stone-500 border-r-stone-500 border-t-stone-500 box-border caret-transparent leading-[18.2px] w-full z-[11] border-b left-0 top-0 md:text-base md:leading-[22.4px]">
      <div className="text-[13px] box-border caret-transparent leading-[18.2px] max-w-full w-full mx-auto px-[15px] md:text-base md:leading-[22.4px] md:px-10">
        <div className="relative text-[13px] items-center box-border caret-transparent flex justify-between leading-[18.2px] py-5 md:text-base md:leading-[22.4px]">
          <NavbarLogo />
          <PlatformSelector />
          <SearchBar />
          <NavbarActions />
          <MobileMenuButton />
        </div>
      </div>
    </div>
  );
};
