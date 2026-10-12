"use client";
import { useState } from "react";
import { Phone } from "../types/phone";
import PhoneCard from "./PhoneCard";

export default function PhonesList({ phones }: { phones: Phone[] }) {
  const [search, setSearch] = useState("");
  const filtered = phones.filter((phone) =>
    phone.name.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <div>
      <div className="flex justify-center mt-3">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className=" w-80 bg-gray-800 py-2 px-4 rounded text-white outline-0 "
          placeholder="Search..."
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {filtered.map((phone) => (
          <PhoneCard key={phone.id} phone={phone} />
        ))}
      </div>
    </div>
  );
}
