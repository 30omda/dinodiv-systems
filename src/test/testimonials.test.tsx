import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Testimonials from "@/components/sections/Testimonials";

describe("Testimonials component accessibility and layout", () => {
  it("renders star rating containers with correct role and aria-label", () => {
    render(<Testimonials />);
    const ratingGroups = screen.getAllByRole("img", { name: "5 out of 5 stars" });
    expect(ratingGroups.length).toBeGreaterThan(0);
  });

  it("renders quote paragraphs with dir='auto' attribute", () => {
    const { container } = render(<Testimonials />);
    const quotes = container.querySelectorAll("p[dir='auto']");
    expect(quotes.length).toBeGreaterThan(0);
  });
});
