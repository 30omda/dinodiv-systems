import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Testimonials from "../components/sections/Testimonials";

describe("Testimonials Component", () => {
  it("renders star ratings with proper accessibility attributes", () => {
    render(<Testimonials />);
    const starRatings = screen.getAllByRole("img", { name: /5 out of 5 stars/i });
    expect(starRatings.length).toBeGreaterThan(0);
    starRatings.forEach((rating) => {
      expect(rating).toHaveAttribute("aria-label", "5 out of 5 stars");
    });
  });
});
