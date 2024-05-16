import WatchList from "@/components/WatchList";

export default async function WatchesPage() {
  const res = await fetch("https://jsonserver.reactbd.com/watch");

  if (!res?.ok) {
    throw new Error("Failed to fetch Data");
  }

  const watches = await res.json();
  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-bold mb-5 text-center">
        This is the Products Page
      </h1>

      <WatchList watches={watches} />
    </div>
  );
}
