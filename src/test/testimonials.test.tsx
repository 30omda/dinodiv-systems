import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Testimonials from "@/components/sections/Testimonials";

describe("Testimonials Component", () => {
  it("renders star ratings with proper accessibility attributes", () => {
    render(<Testimonials />);
    const starContainers = screen.getAllByRole("img", { name: /5 out of 5 stars/i });
    expect(starContainers.length).toBeGreaterThan(0);
  });

  it("renders quote paragraphs with dir='auto' for bidirectional text support", () => {
    render(<Testimonials />);
    const quoteElements = screen.getAllByText(/"/i);
    expect(quoteElements.length).toBeGreaterThan(0);
    quoteElements.forEach((quoteEl) => {
      expect(quoteEl).toHaveAttribute("dir", "auto");
    });
  });
});
