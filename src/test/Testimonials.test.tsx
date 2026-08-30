import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Testimonials from "@/components/sections/Testimonials";

describe("Testimonials Component", () => {
  it("renders star ratings with accessible role and aria-label", () => {
    render(<Testimonials />);
    const starContainers = screen.getAllByRole("img", { name: "5 out of 5 stars" });
    expect(starContainers.length).toBeGreaterThan(0);
    expect(starContainers[0]).toHaveAttribute("aria-label", "5 out of 5 stars");
  });

  it("renders testimonial quotes with dir='auto' attribute for bidirectional text support", () => {
    render(<Testimonials />);
    const quoteParagraphs = screen.getAllByText(/"/i);
    expect(quoteParagraphs.length).toBeGreaterThan(0);
    quoteParagraphs.forEach((paragraph) => {
      expect(paragraph).toHaveAttribute("dir", "auto");
    });
  });
});
