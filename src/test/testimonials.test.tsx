import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Testimonials from "../components/sections/Testimonials";

describe("Testimonials component", () => {
  it("renders star rating with role='img' and accessible label", () => {
    render(<Testimonials />);
    const starGroups = screen.getAllByRole("img", { name: /5 out of 5 stars/i });
    expect(starGroups.length).toBeGreaterThan(0);
  });

  it("renders quote elements with dir='auto' for bidirectional text support", () => {
    render(<Testimonials />);
    const englishQuote = screen.getByText(/A top-tier software partner/i);
    expect(englishQuote).toHaveAttribute("dir", "auto");
  });
});
