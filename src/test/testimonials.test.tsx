import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Testimonials from "@/components/sections/Testimonials";

describe("Testimonials component", () => {
  it("renders star rating elements with role='img' and aria-label", () => {
    render(<Testimonials />);
    const starRatings = screen.getAllByRole("img", { name: "5 out of 5 stars" });
    expect(starRatings.length).toBeGreaterThan(0);
  });

  it("renders testimonial quotes with dir='auto' attribute", () => {
    render(<Testimonials />);
    const heading = screen.getByText(/What Our/i);
    expect(heading).toBeInTheDocument();

    const quoteElements = screen.getAllByText(/^"/);
    expect(quoteElements.length).toBe(3);
    quoteElements.forEach((quote) => {
      expect(quote).toHaveAttribute("dir", "auto");
    });
  });
});
