import { notFound, redirect } from "next/navigation";
import Image from "next/image";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

interface SingleAccessoryProp {
  params: {
    id: string;
  };
}

export default async function SingleAccessoryPage({
  params,
}: SingleAccessoryProp) {
  const { isAuthenticated } = getKindeServerSession();
  const isLoggedIn = await isAuthenticated();

  if (!isLoggedIn) {
    redirect("/api/auth/login");
  }
  const res = await fetch(
    `https://jsonserver.reactbd.com/accessories/${params.id}`
  );

  if (!res?.ok) {
    return notFound();
  }

  const accessory = await res.json();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 py-10 items-center">
      <div className="flex justify-center">
        <Image
          src={accessory?.image}
          alt="Product Image"
          width={500}
          height={500}
          className="rounded-xl object-contain"
        />
      </div>

      <div>
        <p className="text-xs text-start font-medium capitalize px-2 py-1 bg-white rounded-md text-black w-fit mb-4">
          {accessory?.category}
        </p>
        <p className="text-xl font-bold mb-2 ">
          {accessory.brand} {accessory.title}
        </p>

        <p className="font-medium text-slate-300 mb-5">
          {accessory?.description}
        </p>
        <p className="font-semibold ">
          Price: <span className="text-green-400">${accessory.price}</span>
        </p>
      </div>
    </div>
  );
}
