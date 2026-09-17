import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Testimonials from "../components/sections/Testimonials";

describe("Testimonials component", () => {
  it("renders star ratings with accessible role and aria-label", () => {
    render(<Testimonials />);
    const starRatings = screen.getAllByRole("img", { name: "5 out of 5 stars" });
    expect(starRatings.length).toBeGreaterThan(0);
    expect(starRatings[0]).toBeInTheDocument();
  });

  it("applies dir='auto' on quote paragraphs for bidirectional text support", () => {
    const { container } = render(<Testimonials />);
    const quoteElements = container.querySelectorAll("p[dir='auto']");
    expect(quoteElements.length).toBeGreaterThan(0);
  });
});
