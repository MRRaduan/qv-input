import React from "react";
import { render } from "@testing-library/react";

import Input from "./Input";

describe("Input", () => {
  test("render the Input component", () => {
    render(<Input />);
  });
});
