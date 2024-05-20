import ProductsList from "@/components/ProductsList";

const getData = async () => {
  const res = await fetch("https://jsonserver.reactbd.com/phone");
  if (!res.ok) {
    throw new Error("Failed to fetch Data");
  }

  return res.json();
};

export default async function Productspage() {
  const phone = await getData();
  return (
    <div className="">
      <h1 className="text-4xl md:text-5xl font-bold mb-5 text-center">
        This is the Phones Page
      </h1>

      <ProductsList phones={phone} />
    </div>
  );
}
