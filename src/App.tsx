import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "@/sections/Navbar";
import { MainContent } from "@/sections/MainContent";
import { AuthModal } from "@/components/AuthModal";
import { ChatButton } from "@/components/ChatButton";
import { AppDetails } from "@/pages/AppDetails";

const HomePage = () => {
  return (
    <>
      <div className="text-[13px] box-border caret-transparent leading-[18.2px] md:text-base md:leading-[22.4px]">
        <div className="text-[13px] box-border caret-transparent leading-[18.2px] md:text-base md:leading-[22.4px]">
          <div className="text-[13px] box-border caret-transparent leading-[18.2px] md:text-base md:leading-[22.4px]">
            <div className="text-[13px] box-border caret-transparent leading-[18.2px] md:text-base md:leading-[22.4px]">
              <Navbar />
              <div className="text-[13px] box-border caret-transparent h-[76px] leading-[18.2px] md:text-base md:leading-[22.4px]"></div>
            </div>
            <MainContent />
            <section
              aria-label="Notifications alt+T"
              className="text-[13px] box-border caret-transparent leading-[18.2px] md:text-base md:leading-[22.4px]"
            >
              <ol className="fixed text-[13px] items-center box-border caret-transparent flex justify-center leading-[18.2px] list-none transform-none w-full z-[999999999] pl-0 top-5 inset-x-4 md:text-base md:leading-[22.4px] md:translate-x-[-50.0%] md:w-[356px] md:left-2/4 md:right-auto md:top-8"></ol>
            </section>
            <AuthModal />
          </div>
        </div>
      </div>
      <div className="text-[13px] box-border caret-transparent leading-[18.2px] md:text-base md:leading-[22.4px]"></div>
      <ChatButton />
    </>
  );
};

export const App = () => {
  return (
    <BrowserRouter>
      <body className="text-stone-500 text-[13px] not-italic normal-nums font-medium accent-auto bg-white box-border caret-transparent block tracking-[normal] leading-[18.2px] list-outside list-disc min-h-[1000px] pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-indivisible md:text-base md:leading-[22.4px]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/apps/:appId" element={<AppDetails />} />
        </Routes>
      </body>
    </BrowserRouter>
  );
};
