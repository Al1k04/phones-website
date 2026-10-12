import { render, screen } from "@testing-library/react";
import PhonesList from "./PhonesList";
import userEvent from "@testing-library/user-event";

const fakePhones = [
  {
    id: 1,
    name: "Samsung S24",
    price: 1233,
    photo: "/test1.png",
    model: "SAMSUNG",
  },
  {
    id: 2,
    name: "Iphone 18 pro",
    price: 1999,
    photo: "/test2.png",
    model: "IPHONE",
  },
];

describe("Render Phones List", () => {
  it("Render phones", async () => {
    render(<PhonesList phones={fakePhones} />);
    const input = screen.getByRole("textbox");

    await userEvent.type(input, "Iphone");

    expect(screen.getByText("Iphone 18 pro")).toBeInTheDocument();
    expect(screen.queryByText("Samsung S24")).not.toBeInTheDocument();
  });
});
