import { LogoutLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server";

import { HiArrowSmRight } from "react-icons/hi";

export default async function Home() {
  return (
    <main className="text-center py-56 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-10">
        Welcome to My Shop
      </h1>

      <div className="flex justify-center gap-5">
        <RegisterLink className="px-4 py-2 bg-white text-black text-sm font-semibold rounded-md flex items-center gap-2 hover:border hover:border-white hover:text-white hover:bg-black duration-300">
          <button>Login</button>
          <HiArrowSmRight className="animate-pulse text-lg" />
        </RegisterLink>

        <LogoutLink className="px-4 py-2 bg-white text-black text-sm font-semibold rounded-md flex items-center gap-2 hover:border hover:border-white hover:text-white hover:bg-black duration-300">
          <button>Logout</button>
          <HiArrowSmRight className="animate-pulse text-lg" />
        </LogoutLink>
      </div>
    </main>
  );
}
