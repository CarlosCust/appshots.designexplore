import { AppCard } from "@/sections/MainContent/components/AppCard";

export const AppGrid = () => {
  return (
    <div className="relative text-[13px] box-border caret-transparent leading-[18.2px] min-h-[400px] mt-5 md:text-base md:leading-[22.4px]">
      <div className="text-[13px] box-border caret-transparent leading-[18.2px] md:text-base md:leading-[22.4px]">
        <div className="text-[13px] box-border caret-transparent leading-[18.2px] md:text-base md:leading-[22.4px]">
          <div className="text-[13px] box-border caret-transparent gap-x-8 grid grid-cols-[repeat(1,minmax(0px,1fr))] leading-[18.2px] gap-y-8 w-full md:text-base md:grid-cols-[repeat(4,minmax(0px,1fr))] md:leading-[22.4px]">
            <AppCard
              imageUrl="https://picsum.photos/seed/period-tracker/400/800"
              imageAlt="Period Tracker screenshot 1"
              hasOuterWrapper={true}
              showDots={false}
              labelClassName="opacity-100 md:opacity-0"
              appId="period-tracker"
            />
            <div className="text-[13px] box-border caret-transparent leading-[18.2px] overflow-hidden md:text-base md:leading-[22.4px]">
              <AppCard
                imageUrl="https://picsum.photos/seed/wikipedia/400/800"
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
                    src="https://firebasestorage.googleapis.com/v0/b/appshots-design.appspot.com/o/appshots/wikipedia/app-icon.jpg?alt=media&token=47dd010f-eb2c-444f-8f7e-477c1ddbcbf0"
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
                imageUrl="https://picsum.photos/seed/duolingo-math/400/800"
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
                    src="https://firebasestorage.googleapis.com/v0/b/appshots-design.appspot.com/o/appshots/duolingo_math/app-icon.jpg?alt=media&token=5f3a5ea1-4d02-4004-968d-ea9291869d4a"
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
                imageUrl="https://picsum.photos/seed/onefootball/400/800"
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
                    src="https://firebasestorage.googleapis.com/v0/b/appshots-design.appspot.com/o/appshots/onefootball/app-icon.jpg?alt=media&token=e1e9fbff-ae69-438b-b9e7-5eebbd5fa3e3"
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
                imageUrl="https://picsum.photos/seed/uber-eats/400/800"
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
                    src="https://firebasestorage.googleapis.com/v0/b/appshots-design.appspot.com/o/appshots/uber_eats/app-icon.webp?alt=media&token=05a87480-59f0-49da-bd6f-4ad23a7d2410"
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
                imageUrl="https://picsum.photos/seed/quora/400/800"
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
                    src="https://firebasestorage.googleapis.com/v0/b/appshots-design.appspot.com/o/appshots/quora/app-icon.jpg?alt=media&token=12dbc974-d1ab-4fb6-92d1-84a51aa294c3"
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
