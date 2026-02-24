import { NavbarLogo } from "./navbar-logo";
import { PlatformSelector } from "./platform-selector";
import { SearchBar } from "./search-bar";
import { ResourcesDropdown } from "./resources-dropdown";
import { NavbarActions } from "./navbar-actions";

export const Navbar = () => {
  return (
    <nav className="fixed text-[13px] items-center bg-white/80 backdrop-blur-md box-border caret-transparent flex h-[76px] leading-[18.2px] text-nowrap w-full z-[1001] px-4 md:text-base md:leading-[22.4px] md:px-[30px]">
      <div className="text-[13px] items-center box-border caret-transparent flex flex-wrap h-auto leading-[18.2px] min-w-[100%] text-nowrap md:text-base md:leading-[22.4px]">
        <NavbarLogo />
        <PlatformSelector />
        <SearchBar />
        <ResourcesDropdown />
        <NavbarActions />
      </div>
    </nav>
  );
};
