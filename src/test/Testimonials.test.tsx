import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Testimonials from "../components/sections/Testimonials";

// Mock framer-motion to simplify rendering in Vitest/JSDOM
vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
      const { whileInView, initial, animate, transition, viewport, ...validProps } = props as Record<string, unknown>;
      return (
        <div className={className} {...(validProps as React.HTMLAttributes<HTMLDivElement>)}>
          {children}
        </div>
      );
    },
  },
}));

describe("Testimonials", () => {
  it("renders star ratings with accessible ARIA labels and role", () => {
    render(<Testimonials />);
    const starRatings = screen.getAllByRole("img", { name: /5 out of 5 stars/i });
    expect(starRatings.length).toBeGreaterThan(0);
    starRatings.forEach((rating) => {
      expect(rating).toHaveAttribute("aria-label", "5 out of 5 stars");
    });
  });
});
