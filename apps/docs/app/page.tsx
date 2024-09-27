import { ModeToggle } from "@/components/ui/mode-toggle";

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <div className="container">container</div>
      {/* To center a container, use the mx-auto utility: */}
      <div className="container mx-auto">
        <ModeToggle></ModeToggle>
      </div>
    </div>
  );
}
