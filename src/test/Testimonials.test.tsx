import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Testimonials from "@/components/sections/Testimonials";

describe("Testimonials component accessibility", () => {
  it("renders star rating elements with role='img' and accessible aria-labels", () => {
    render(<Testimonials />);
    const starRatings = screen.getAllByRole("img", { name: /out of 5 stars/i });
    expect(starRatings.length).toBeGreaterThan(0);
    starRatings.forEach((rating) => {
      expect(rating).toHaveAttribute("aria-label", "5 out of 5 stars");
    });
  });
});
