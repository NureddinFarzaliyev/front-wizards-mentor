export default function Home() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-2">
      {Array.from({ length: 4 }).map((_, idx) => (
        <div key={idx} className="h-40 w-full bg-main-bg rounded-[7px]" />
      ))}

      <div className="flex-all-1">
        <div className="h-40 w-full bg-main-bg rounded-[7px]" />
        <div className="h-40 w-full bg-main-bg rounded-[7px]" />
      </div>
    </div>
  );
}
