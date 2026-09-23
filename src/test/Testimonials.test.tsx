import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Testimonials from "../components/sections/Testimonials";

describe("Testimonials Component", () => {
  it("renders star ratings with accessible role and aria-label", () => {
    render(<Testimonials />);

    const starContainers = screen.getAllByRole("img", { name: "5 out of 5 stars" });
    expect(starContainers.length).toBeGreaterThan(0);
    expect(starContainers[0]).toHaveAttribute("aria-label", "5 out of 5 stars");
  });
});
