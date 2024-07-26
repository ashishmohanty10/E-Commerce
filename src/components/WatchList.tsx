import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ProductsProp } from "@/types/types";

interface Props {
  watches: ProductsProp[];
}

const WatchList = ({ watches }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 py-10">
      {watches.map((items) => {
        return (
          <div key={items._id}>
            <div className="border-slate-500  rounded-md overflow-hidden hover:border hover:border-slate-50 duration-300 px-2">
              <Image
                src={items?.image}
                width={500}
                height={500}
                alt="Product Image"
                className="w-full h-80 object-contain rounded-md "
              />

              <div className="px-4 pb-2 text-sm flex flex-col gap-1">
                <p className="text-semibold capitalize text-lg">
                  {items?.title}
                </p>
                <p className="font-semibold text-green-400 mb-2">
                  ${items?.price}
                </p>

                <div className="flex items-center gap-1">
                  <Link href={`/watch/${items._id}`}>
                    <button className="px-4 py-2 border border-slate-50 rounded-md font-semibold text-xs hover:bg-slate-50 hover:text-black duration-300 ">
                      More Info
                    </button>
                  </Link>
                  <button className="px-4 py-2 bg-white text-black text-xs font-semibold rounded-md hover:bg-slate-950 hover:border hover:text-white hover:border-slate-50 duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WatchList;
