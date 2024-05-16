import PhoneCases from "@/components/PhoneCases";

export default async function PhoneCasePage() {
  const res = await fetch("https://jsonserver.reactbd.com/phonecase");
  if (!res.ok) {
    throw new Error("Failed to fetch Data");
  }
  const phonecase = await res.json();

  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center">
        Phone Cases
      </h1>

      <PhoneCases phonecase={phonecase} />
    </div>
  );
}
