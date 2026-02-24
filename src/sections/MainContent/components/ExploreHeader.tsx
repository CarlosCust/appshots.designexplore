import { CategoryNav } from "@/sections/MainContent/components/CategoryNav";

export const ExploreHeader = () => {
  return (
    <div className="text-[13px] box-border caret-transparent leading-[18.2px] md:text-base md:leading-[22.4px]">
      <div className="relative text-[13px] shadow-[rgb(255,255,255)_-9px_-6px_20px_20px] box-border caret-transparent gap-x-6 flex leading-[18.2px] min-h-[910px] gap-y-6 w-full mt-4 md:text-base md:leading-[22.4px] md:mt-1">
        <div className="text-[13px] bg-white box-border caret-transparent basis-[0%] grow leading-[18.2px] max-w-full w-full md:text-base md:leading-[22.4px]">
          <h1 className="sticky text-neutral-900 text-3xl font-semibold box-border caret-transparent leading-[42px] capitalize z-0 pt-0.5 pb-2.5 left-[60px] top-[76px] font-funnel_display md:text-5xl md:leading-[67.2px]">
            Explore
          </h1>
          <CategoryNav />
          <div className="relative text-[13px] box-border caret-transparent leading-[18.2px] min-h-[400px] mt-5 md:text-base md:leading-[22.4px]">
            <div className="text-[13px] box-border caret-transparent leading-[18.2px] md:text-base md:leading-[22.4px]">
              <div className="text-[13px] box-border caret-transparent leading-[18.2px] md:text-base md:leading-[22.4px]">
                <div className="text-[13px] box-border caret-transparent gap-x-8 grid grid-cols-[repeat(1,minmax(0px,1fr))] leading-[18.2px] gap-y-8 w-full md:text-base md:grid-cols-[repeat(4,minmax(0px,1fr))] md:leading-[22.4px]">
                  <div className="text-[13px] box-border caret-transparent leading-[18.2px] overflow-hidden md:text-base md:leading-[22.4px]">
                    <div className="relative text-[13px] bg-zinc-50 box-border caret-transparent leading-[18.2px] overflow-hidden p-8 rounded-[40px] md:text-base md:leading-[22.4px]">
                      <div className="relative text-[13px] box-border caret-transparent leading-[18.2px] md:text-base md:leading-[22.4px]">
                        <div className="absolute text-[13px] items-center box-border caret-transparent flex justify-between leading-[18.2px] w-[calc(100%_+_16px)] z-[4] -left-2 -top-2 md:text-base md:leading-[22.4px]">
                          <div className="relative text-[13px] box-border caret-transparent leading-[18.2px] z-[4] md:text-base md:leading-[22.4px]">
                            <input
                              type="checkbox"
                              className="text-neutral-600 text-[13.3333px] bg-transparent box-border caret-transparent hidden leading-[normal] ml-1 mr-[3px] my-[3px] p-0"
                            />
                            <label
                              title="select"
                              className="relative text-[13px] bg-white box-border caret-transparent block h-8 leading-[18.2px] opacity-100 w-8 border-zinc-400 rounded-[50%] border-[3px] border-solid md:text-base md:leading-[22.4px] md:opacity-0 after:accent-auto after:box-border after:caret-transparent after:text-stone-500 after:hidden after:text-[13px] after:not-italic after:normal-nums after:font-medium after:h-3 after:tracking-[normal] after:leading-[18.2px] after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-1.5 after:border-separate after:left-[11px] after:top-[5px] after:font-indivisible after:md:text-base after:md:leading-[22.4px]"
                            ></label>
                          </div>
                        </div>
                      </div>
                      <div className="relative text-[13px] aspect-[0.462_/_1] bg-stone-50 box-border caret-transparent leading-[18.2px] overflow-hidden rounded-3xl md:text-base md:leading-[22.4px]">
                        <div className="relative text-[13px] box-border caret-transparent flex h-full leading-[18.2px] md:text-base md:leading-[22.4px]">
                          <div className="absolute text-[13px] box-border caret-transparent shrink-0 h-full leading-[18.2px] w-full z-[2] left-0 top-0 md:text-base md:leading-[22.4px]">
                            <img
                              src="/images/screenshots/period-tracker-1.jpg"
                              alt="Period Tracker screenshot 1"
                              className="text-[13px] box-border caret-transparent h-full leading-[18.2px] max-w-full object-cover object-[50%_0%] w-full md:text-base md:leading-[22.4px]"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        title="View App"
                        className="absolute text-[13px] box-border caret-transparent h-full leading-[18.2px] w-full z-[2] left-0 top-0 md:text-base md:leading-[22.4px]"
                      ></div>
                    </div>
                    <a
                      href="https://appshots.design/apps/ovulation-fertility-app-app-shot-period_tracker/"
                      title="View App"
                      className="text-blue-700 text-[13px] box-border caret-transparent block leading-[18.2px] py-6 md:text-base md:leading-[22.4px]"
                    >
                      <div className="text-[13px] items-center box-border caret-transparent flex leading-[18.2px] md:text-base md:leading-[22.4px]">
                        <img
                          src="/images/app-icons/period-tracker.jpg"
                          alt="Period Tracker"
                          className="text-[13px] bg-white box-border caret-transparent h-12 leading-[18.2px] max-w-full w-12 border border-gray-200 rounded-xl border-solid md:text-base md:leading-[22.4px]"
                        />
                        <div className="text-[13px] box-border caret-transparent leading-[18.2px] ml-3 md:text-base md:leading-[22.4px]">
                          <h2 className="text-neutral-900 text-2xl font-semibold box-border caret-transparent flow-root leading-[28.8px] overflow-hidden">
                            Period Tracker
                          </h2>
                          <p className="text-zinc-600 text-sm box-border caret-transparent flow-root leading-[16.8px] overflow-hidden">
                            Ovulation &amp; Fertility App
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="text-[13px] box-border caret-transparent leading-[18.2px] overflow-hidden md:text-base md:leading-[22.4px]">
                    <div className="relative text-[13px] bg-zinc-50 box-border caret-transparent leading-[18.2px] overflow-hidden p-8 rounded-[40px] md:text-base md:leading-[22.4px]">
                      <div className="relative text-[13px] box-border caret-transparent leading-[18.2px] md:text-base md:leading-[22.4px]">
                        <div className="absolute text-[13px] items-center box-border caret-transparent flex justify-between leading-[18.2px] w-[calc(100%_+_16px)] z-[4] -left-2 -top-2 md:text-base md:leading-[22.4px]">
                          <div className="relative text-[13px] box-border caret-transparent leading-[18.2px] z-[4] md:text-base md:leading-[22.4px]">
                            <input
                              type="checkbox"
                              className="text-neutral-600 text-[13.3333px] bg-transparent box-border caret-transparent hidden leading-[normal] ml-1 mr-[3px] my-[3px] p-0"
                            />
                            <label
                              title="select"
                              className="relative text-[13px] bg-white box-border caret-transparent block h-8 leading-[18.2px] w-8 border-zinc-400 rounded-[50%] border-[3px] border-solid md:text-base md:leading-[22.4px] after:accent-auto after:box-border after:caret-transparent after:text-stone-500 after:hidden after:text-[13px] after:not-italic after:normal-nums after:font-medium after:h-3 after:tracking-[normal] after:leading-[18.2px] after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-1.5 after:border-separate after:left-[11px] after:top-[5px] after:font-indivisible after:md:text-base after:md:leading-[22.4px]"
                            ></label>
                          </div>
                        </div>
                      </div>
                      <div className="relative text-[13px] aspect-[0.462_/_1] bg-stone-50 box-border caret-transparent leading-[18.2px] overflow-hidden rounded-3xl md:text-base md:leading-[22.4px]">
                        <div className="relative text-[13px] box-border caret-transparent flex h-full leading-[18.2px] md:text-base md:leading-[22.4px]">
                          <div className="absolute text-[13px] box-border caret-transparent shrink-0 h-full leading-[18.2px] w-full z-[2] left-0 top-0 md:text-base md:leading-[22.4px]">
                            <img
                              src="/images/screenshots/wikipedia-1.jpg"
                              alt="Wikipedia screenshot 1"
                              className="text-[13px] box-border caret-transparent h-full leading-[18.2px] max-w-full object-cover object-[50%_0%] w-full md:text-base md:leading-[22.4px]"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        title="View App"
                        className="absolute text-[13px] box-border caret-transparent h-full leading-[18.2px] w-full z-[2] left-0 top-0 md:text-base md:leading-[22.4px]"
                      ></div>
                      <div className="absolute text-[13px] box-border caret-transparent h-1/4 leading-[18.2px] opacity-0 w-full z-[2] ml-auto bottom-0 inset-x-0 md:text-base md:leading-[22.4px] md:opacity-100">
                        <div className="absolute text-[13px] box-border caret-transparent gap-x-1 flex justify-center leading-[18.2px] gap-y-1 w-full bottom-3 inset-x-0 md:text-base md:leading-[22.4px]">
                          <span className="relative text-[13px] box-border caret-transparent block h-2 leading-[18.2px] w-2 rounded-full md:text-base md:leading-[22.4px] before:accent-auto before:bg-[url(data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%278%27%20height=%278%27%20fill=%27none%27%20viewBox=%270%200%208%208%27%3E%3Cpath%20fill=%27%237A7A7A%27%20d=%27M3.25.433a1.5%201.5%200%200%201%201.5%200l1.964%201.134a1.5%201.5%200%200%201%20.75%201.299v2.268a1.5%201.5%200%200%201-.75%201.299L4.75%207.567a1.5%201.5%200%200%201-1.5%200L1.286%206.433a1.5%201.5%200%200%201-.75-1.299V2.866a1.5%201.5%200%200%201%20.75-1.299z%27/%3E%3C/svg%3E)] before:bg-center before:bg-no-repeat before:bg-contain before:box-border before:caret-transparent before:text-stone-500 before:block before:text-[13px] before:not-italic before:normal-nums before:font-medium before:h-full before:tracking-[normal] before:leading-[18.2px] before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-start before:indent-[0px] before:normal-case before:visible before:w-full before:border-separate before:font-indivisible before:md:text-base before:md:leading-[22.4px]"></span>
                          <span className="text-[13px] bg-zinc-300 box-border caret-transparent block h-2 leading-[18.2px] w-2 rounded-full md:text-base md:leading-[22.4px]"></span>
                          <span className="text-[13px] bg-zinc-300 box-border caret-transparent block h-2 leading-[18.2px] w-2 rounded-full md:text-base md:leading-[22.4px]"></span>
                        </div>
                      </div>
                    </div>
                    <a
                      href="https://appshots.design/apps/the-free-encyclopedia-app-shot-wikipedia/"
                      title="View App"
                      className="text-blue-700 text-[13px] box-border caret-transparent block leading-[18.2px] py-6 md:text-base md:leading-[22.4px]"
                    >
                      <div className="text-[13px] items-center box-border caret-transparent flex leading-[18.2px] md:text-base md:leading-[22.4px]">
                        <img
                          src="/images/app-icons/wikipedia.jpg"
                          alt="Wikipedia"
                          className="text-[13px] bg-white box-border caret-transparent h-12 leading-[18.2px] max-w-full w-12 border border-gray-200 rounded-xl border-solid md:text-base md:leading-[22.4px]"
                        />
                        <div className="text-[13px] box-border caret-transparent leading-[18.2px] ml-3 md:text-base md:leading-[22.4px]">
                          <h2 className="text-neutral-900 text-2xl font-semibold box-border caret-transparent flow-root leading-[28.8px] overflow-hidden">
                            Wikipedia
                          </h2>
                          <p className="text-zinc-600 text-sm box-border caret-transparent flow-root leading-[16.8px] overflow-hidden">
                            The Free Encyclopedia
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="text-[13px] box-border caret-transparent leading-[18.2px] overflow-hidden md:text-base md:leading-[22.4px]">
                    <div className="relative text-[13px] bg-zinc-50 box-border caret-transparent leading-[18.2px] overflow-hidden p-8 rounded-[40px] md:text-base md:leading-[22.4px]">
                      <div className="relative text-[13px] box-border caret-transparent leading-[18.2px] md:text-base md:leading-[22.4px]">
                        <div className="absolute text-[13px] items-center box-border caret-transparent flex justify-between leading-[18.2px] w-[calc(100%_+_16px)] z-[4] -left-2 -top-2 md:text-base md:leading-[22.4px]">
                          <div className="relative text-[13px] box-border caret-transparent leading-[18.2px] z-[4] md:text-base md:leading-[22.4px]">
                            <input
                              type="checkbox"
                              className="text-neutral-600 text-[13.3333px] bg-transparent box-border caret-transparent hidden leading-[normal] ml-1 mr-[3px] my-[3px] p-0"
                            />
                            <label
                              title="select"
                              className="relative text-[13px] bg-white box-border caret-transparent block h-8 leading-[18.2px] opacity-100 w-8 border-zinc-400 rounded-[50%] border-[3px] border-solid md:text-base md:leading-[22.4px] md:opacity-0 after:accent-auto after:box-border after:caret-transparent after:text-stone-500 after:hidden after:text-[13px] after:not-italic after:normal-nums after:font-medium after:h-3 after:tracking-[normal] after:leading-[18.2px] after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-1.5 after:border-separate after:left-[11px] after:top-[5px] after:font-indivisible after:md:text-base after:md:leading-[22.4px]"
                            ></label>
                          </div>
                        </div>
                      </div>
                      <div className="relative text-[13px] aspect-[0.462_/_1] bg-stone-50 box-border caret-transparent leading-[18.2px] overflow-hidden rounded-3xl md:text-base md:leading-[22.4px]">
                        <div className="relative text-[13px] box-border caret-transparent flex h-full leading-[18.2px] md:text-base md:leading-[22.4px]">
                          <div className="absolute text-[13px] box-border caret-transparent shrink-0 h-full leading-[18.2px] w-full z-[2] left-0 top-0 md:text-base md:leading-[22.4px]">
                            <img
                              src="/images/screenshots/duolingo-math-1.jpg"
                              alt="Duolingo Math screenshot 1"
                              className="text-[13px] box-border caret-transparent h-full leading-[18.2px] max-w-full object-cover object-[50%_0%] w-full md:text-base md:leading-[22.4px]"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        title="View App"
                        className="absolute text-[13px] box-border caret-transparent h-full leading-[18.2px] w-full z-[2] left-0 top-0 md:text-base md:leading-[22.4px]"
                      ></div>
                    </div>
                    <a
                      href="https://appshots.design/apps/math-lessons-brain-training-app-shot-duolingo_math/"
                      title="View App"
                      className="text-blue-700 text-[13px] box-border caret-transparent block leading-[18.2px] py-6 md:text-base md:leading-[22.4px]"
                    >
                      <div className="text-[13px] items-center box-border caret-transparent flex leading-[18.2px] md:text-base md:leading-[22.4px]">
                        <img
                          src="/images/app-icons/duolingo-math.jpg"
                          alt="Duolingo Math"
                          className="text-[13px] bg-white box-border caret-transparent h-12 leading-[18.2px] max-w-full w-12 border border-gray-200 rounded-xl border-solid md:text-base md:leading-[22.4px]"
                        />
                        <div className="text-[13px] box-border caret-transparent leading-[18.2px] ml-3 md:text-base md:leading-[22.4px]">
                          <h2 className="text-neutral-900 text-2xl font-semibold box-border caret-transparent flow-root leading-[28.8px] overflow-hidden">
                            Duolingo Math
                          </h2>
                          <p className="text-zinc-600 text-sm box-border caret-transparent flow-root leading-[16.8px] overflow-hidden">
                            Math Lessons &amp; Brain Training
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="text-[13px] box-border caret-transparent leading-[18.2px] overflow-hidden md:text-base md:leading-[22.4px]">
                    <div className="relative text-[13px] bg-zinc-50 box-border caret-transparent leading-[18.2px] overflow-hidden p-8 rounded-[40px] md:text-base md:leading-[22.4px]">
                      <div className="relative text-[13px] box-border caret-transparent leading-[18.2px] md:text-base md:leading-[22.4px]">
                        <div className="absolute text-[13px] items-center box-border caret-transparent flex justify-between leading-[18.2px] w-[calc(100%_+_16px)] z-[4] -left-2 -top-2 md:text-base md:leading-[22.4px]">
                          <div className="relative text-[13px] box-border caret-transparent leading-[18.2px] z-[4] md:text-base md:leading-[22.4px]">
                            <input
                              type="checkbox"
                              className="text-neutral-600 text-[13.3333px] bg-transparent box-border caret-transparent hidden leading-[normal] ml-1 mr-[3px] my-[3px] p-0"
                            />
                            <label
                              title="select"
                              className="relative text-[13px] bg-white box-border caret-transparent block h-8 leading-[18.2px] opacity-100 w-8 border-zinc-400 rounded-[50%] border-[3px] border-solid md:text-base md:leading-[22.4px] md:opacity-0 after:accent-auto after:box-border after:caret-transparent after:text-stone-500 after:hidden after:text-[13px] after:not-italic after:normal-nums after:font-medium after:h-3 after:tracking-[normal] after:leading-[18.2px] after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-1.5 after:border-separate after:left-[11px] after:top-[5px] after:font-indivisible after:md:text-base after:md:leading-[22.4px]"
                            ></label>
                          </div>
                        </div>
                      </div>
                      <div className="relative text-[13px] aspect-[0.462_/_1] bg-stone-50 box-border caret-transparent leading-[18.2px] overflow-hidden rounded-3xl md:text-base md:leading-[22.4px]">
                        <div className="relative text-[13px] box-border caret-transparent flex h-full leading-[18.2px] md:text-base md:leading-[22.4px]">
                          <div className="absolute text-[13px] box-border caret-transparent shrink-0 h-full leading-[18.2px] w-full z-[2] left-0 top-0 md:text-base md:leading-[22.4px]">
                            <img
                              src="/images/screenshots/onefootball-1.jpg"
                              alt="OneFootball screenshot 1"
                              className="text-[13px] box-border caret-transparent h-full leading-[18.2px] max-w-full object-cover object-[50%_0%] w-full md:text-base md:leading-[22.4px]"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        title="View App"
                        className="absolute text-[13px] box-border caret-transparent h-full leading-[18.2px] w-full z-[2] left-0 top-0 md:text-base md:leading-[22.4px]"
                      ></div>
                    </div>
                    <a
                      href="https://appshots.design/apps/onefootball-soccer-news/"
                      title="View App"
                      className="text-blue-700 text-[13px] box-border caret-transparent block leading-[18.2px] py-6 md:text-base md:leading-[22.4px]"
                    >
                      <div className="text-[13px] items-center box-border caret-transparent flex leading-[18.2px] md:text-base md:leading-[22.4px]">
                        <img
                          src="/images/app-icons/onefootball.jpg"
                          alt="OneFootball"
                          className="text-[13px] bg-white box-border caret-transparent h-12 leading-[18.2px] max-w-full w-12 border border-gray-200 rounded-xl border-solid md:text-base md:leading-[22.4px]"
                        />
                        <div className="text-[13px] box-border caret-transparent leading-[18.2px] ml-3 md:text-base md:leading-[22.4px]">
                          <h2 className="text-neutral-900 text-2xl font-semibold box-border caret-transparent flow-root leading-[28.8px] overflow-hidden">
                            OneFootball
                          </h2>
                          <p className="text-zinc-600 text-sm box-border caret-transparent flow-root leading-[16.8px] overflow-hidden">
                            Soccer News
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="text-[13px] box-border caret-transparent leading-[18.2px] overflow-hidden md:text-base md:leading-[22.4px]">
                    <div className="relative text-[13px] bg-zinc-50 box-border caret-transparent leading-[18.2px] overflow-hidden p-8 rounded-[40px] md:text-base md:leading-[22.4px]">
                      <div className="relative text-[13px] box-border caret-transparent leading-[18.2px] md:text-base md:leading-[22.4px]">
                        <div className="absolute text-[13px] items-center box-border caret-transparent flex justify-between leading-[18.2px] w-[calc(100%_+_16px)] z-[4] -left-2 -top-2 md:text-base md:leading-[22.4px]">
                          <div className="relative text-[13px] box-border caret-transparent leading-[18.2px] z-[4] md:text-base md:leading-[22.4px]">
                            <input
                              type="checkbox"
                              className="text-neutral-600 text-[13.3333px] bg-transparent box-border caret-transparent hidden leading-[normal] ml-1 mr-[3px] my-[3px] p-0"
                            />
                            <label
                              title="select"
                              className="relative text-[13px] bg-white box-border caret-transparent block h-8 leading-[18.2px] opacity-100 w-8 border-zinc-400 rounded-[50%] border-[3px] border-solid md:text-base md:leading-[22.4px] md:opacity-0 after:accent-auto after:box-border after:caret-transparent after:text-stone-500 after:hidden after:text-[13px] after:not-italic after:normal-nums after:font-medium after:h-3 after:tracking-[normal] after:leading-[18.2px] after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-1.5 after:border-separate after:left-[11px] after:top-[5px] after:font-indivisible after:md:text-base after:md:leading-[22.4px]"
                            ></label>
                          </div>
                        </div>
                      </div>
                      <div className="relative text-[13px] aspect-[0.462_/_1] bg-stone-50 box-border caret-transparent leading-[18.2px] overflow-hidden rounded-3xl md:text-base md:leading-[22.4px]">
                        <div className="relative text-[13px] box-border caret-transparent flex h-full leading-[18.2px] md:text-base md:leading-[22.4px]">
                          <div className="absolute text-[13px] box-border caret-transparent shrink-0 h-full leading-[18.2px] w-full z-[2] left-0 top-0 md:text-base md:leading-[22.4px]">
                            <img
                              src="/images/screenshots/uber-eats-1.jpg"
                              alt="Uber Eats screenshot 1"
                              className="text-[13px] box-border caret-transparent h-full leading-[18.2px] max-w-full object-cover object-[50%_0%] w-full md:text-base md:leading-[22.4px]"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        title="View App"
                        className="absolute text-[13px] box-border caret-transparent h-full leading-[18.2px] w-full z-[2] left-0 top-0 md:text-base md:leading-[22.4px]"
                      ></div>
                    </div>
                    <a
                      href="https://appshots.design/apps/fresh-grocery-shopping-more-app-shot-uber_eats/"
                      title="View App"
                      className="text-blue-700 text-[13px] box-border caret-transparent block leading-[18.2px] py-6 md:text-base md:leading-[22.4px]"
                    >
                      <div className="text-[13px] items-center box-border caret-transparent flex leading-[18.2px] md:text-base md:leading-[22.4px]">
                        <img
                          src="/images/app-icons/uber-eats.jpg"
                          alt="Uber Eats"
                          className="text-[13px] bg-white box-border caret-transparent h-12 leading-[18.2px] max-w-full w-12 border border-gray-200 rounded-xl border-solid md:text-base md:leading-[22.4px]"
                        />
                        <div className="text-[13px] box-border caret-transparent leading-[18.2px] ml-3 md:text-base md:leading-[22.4px]">
                          <h2 className="text-neutral-900 text-2xl font-semibold box-border caret-transparent flow-root leading-[28.8px] overflow-hidden">
                            Uber Eats
                          </h2>
                          <p className="text-zinc-600 text-sm box-border caret-transparent flow-root leading-[16.8px] overflow-hidden">
                            Fresh grocery shopping &amp; more
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="text-[13px] box-border caret-transparent leading-[18.2px] overflow-hidden md:text-base md:leading-[22.4px]">
                    <div className="relative text-[13px] bg-zinc-50 box-border caret-transparent leading-[18.2px] overflow-hidden p-8 rounded-[40px] md:text-base md:leading-[22.4px]">
                      <div className="relative text-[13px] box-border caret-transparent leading-[18.2px] md:text-base md:leading-[22.4px]">
                        <div className="absolute text-[13px] items-center box-border caret-transparent flex justify-between leading-[18.2px] w-[calc(100%_+_16px)] z-[4] -left-2 -top-2 md:text-base md:leading-[22.4px]">
                          <div className="relative text-[13px] box-border caret-transparent leading-[18.2px] z-[4] md:text-base md:leading-[22.4px]">
                            <input
                              type="checkbox"
                              className="text-neutral-600 text-[13.3333px] bg-transparent box-border caret-transparent hidden leading-[normal] ml-1 mr-[3px] my-[3px] p-0"
                            />
                            <label
                              title="select"
                              className="relative text-[13px] bg-white box-border caret-transparent block h-8 leading-[18.2px] opacity-100 w-8 border-zinc-400 rounded-[50%] border-[3px] border-solid md:text-base md:leading-[22.4px] md:opacity-0 after:accent-auto after:box-border after:caret-transparent after:text-stone-500 after:hidden after:text-[13px] after:not-italic after:normal-nums after:font-medium after:h-3 after:tracking-[normal] after:leading-[18.2px] after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-1.5 after:border-separate after:left-[11px] after:top-[5px] after:font-indivisible after:md:text-base after:md:leading-[22.4px]"
                            ></label>
                          </div>
                        </div>
                      </div>
                      <div className="relative text-[13px] aspect-[0.462_/_1] bg-stone-50 box-border caret-transparent leading-[18.2px] overflow-hidden rounded-3xl md:text-base md:leading-[22.4px]">
                        <div className="relative text-[13px] box-border caret-transparent flex h-full leading-[18.2px] md:text-base md:leading-[22.4px]">
                          <div className="absolute text-[13px] box-border caret-transparent shrink-0 h-full leading-[18.2px] w-full z-[2] left-0 top-0 md:text-base md:leading-[22.4px]">
                            <img
                              src="/images/screenshots/quora-1.jpg"
                              alt="Quora screenshot 1"
                              className="text-[13px] box-border caret-transparent h-full leading-[18.2px] max-w-full object-cover object-[50%_0%] w-full md:text-base md:leading-[22.4px]"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        title="View App"
                        className="absolute text-[13px] box-border caret-transparent h-full leading-[18.2px] w-full z-[2] left-0 top-0 md:text-base md:leading-[22.4px]"
                      ></div>
                    </div>
                    <a
                      href="https://appshots.design/apps/quora-ask-questions-get-answers/"
                      title="View App"
                      className="text-blue-700 text-[13px] box-border caret-transparent block leading-[18.2px] py-6 md:text-base md:leading-[22.4px]"
                    >
                      <div className="text-[13px] items-center box-border caret-transparent flex leading-[18.2px] md:text-base md:leading-[22.4px]">
                        <img
                          src="/images/app-icons/quora.jpg"
                          alt="Quora"
                          className="text-[13px] bg-white box-border caret-transparent h-12 leading-[18.2px] max-w-full w-12 border border-gray-200 rounded-xl border-solid md:text-base md:leading-[22.4px]"
                        />
                        <div className="text-[13px] box-border caret-transparent leading-[18.2px] ml-3 md:text-base md:leading-[22.4px]">
                          <h2 className="text-neutral-900 text-2xl font-semibold box-border caret-transparent flow-root leading-[28.8px] overflow-hidden">
                            Quora
                          </h2>
                          <p className="text-zinc-600 text-sm box-border caret-transparent flow-root leading-[16.8px] overflow-hidden">
                            Ask Questions, Get Answers
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="text-[13px] box-border caret-transparent hidden leading-[18.2px] border border-stone-300 my-2.5 p-2.5 border-solid md:text-base md:leading-[22.4px]">
                <div className="text-[13px] border-b-zinc-100 border-l-stone-500 border-r-stone-500 border-t-stone-500 box-border caret-transparent leading-[18.2px] p-[5px] border-b md:text-base md:leading-[22.4px]">
                  <p className="text-[13px] box-border caret-transparent leading-[18.2px] md:text-base md:leading-[22.4px]">
                    App 1: Unnamed
                  </p>
                </div>
                <div className="text-[13px] border-b-zinc-100 border-l-stone-500 border-r-stone-500 border-t-stone-500 box-border caret-transparent leading-[18.2px] p-[5px] border-b md:text-base md:leading-[22.4px]">
                  <p className="text-[13px] box-border caret-transparent leading-[18.2px] md:text-base md:leading-[22.4px]">
                    App 2: Unnamed
                  </p>
                </div>
                <div className="text-[13px] border-b-zinc-100 border-l-stone-500 border-r-stone-500 border-t-stone-500 box-border caret-transparent leading-[18.2px] p-[5px] border-b md:text-base md:leading-[22.4px]">
                  <p className="text-[13px] box-border caret-transparent leading-[18.2px] md:text-base md:leading-[22.4px]">
                    App 3: Unnamed
                  </p>
                </div>
                <div className="text-[13px] border-b-zinc-100 border-l-stone-500 border-r-stone-500 border-t-stone-500 box-border caret-transparent leading-[18.2px] p-[5px] border-b md:text-base md:leading-[22.4px]">
                  <p className="text-[13px] box-border caret-transparent leading-[18.2px] md:text-base md:leading-[22.4px]">
                    App 4: Unnamed
                  </p>
                </div>
                <div className="text-[13px] border-b-zinc-100 border-l-stone-500 border-r-stone-500 border-t-stone-500 box-border caret-transparent leading-[18.2px] p-[5px] border-b md:text-base md:leading-[22.4px]">
                  <p className="text-[13px] box-border caret-transparent leading-[18.2px] md:text-base md:leading-[22.4px]">
                    App 5: Unnamed
                  </p>
                </div>
                <div className="text-[13px] border-b-zinc-100 border-l-stone-500 border-r-stone-500 border-t-stone-500 box-border caret-transparent leading-[18.2px] p-[5px] border-b md:text-base md:leading-[22.4px]">
                  <p className="text-[13px] box-border caret-transparent leading-[18.2px] md:text-base md:leading-[22.4px]">
                    App 6: Unnamed
                  </p>
                </div>
                <div className="text-[13px] border-b-zinc-100 border-l-stone-500 border-r-stone-500 border-t-stone-500 box-border caret-transparent leading-[18.2px] p-[5px] border-b md:text-base md:leading-[22.4px]">
                  <p className="text-[13px] box-border caret-transparent leading-[18.2px] md:text-base md:leading-[22.4px]">
                    App 7: Unnamed
                  </p>
                </div>
                <div className="text-[13px] border-b-zinc-100 border-l-stone-500 border-r-stone-500 border-t-stone-500 box-border caret-transparent leading-[18.2px] p-[5px] border-b md:text-base md:leading-[22.4px]">
                  <p className="text-[13px] box-border caret-transparent leading-[18.2px] md:text-base md:leading-[22.4px]">
                    App 8: Unnamed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
