import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Testimonials from "./Testimonials";

describe("Testimonials Component", () => {
  it("renders star ratings with proper ARIA attributes", () => {
    render(<Testimonials />);

    const starGroups = screen.getAllByRole("img", { name: /out of 5 stars/i });
    expect(starGroups.length).toBeGreaterThan(0);
    expect(starGroups[0]).toHaveAttribute("aria-label", "5 out of 5 stars");
  });

  it("renders testimonial quotes with dir='auto' for text direction support", () => {
    render(<Testimonials />);

    const quotes = screen.getAllByText(/"/i);
    expect(quotes.length).toBeGreaterThan(0);
    expect(quotes[0]).toHaveAttribute("dir", "auto");
  });
});
