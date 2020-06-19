import "@testing-library/jest-dom";
import React from "react";
import AddMeasure from "./AddMeasure.mock";
import { render, fireEvent, screen } from "@testing-library/react";
import { create, act } from "react-test-renderer";

test("render right form structure", () => {
  let labelElements;
  const Click = () => jest.fn();
  const match = {
    params: {
      id: "eurusd",
      path: "details",
    },
  };

  render(<AddMeasure />);

  labelElements = screen.getAllByText("type:");
  expect(labelElements.length).toBe(1);

  labelElements = screen.getAllByText("how much?:");
  expect(labelElements.length).toBe(1);

  labelElements = screen.getAllByText("date:");
  expect(labelElements.length).toBe(1);
});

test("when submitting receive mock true response", async () => {
  const { getByText } = render(<AddMeasure />);
  const result = fireEvent.click(getByText("Add"));
  expect(result).toBe(true);
});
