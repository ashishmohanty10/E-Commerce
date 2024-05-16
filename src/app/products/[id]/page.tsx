import Image from "next/image";
import { notFound } from "next/navigation";

type SingleProductProps = {
  params: {
    id: string;
  };
};

export default async function SinglePhoneCasePage({
  params,
}: SingleProductProps) {
  const res = await fetch(`https://jsonserver.reactbd.com/phone/${params.id}`);

  if (!res?.ok) {
    return notFound();
  }
  const product = await res.json();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 py-10 items-center">
      <div className="flex justify-center">
        <Image
          src={product?.image}
          alt="Product Image"
          width={500}
          height={500}
          className="rounded-xl object-contain"
        />
      </div>

      <div>
        <p className="text-xs text-start font-medium capitalize px-2 py-1 bg-white rounded-md text-black w-fit mb-4">
          {product?.category}
        </p>
        <p className="text-xl font-bold mb-2 ">
          {product.brand} {product.title}
        </p>

        <p className="font-medium text-slate-300 mb-5">
          {product?.description}
        </p>
        <p className="font-semibold ">
          Price: <span className="text-green-400">${product.price}</span>
        </p>
      </div>
    </div>
  );
}
