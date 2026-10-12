import { render, screen } from "@testing-library/react";
import PhoneCard from "./PhoneCard";

const fakePhone = {
  id: 1,
  name: "Test Phone",
  photo: "/test.png",
  price: 1000,
  model: "TEST",
};

describe("Render Phone Card", () => {
  it("Render Phone Card by: name, model, price", () => {
    render(<PhoneCard phone={fakePhone} />);
    expect(screen.getByText("Test Phone")).toBeInTheDocument();
    expect(screen.getByText("TEST")).toBeInTheDocument();
    expect(screen.getByText(/1000/)).toBeInTheDocument(); // надо исользовать такой формат /1000/ потому что можем поменять цену убрать проблем случайно будет ошибка.
  });
});
