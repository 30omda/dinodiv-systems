import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Testimonials from "@/components/sections/Testimonials";

describe("Testimonials component accessibility and RTL support", () => {
  it("renders star ratings with role='img' and proper aria-label", () => {
    render(<Testimonials />);
    const starContainers = screen.getAllByRole("img", { name: "5 out of 5 stars" });
    expect(starContainers.length).toBeGreaterThan(0);
  });

  it("renders quotes with dir='auto' attribute", () => {
    render(<Testimonials />);
    const quotes = screen.getAllByText(/^".*"$/s);
    expect(quotes.length).toBeGreaterThan(0);
    quotes.forEach((quote) => {
      expect(quote).toHaveAttribute("dir", "auto");
    });
  });
});
