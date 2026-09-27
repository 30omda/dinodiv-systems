import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import Testimonials from "../components/sections/Testimonials";

beforeEach(() => {
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

describe("Testimonials Component", () => {
  it("renders star rating containers with proper accessibility attributes", () => {
    render(<Testimonials />);

    const ratingElements = screen.getAllByRole("img", { name: /5 out of 5 stars/i });
    expect(ratingElements.length).toBeGreaterThan(0);

    ratingElements.forEach((ratingEl) => {
      expect(ratingEl).toHaveAttribute("aria-label", "5 out of 5 stars");
      const icons = ratingEl.querySelectorAll("svg");
      icons.forEach((icon) => {
        expect(icon).toHaveAttribute("aria-hidden", "true");
      });
    });
  });
});
