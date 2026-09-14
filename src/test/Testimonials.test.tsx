import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Testimonials from "../components/sections/Testimonials";

describe("Testimonials", () => {
  it("renders rating star groups with role='img' and proper aria-label", () => {
    render(<Testimonials />);
    const starGroups = screen.getAllByRole("img", { name: "5 out of 5 stars" });
    expect(starGroups.length).toBeGreaterThan(0);
  });

  it("renders testimonial quotes with dir='auto' attribute", () => {
    render(<Testimonials />);
    const quotes = screen.getAllByText(/"/);
    quotes.forEach((quote) => {
      expect(quote).toHaveAttribute("dir", "auto");
    });
  });
});
