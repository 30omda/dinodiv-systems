import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Testimonials from "@/components/sections/Testimonials";

describe("Testimonials Component", () => {
  it("renders accessible star rating groups with role='img' and aria-label", () => {
    render(<Testimonials />);
    const ratingGroups = screen.getAllByRole("img", { name: "5 out of 5 stars" });
    expect(ratingGroups).toHaveLength(3);

    ratingGroups.forEach((group) => {
      expect(group).toHaveAttribute("aria-label", "5 out of 5 stars");
      const svgs = group.querySelectorAll("svg");
      expect(svgs.length).toBe(5);
      svgs.forEach((svg) => {
        expect(svg).toHaveAttribute("aria-hidden", "true");
      });
    });
  });

  it("applies dir='auto' to testimonial quotes and client names for proper bidirectional rendering", () => {
    const { container } = render(<Testimonials />);
    const quotes = container.querySelectorAll("p.italic");
    expect(quotes.length).toBe(3);
    quotes.forEach((quote) => {
      expect(quote).toHaveAttribute("dir", "auto");
    });

    const clientNames = container.querySelectorAll("div.border-t p.font-semibold");
    expect(clientNames.length).toBe(3);
    clientNames.forEach((name) => {
      expect(name).toHaveAttribute("dir", "auto");
    });
  });
});
