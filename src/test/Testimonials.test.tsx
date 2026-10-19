import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Testimonials from "@/components/sections/Testimonials";

describe("Testimonials", () => {
  it("renders star ratings with accessible ARIA label and role", () => {
    render(<Testimonials />);
    const starContainers = screen.getAllByRole("img", { name: "5 out of 5 stars" });
    expect(starContainers.length).toBeGreaterThan(0);
  });

  it("renders quotes with dir='auto' for proper text directionality", () => {
    render(<Testimonials />);
    const quotes = screen.getAllByText(/"/);
    expect(quotes.length).toBeGreaterThan(0);
    quotes.forEach((quote) => {
      expect(quote).toHaveAttribute("dir", "auto");
    });
  });
});
