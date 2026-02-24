import { CategoryNav } from "./category-nav";
import { AppGrid } from "./app-grid";

export const MainContent = () => {
  return (
    <div className="pt-[76px]">
      <div className="px-4 md:px-10 pt-4">
        <div className="relative shadow-[rgb(255,255,255)_-9px_-6px_20px_20px] flex gap-6 min-h-[910px] mt-1 w-full">
          <div className="bg-white basis-0 grow max-w-full w-full">
            <h1 className="sticky text-neutral-900 text-3xl font-semibold leading-[42px] capitalize z-0 pt-0.5 pb-2.5 left-[60px] top-[76px] font-funnel_display md:text-5xl md:leading-[67.2px]">
              Explore
            </h1>
            <CategoryNav />
            <AppGrid />
          </div>
        </div>
      </div>
    </div>
  );
};
