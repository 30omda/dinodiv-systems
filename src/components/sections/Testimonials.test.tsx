import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import Testimonials from "./Testimonials";

describe("Testimonials Component", () => {
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

  it("renders star ratings with accessible ARIA attributes", () => {
    render(<Testimonials />);
    const starContainers = screen.getAllByRole("img", { name: "5 out of 5 stars" });
    expect(starContainers.length).toBeGreaterThan(0);
  });

  it("renders testimonial quotes with dir='auto' for text directionality", () => {
    render(<Testimonials />);
    const englishQuote = screen.getByText(/A top-tier software partner!/i);
    const arabicQuote = screen.getByText(/بصراحة التعامل مع الشركة كان إضافة قوية لينا/i);

    expect(englishQuote).toHaveAttribute("dir", "auto");
    expect(arabicQuote).toHaveAttribute("dir", "auto");
  });
});
