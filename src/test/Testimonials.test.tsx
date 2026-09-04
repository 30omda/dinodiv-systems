import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Testimonials from "@/components/sections/Testimonials";

describe("Testimonials", () => {
  it("renders star rating with proper accessible role and aria-label", () => {
    render(<Testimonials />);

    const starRatings = screen.getAllByRole("img", { name: "5 out of 5 stars" });
    expect(starRatings.length).toBe(3);

    starRatings.forEach((rating) => {
      const svgs = rating.querySelectorAll("svg");
      expect(svgs.length).toBe(5);
      svgs.forEach((svg) => {
        expect(svg.getAttribute("aria-hidden")).toBe("true");
      });
    });
  });
});
