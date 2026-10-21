import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Testimonials from "@/components/sections/Testimonials";

describe("Testimonials component", () => {
  it("renders star ratings with accessible ARIA label and aria-hidden on icons", () => {
    render(<Testimonials />);

    const ratingElements = screen.getAllByRole("img", {
      name: "5 out of 5 stars",
    });

    expect(ratingElements.length).toBeGreaterThan(0);

    ratingElements.forEach((ratingEl) => {
      const starIcons = ratingEl.querySelectorAll("svg");
      expect(starIcons.length).toBe(5);
      starIcons.forEach((star) => {
        expect(star.getAttribute("aria-hidden")).toBe("true");
      });
    });
  });
});
