import { withAuth } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextRequest } from "next/server";

export default async function middleware(req: NextRequest) {
  return withAuth(req);
}

export const config = {
  matcher: [
    "/products",
    "/products/[id]",
    "/accessories",
    "/accessories/[id]",
    "/phonecases",
    "/phonecases/[id]",
    "/watch",
    "/watch/[id]",
  ],
};
