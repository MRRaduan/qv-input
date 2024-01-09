import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import Input from "./Input";

const requirements = [
  {
    description: "Has a number 0-9",
    validator: (password: string) => /[0-9]/.test(password),
  },
];
const setup = () => {
  const utils = render(<Input requirements={requirements} />);
  const input: HTMLInputElement = screen.getByLabelText("password-input");
  return {
    input,
    ...utils,
  };
};

describe("Input Password", () => {
  test("Render the Input component properly", () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: "testvalue" } });
    expect(input.value).toBe("testvalue");
  });

  test("Should validation be 'x' in case of invalid password", () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: "abc" } });
    expect(screen.getByText("x"));
  });

  test("Should validation be '✔' in case of valid password", () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: "ab23cd" } });
    expect(screen.getByText("✔"));
  });
});
