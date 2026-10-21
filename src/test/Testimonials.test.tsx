import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import Testimonials from "@/components/sections/Testimonials";

describe("Testimonials", () => {
  beforeEach(() => {
    // Mock IntersectionObserver for Framer Motion whileInView
    class MockIntersectionObserver {
      observe() {}
      unobserve() {}
      disconnect() {}
    }
    Object.defineProperty(window, "IntersectionObserver", {
      writable: true,
      configurable: true,
      value: MockIntersectionObserver,
    });
  });

  it("renders star rating with role='img' and aria-label", () => {
    render(<Testimonials />);
    const starRatings = screen.getAllByRole("img", { name: "5 out of 5 stars" });
    expect(starRatings.length).toBeGreaterThan(0);
  });

  it("renders quote paragraphs with dir='auto'", () => {
    render(<Testimonials />);
    const quoteParagraphs = screen.getAllByText(/"/);
    expect(quoteParagraphs.length).toBeGreaterThan(0);
    quoteParagraphs.forEach((p) => {
      expect(p).toHaveAttribute("dir", "auto");
    });
  });
});
