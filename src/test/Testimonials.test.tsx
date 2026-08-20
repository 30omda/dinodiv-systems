import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Testimonials from "../components/sections/Testimonials";

describe("Testimonials component", () => {
  it("renders star ratings with proper ARIA attributes", () => {
    render(<Testimonials />);
    const starRatings = screen.getAllByRole("img", { name: "5 out of 5 stars" });
    expect(starRatings.length).toBeGreaterThan(0);
  });

  it("renders testimonial quotes with dir='auto'", () => {
    render(<Testimonials />);
    const firstQuote = screen.getByText(/A top-tier software partner!/);
    expect(firstQuote).toHaveAttribute("dir", "auto");
  });
});
