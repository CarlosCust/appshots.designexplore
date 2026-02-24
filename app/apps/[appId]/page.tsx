import { Navbar } from "@/components/navbar/navbar";
import { AuthModal } from "@/components/auth-modal/auth-modal";
import { ChatButton } from "@/components/chat-button";
import { AppDetailsClient } from "./app-details-client";

type AppData = {
  name: string;
  logo: string;
  platform: string;
  rating: string;
  category: string;
  screenshots: string[];
  totalScreens: number;
};

const appsData: Record<string, AppData> = {
  "period-tracker": {
    name: "Pinkllama — Menstral cycle & ovulation app",
    logo: "/images/app-icons/period-tracker.jpg",
    platform: "iOS",
    rating: "4.5/5",
    category: "Health & Fitness",
    screenshots: [
      "/images/screenshots/period-tracker-1.jpg",
      "/images/screenshots/period-tracker-2.jpg",
      "/images/screenshots/period-tracker-3.jpg",
      "/images/screenshots/period-tracker-4.jpg",
      "/images/screenshots/period-tracker-5.jpg",
      "/images/screenshots/period-tracker-6.jpg",
    ],
    totalScreens: 67,
  },
  wikipedia: {
    name: "Wikipedia — The Free Encyclopedia",
    logo: "/images/app-icons/wikipedia.jpg",
    platform: "iOS",
    rating: "4.7/5",
    category: "Reference",
    screenshots: [
      "/images/screenshots/wikipedia-1.jpg",
      "/images/screenshots/wikipedia-2.jpg",
      "/images/screenshots/wikipedia-3.jpg",
      "/images/screenshots/wikipedia-1.jpg",
      "/images/screenshots/wikipedia-2.jpg",
      "/images/screenshots/wikipedia-3.jpg",
    ],
    totalScreens: 42,
  },
  "duolingo-math": {
    name: "Duolingo Math — Lessons & Brain Training",
    logo: "/images/app-icons/duolingo-math.jpg",
    platform: "iOS",
    rating: "4.6/5",
    category: "Education",
    screenshots: [
      "/images/screenshots/duolingo-math-1.jpg",
      "/images/screenshots/duolingo-math-1.jpg",
      "/images/screenshots/duolingo-math-1.jpg",
      "/images/screenshots/duolingo-math-1.jpg",
      "/images/screenshots/duolingo-math-1.jpg",
      "/images/screenshots/duolingo-math-1.jpg",
    ],
    totalScreens: 38,
  },
  onefootball: {
    name: "OneFootball — Soccer News & Scores",
    logo: "/images/app-icons/onefootball.jpg",
    platform: "iOS",
    rating: "4.3/5",
    category: "Sports",
    screenshots: [
      "/images/screenshots/onefootball-1.jpg",
      "/images/screenshots/onefootball-1.jpg",
      "/images/screenshots/onefootball-1.jpg",
      "/images/screenshots/onefootball-1.jpg",
      "/images/screenshots/onefootball-1.jpg",
      "/images/screenshots/onefootball-1.jpg",
    ],
    totalScreens: 55,
  },
  "uber-eats": {
    name: "Uber Eats — Fresh Grocery & Delivery",
    logo: "/images/app-icons/uber-eats.jpg",
    platform: "iOS",
    rating: "4.2/5",
    category: "Food & Drink",
    screenshots: [
      "/images/screenshots/uber-eats-1.jpg",
      "/images/screenshots/uber-eats-1.jpg",
      "/images/screenshots/uber-eats-1.jpg",
      "/images/screenshots/uber-eats-1.jpg",
      "/images/screenshots/uber-eats-1.jpg",
      "/images/screenshots/uber-eats-1.jpg",
    ],
    totalScreens: 91,
  },
  quora: {
    name: "Quora — Ask Questions, Get Answers",
    logo: "/images/app-icons/quora.jpg",
    platform: "iOS",
    rating: "4.1/5",
    category: "Social",
    screenshots: [
      "/images/screenshots/quora-1.jpg",
      "/images/screenshots/quora-1.jpg",
      "/images/screenshots/quora-1.jpg",
      "/images/screenshots/quora-1.jpg",
      "/images/screenshots/quora-1.jpg",
      "/images/screenshots/quora-1.jpg",
    ],
    totalScreens: 29,
  },
};

function getAppData(appId: string): AppData {
  if (appsData[appId]) return appsData[appId];
  const name = appId
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
  return {
    name,
    logo: "/images/app-icons/period-tracker.jpg",
    platform: "iOS",
    rating: "4.5/5",
    category: "Apps",
    screenshots: Array.from(
      { length: 6 },
      () => "/images/screenshots/period-tracker-1.jpg"
    ),
    totalScreens: 10,
  };
}

export default async function AppDetailsPage({
  params,
}: {
  params: Promise<{ appId: string }>;
}) {
  const { appId } = await params;
  const appData = getAppData(appId);

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="h-[76px]" />
      <AppDetailsClient appData={appData} />
      <AuthModal />
      <ChatButton />
    </div>
  );
}
