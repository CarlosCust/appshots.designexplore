export const NavbarLogo = () => {
  return (
    <div className="text-[13px] items-center box-border caret-transparent flex leading-[18.2px] min-w-9 order-2 mx-auto md:text-base md:leading-[22.4px] md:order-1 md:mx-0">
      <a
        href="https://appshots.design/"
        className="text-neutral-900 text-lg font-bold items-center box-border caret-transparent flex leading-[23.4px]"
      >
        <img
          src="https://appshots.design/images/neo/logo.svg"
          alt="Appshots"
          className="aspect-[auto_156_/_32] box-border caret-transparent invert-0 max-w-full w-[156px]"
        />
      </a>
    </div>
  );
};
