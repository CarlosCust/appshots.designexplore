export const NavbarLogo = () => {
  return (
    <div className="text-[13px] items-center box-border caret-transparent flex leading-[18.2px] min-w-9 order-2 mx-auto md:text-base md:leading-[22.4px] md:order-1 md:mx-0">
      <a
        href="/"
        className="text-neutral-900 text-lg font-bold items-center box-border caret-transparent flex leading-[23.4px]"
      >
        <span className="text-xl font-bold tracking-tight">
          <span className="text-black">app</span>
          <span className="text-black">shots</span>
          <span className="text-zinc-400">.design</span>
        </span>
      </a>
    </div>
  );
};
