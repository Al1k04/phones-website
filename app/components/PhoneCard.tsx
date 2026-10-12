import { Phone } from "../types/phone";

export default function PhoneCard({ phone }: { phone: Phone }) {
  return (
    <div className="bg-gray-800 rounded-xl p-4 transition hover:scale-105 hover:shadow-2xl cursor-pointer duration-175 ease-in-out">
      <img
        src={phone.photo}
        alt={phone.name}
        className="w-full h-64 object-contain rounded-lg"
      />
      <div className="flex gap-4 justify-between items-center mb-2">
        <h2 className="text-xl font-bold">{phone.name}</h2>
        <span className="text-md">{phone.model}</span>
      </div>
      <p className="text-right text-gray-300 font-bold text-xl">
        {phone.price} ₾
      </p>
    </div>
  );
}
