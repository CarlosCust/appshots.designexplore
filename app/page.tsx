import { Navbar } from "@/components/navbar/navbar";
import { MainContent } from "@/components/main-content/main-content";
import { AuthModal } from "@/components/auth-modal/auth-modal";
import { ChatButton } from "@/components/chat-button";

export default function HomePage() {
  return (
    <div className="bg-white min-h-screen font-indivisible">
      <Navbar />
      <MainContent />
      <AuthModal />
      <ChatButton />
    </div>
  );
}
