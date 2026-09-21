import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Testimonials from "@/components/sections/Testimonials";

describe("Testimonials component", () => {
  it("renders star rating images with proper ARIA attributes", () => {
    render(<Testimonials />);
    const starRatings = screen.getAllByRole("img", { name: "5 out of 5 stars" });
    expect(starRatings.length).toBeGreaterThan(0);
  });

  it("renders quote paragraphs with dir='auto' attribute", () => {
    render(<Testimonials />);
    const paragraphs = screen.getAllByText(/".*"/);
    expect(paragraphs.length).toBeGreaterThan(0);
    paragraphs.forEach((p) => {
      expect(p).toHaveAttribute("dir", "auto");
    });
  });
});
