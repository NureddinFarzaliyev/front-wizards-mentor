"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = encodeURIComponent((e.target as any)[0].value);
    router.push(`/search/${query}`);
  };

  return (
    <div className="px-20 flex justify-center items-center h-screen">
      <form onSubmit={onSubmit} className="w-1/2">
        <input
          placeholder="Search for some nice place"
          className="bg-white text-black font-semibold p-2 rounded-md w-full mx-auto outline-none text-3xl opacity-50 focus:opacity-100 focus:scale-110 transition-all duration-300"
        />
      </form>
    </div>
  );
}
