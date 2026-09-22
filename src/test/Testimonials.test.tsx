import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Testimonials from "@/components/sections/Testimonials";

describe("Testimonials component accessibility", () => {
  it("renders star ratings with proper role and aria-label", () => {
    render(<Testimonials />);

    const starGroups = screen.getAllByRole("img", { name: "5 out of 5 stars" });
    expect(starGroups.length).toBeGreaterThan(0);

    starGroups.forEach((group) => {
      const starIcons = group.querySelectorAll("svg");
      expect(starIcons.length).toBe(5);
      starIcons.forEach((star) => {
        expect(star.getAttribute("aria-hidden")).toBe("true");
      });
    });
  });
});
