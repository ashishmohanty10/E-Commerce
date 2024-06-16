import { notFound, redirect } from "next/navigation";
import Image from "next/image";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

interface SinglePhoneCaseProps {
  params: {
    id: string;
  };
}

export default async function SinglePhoneCase({
  params,
}: SinglePhoneCaseProps) {
  const { isAuthenticated } = getKindeServerSession();
  const isLoggedIn = await isAuthenticated();

  if (!isLoggedIn) {
    redirect("/api/auth/login");
  }
  const res = await fetch(
    `https://jsonserver.reactbd.com/phonecase/${params.id}`
  );

  if (!res?.ok) {
    return notFound();
  }

  const singlePhoneCase = await res.json();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 py-10 items-center">
      <div className="flex justify-center">
        <Image
          src={singlePhoneCase?.image}
          alt="Product Image"
          width={500}
          height={500}
          className="rounded-xl object-contain"
        />
      </div>

      <div>
        <p className="text-xs text-start font-medium capitalize px-2 py-1 bg-white rounded-md text-black w-fit mb-4">
          {singlePhoneCase?.category}
        </p>
        <p className="text-xl font-bold mb-2 ">
          {singlePhoneCase.brand} {singlePhoneCase.title}
        </p>

        <p className="font-medium text-slate-300 mb-5">
          {singlePhoneCase?.description}
        </p>
        <p className="font-semibold ">
          Price:{" "}
          <span className="text-green-400">${singlePhoneCase.price}</span>
        </p>

        <button className="mt-10 px-4 py-2 bg-white text-black text-xs font-semibold rounded-md hover:bg-slate-950 hover:border hover:text-white hover:border-slate-50 duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
