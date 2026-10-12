import { PrismaClient } from "../app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const client = new PrismaClient({ adapter });

async function main() {
  await client.phone.createMany({
    data: [
      {
        name: "Iphone 17 pro max",
        photo: "/phones/iphone-17-pro-max.png",
        price: 4389,
        model: "IPHONE",
      },
      {
        name: "Iphone 18 pro max",
        photo: "/phones/iphone-18-pro-max.png",
        price: 5600,
        model: "IPHONE",
      },
      {
        name: "Iphone 17e",
        photo: "/phones/iphone-17e.png",
        price: 2200,
        model: "IPHONE",
      },
      {
        name: "Iphone 16",
        photo: "/phones/iphone-16.png",
        price: 2200,
        model: "IPHONE",
      },
      {
        name: "Iphone 17 pro",
        photo: "/phones/iphone-17-pro.png",
        price: 3500,
        model: "IPHONE",
      },
      {
        name: "Iphone 18 pro",
        photo: "/phones/iphone-18-pro.png",
        price: 4999,
        model: "IPHONE",
      },
      {
        name: "Macbook",
        photo: "/phones/macbook.png",
        price: 5999,
        model: "MACBOOK",
      },
      {
        name: "Magic Keyboard",
        photo: "/phones/magic-keyboard.png",
        price: 399,
        model: "KEYBOARD",
      },
    ],
  });
}

main();
