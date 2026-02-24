export const MobileMenuDropdown = () => {
  return (
    <ul className="absolute bg-white rounded-[11px] shadow-[0_2px_5px_4px_rgba(0,0,0,0.06)] p-2.5 w-[236px] right-0 top-[51px] z-10 flex flex-col gap-1">
      <li className="flex items-center justify-between py-2 px-3">
        <a href="/about" className="text-[#666] font-medium hover:text-black">
          About Us
        </a>
        <div className="flex gap-2">
          <a href="https://www.linkedin.com/company/appshots/" target="_blank" rel="noopener noreferrer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#0A66C2]"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href="https://twitter.com/appshotsdesign" target="_blank" rel="noopener noreferrer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-black"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
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
