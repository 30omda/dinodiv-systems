import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Testimonials from "../components/sections/Testimonials";

describe("Testimonials Component", () => {
  it("renders accessible star ratings with role='img' and aria-label", () => {
    render(<Testimonials />);
    const starContainers = screen.getAllByRole("img", { name: "5 out of 5 stars" });
    expect(starContainers.length).toBeGreaterThan(0);
  });

  it("renders testimonial quotes with dir='auto' for proper bidirectional text handling", () => {
    const { container } = render(<Testimonials />);
    const quotes = container.querySelectorAll("p[dir='auto']");
    expect(quotes.length).toBeGreaterThan(0);
  });
});
