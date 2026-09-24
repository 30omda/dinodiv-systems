import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Testimonials from "../components/sections/Testimonials";

describe("Testimonials component accessibility and RTL support", () => {
  it("renders star ratings with role='img' and proper aria-label", () => {
    render(<Testimonials />);
    const starGroups = screen.getAllByRole("img", { name: "5 out of 5 stars" });
    expect(starGroups.length).toBeGreaterThan(0);
  });

  it("renders quotes with dir='auto' for proper RTL/LTR support", () => {
    const { container } = render(<Testimonials />);
    const quotes = container.querySelectorAll("p[dir='auto']");
    expect(quotes.length).toBeGreaterThan(0);
  });
});
