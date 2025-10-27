import { CreatePost } from "@/app/components/CreatePost";
import { Feed } from "@/app/components/Feed";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black md:grid md:grid-cols-3">
      <div className="md:col-start-2">
        <CreatePost />
        <Feed />
      </div>
    </div>
  );
}
