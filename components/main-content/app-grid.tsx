import { AppCard } from "@/components/main-content/app-card";

export const AppGrid = () => {
  return (
    <div className="relative min-h-[400px] mt-5">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        <AppCard
          imageUrl="/images/screenshots/period-tracker-1.jpg"
          imageAlt="Period Tracker screenshot 1"
          appId="period-tracker"
          appName="Pinkllama"
          appDescription="Menstral cycle & ovulation app"
          appIconUrl="/images/app-icons/period-tracker.jpg"
        />
        <AppCard
          imageUrl="/images/screenshots/wikipedia-1.jpg"
          imageAlt="Wikipedia screenshot 1"
          appId="wikipedia"
          appName="Wikipedia"
          appDescription="The Free Encyclopedia"
          appIconUrl="/images/app-icons/wikipedia.jpg"
        />
        <AppCard
          imageUrl="/images/screenshots/duolingo-math-1.jpg"
          imageAlt="Duolingo Math screenshot 1"
          appId="duolingo-math"
          appName="Duolingo Math"
          appDescription="Math Lessons & Brain Training"
          appIconUrl="/images/app-icons/duolingo-math.jpg"
        />
        <AppCard
          imageUrl="/images/screenshots/onefootball-1.jpg"
          imageAlt="OneFootball screenshot 1"
          appId="onefootball"
          appName="OneFootball"
          appDescription="Soccer News"
          appIconUrl="/images/app-icons/onefootball.jpg"
        />
        <AppCard
          imageUrl="/images/screenshots/uber-eats-1.jpg"
          imageAlt="Uber Eats screenshot 1"
          appId="uber-eats"
          appName="Uber Eats"
          appDescription="Fresh grocery shopping & more"
          appIconUrl="/images/app-icons/uber-eats.jpg"
        />
        <AppCard
          imageUrl="/images/screenshots/quora-1.jpg"
          imageAlt="Quora screenshot 1"
          appId="quora"
          appName="Quora"
          appDescription="Ask Questions, Get Answers"
          appIconUrl="/images/app-icons/quora.jpg"
        />
      </div>
    </div>
  );
};
