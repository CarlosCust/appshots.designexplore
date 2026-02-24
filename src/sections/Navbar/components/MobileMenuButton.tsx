import { useState } from 'react';
import { MobileMenuDropdown } from './MobileMenuDropdown';

export const MobileMenuButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute text-[13px] box-border caret-transparent leading-[18.2px] min-h-0 min-w-0 order-1 ml-0 left-0 md:relative md:text-base md:leading-[22.4px] md:min-h-[auto] md:min-w-[auto] md:order-5 md:ml-2.5 md:left-auto">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative text-[13px] items-center bg-zinc-100 box-border caret-transparent flex h-9 justify-center leading-[18.2px] w-9 rounded-[9px] md:text-base md:leading-[22.4px] hover:bg-zinc-200 transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
        
        {isOpen && <MobileMenuDropdown />}
      </div>
      
      {isOpen && (
        <div 
          className="fixed inset-0 z-[5]" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};
