import { client } from "./lib/prisma";
import PhonesList from "./components/PhonesList";
import Link from "next/link";

export default async function Home() {
  const phones = await client.phone.findMany();
  return (
    <div>
      <h1 className="flex justify-center text-2xl">Phones-Website</h1>
      <Link href="/cart">Cart</Link>
      <PhonesList phones={phones} />
    </div>
  );
}
