import Link from "next/link";

export default function NotFoound() {
  return (
    <div>
      <h1>Error in Fetching the product</h1>
      <p>Sorry 😔</p>

      <Link href={"/products"}>
        <button>Go Back</button>
      </Link>
    </div>
  );
}
