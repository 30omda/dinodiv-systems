import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Testimonials from "../components/sections/Testimonials";

describe("Testimonials component", () => {
  it("renders star rating with accessible role and aria-label", () => {
    render(<Testimonials />);
    const starRatings = screen.getAllByRole("img", { name: "5 out of 5 stars" });
    expect(starRatings.length).toBeGreaterThan(0);

    // Verify individual SVGs inside have aria-hidden="true"
    const firstRating = starRatings[0];
    const svgs = firstRating.querySelectorAll("svg");
    expect(svgs.length).toBe(5);
    svgs.forEach((svg) => {
      expect(svg.getAttribute("aria-hidden")).toBe("true");
    });
  });
});
