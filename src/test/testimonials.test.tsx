import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Testimonials from "../components/sections/Testimonials";

describe("Testimonials component", () => {
  it("renders star ratings with accessibility role and aria-label", () => {
    render(<Testimonials />);

    const starGroups = screen.getAllByRole("img", { name: "5 out of 5 stars" });
    expect(starGroups.length).toBeGreaterThan(0);
    expect(starGroups[0]).toBeInTheDocument();
  });

  it("renders testimonial quotes with dir='auto' attribute", () => {
    const { container } = render(<Testimonials />);

    const quotes = container.querySelectorAll("p[dir='auto']");
    expect(quotes.length).toBe(3);
  });
});
