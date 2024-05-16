import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1>Error in Fetching the product</h1>
      <p>Sorry 😔</p>

      <Link href={"/phonecases"}>
        <button>Go Back</button>
      </Link>
    </div>
  );
}
