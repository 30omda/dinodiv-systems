import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Testimonials from "@/components/sections/Testimonials";

describe("Testimonials component", () => {
  it("renders star rating groups with role='img' and accessible aria-label", () => {
    render(<Testimonials />);

    const starRatingGroups = screen.getAllByRole("img", { name: /5 out of 5 stars/i });
    expect(starRatingGroups.length).toBeGreaterThan(0);
  });
});
