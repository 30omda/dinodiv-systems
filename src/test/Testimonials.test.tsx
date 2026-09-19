import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Testimonials from "../components/sections/Testimonials";

describe("Testimonials component", () => {
  it("renders star rating groups with role='img' and accessible aria-label", () => {
    render(<Testimonials />);

    const starRatings = screen.getAllByRole("img", { name: "5 out of 5 stars" });
    expect(starRatings.length).toBeGreaterThan(0);

    starRatings.forEach((rating) => {
      expect(rating).toHaveAttribute("aria-label", "5 out of 5 stars");
    });
  });
});
