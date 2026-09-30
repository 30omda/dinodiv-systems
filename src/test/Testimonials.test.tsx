import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Testimonials from "../components/sections/Testimonials";

// Mock framer-motion to avoid animation issues during testing
vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, className }: { children: React.ReactNode; className?: string }) => (
      <div className={className}>{children}</div>
    ),
  },
}));

describe("Testimonials component accessibility", () => {
  it("renders star ratings with accessible img role and aria-label", () => {
    render(<Testimonials />);
    const starContainers = screen.getAllByRole("img", { name: /out of 5 stars/i });
    expect(starContainers.length).toBeGreaterThan(0);
    expect(starContainers[0]).toHaveAttribute("aria-label", "5 out of 5 stars");
  });

  it("renders quote paragraphs with dir='auto' attribute", () => {
    const { container } = render(<Testimonials />);
    const quotes = container.querySelectorAll("p[dir='auto']");
    expect(quotes.length).toBeGreaterThan(0);
  });
});
