export const MobileMenuDropdown = () => {
  return (
    <ul className="absolute bg-white rounded-[11px] shadow-[0_2px_5px_4px_rgba(0,0,0,0.06)] p-2.5 w-[236px] right-0 top-[51px] z-10 flex flex-col gap-1">
      <li className="flex items-center justify-between py-2 px-3">
        <a href="/about" className="text-[#666] font-medium hover:text-black">
          About Us
        </a>
        <div className="flex gap-2">
          <a href="https://www.linkedin.com/company/appshots/" target="_blank" rel="noopener noreferrer">
            <img src="https://appshots.design/images/icon-linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
          </a>
          <a href="https://twitter.com/appshotsdesign" target="_blank" rel="noopener noreferrer">
            <img src="https://appshots.design/images/x-icon.svg" alt="X" className="w-5 h-5" />
          </a>
        </div>
      </li>
      
      <li className="py-2 px-3">
        <a href="/pricing/" className="text-[#666] font-medium hover:text-black">
          Pricing
        </a>
      </li>
      
      <li className="py-2 px-3">
        <a href="https://appshotsdesign.canny.io/" target="_blank" rel="noopener noreferrer" className="text-[#666] font-medium hover:text-black">
          Request a feature
        </a>
      </li>
      
      <li className="py-2 px-3">
        <a href="https://appshots.help.center/contact" target="_blank" rel="noopener noreferrer" className="text-[#666] font-medium hover:text-black">
          Contact Us
        </a>
      </li>
      
      <li className="flex gap-4 py-2 px-3 text-sm">
        <a href="/PrivacyPolicy/" className="text-[#999] hover:text-[#666]">
          Privacy
        </a>
        <a href="/TermsOfService/" className="text-[#999] hover:text-[#666]">
          Terms
        </a>
        <a href="/copyright/" className="text-[#999] hover:text-[#666]">
          Copyright
        </a>
      </li>
    </ul>
  );
};
