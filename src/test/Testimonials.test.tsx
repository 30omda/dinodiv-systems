import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Testimonials from "../components/sections/Testimonials";

describe("Testimonials", () => {
  it("renders star rating with role='img' and aria-label", () => {
    render(<Testimonials />);
    const starRatings = screen.getAllByRole("img", { name: /5 out of 5 stars/i });
    expect(starRatings.length).toBeGreaterThan(0);
    expect(starRatings[0]).toHaveAttribute("aria-label", "5 out of 5 stars");
  });
});
