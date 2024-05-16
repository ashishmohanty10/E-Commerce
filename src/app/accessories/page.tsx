import AccessoriesList from "@/components/AccessoriesList";

export default async function AccessoriesPage() {
  const res = await fetch("https://jsonserver.reactbd.com/accessories");
  if (!res.ok) {
    throw new Error("Failed to fetch Data");
  }

  const accessories = await res.json();

  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center">
        Accessories
      </h1>

      <AccessoriesList accessories={accessories} />
    </div>
  );
}
