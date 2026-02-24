import { AppCard } from "@/sections/MainContent/components/AppCard";

export const AppGrid = () => {
  return (
    <div className="relative text-[13px] box-border caret-transparent leading-[18.2px] min-h-[400px] mt-5 md:text-base md:leading-[22.4px]">
      <div className="text-[13px] box-border caret-transparent leading-[18.2px] md:text-base md:leading-[22.4px]">
        <div className="text-[13px] box-border caret-transparent leading-[18.2px] md:text-base md:leading-[22.4px]">
          <div className="text-[13px] box-border caret-transparent gap-x-8 grid grid-cols-[repeat(1,minmax(0px,1fr))] leading-[18.2px] gap-y-8 w-full md:text-base md:grid-cols-[repeat(4,minmax(0px,1fr))] md:leading-[22.4px]">
            <AppCard
              imageUrl="/images/screenshots/period-tracker-1.jpg"
              imageAlt="Period Tracker screenshot 1"
              hasOuterWrapper={true}
              showDots={false}
              labelClassName="opacity-100 md:opacity-0"
              appId="period-tracker"
            />
            <div className="text-[13px] box-border caret-transparent leading-[18.2px] overflow-hidden md:text-base md:leading-[22.4px]">
              <AppCard
                imageUrl="/images/screenshots/wikipedia-1.jpg"
                imageAlt="Wikipedia screenshot 1"
                showDots={true}
                appId="wikipedia"
              />
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
              <AppCard
                imageUrl="/images/screenshots/duolingo-math-1.jpg"
                imageAlt="Duolingo Math screenshot 1"
                labelClassName="opacity-100 md:opacity-0"
                appId="duolingo-math"
              />
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
              <AppCard
                imageUrl="/images/screenshots/onefootball-1.jpg"
                imageAlt="OneFootball screenshot 1"
                appId="onefootball"
              />
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
              <AppCard
                imageUrl="/images/screenshots/uber-eats-1.jpg"
                imageAlt="Uber Eats screenshot 1"
                appId="uber-eats"
              />
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
              <AppCard
                imageUrl="/images/screenshots/quora-1.jpg"
                imageAlt="Quora screenshot 1"
                appId="quora"
              />
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
  );
};
