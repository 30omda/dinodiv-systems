import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Testimonials from "@/components/sections/Testimonials";

describe("Testimonials component", () => {
  it("renders star rating containers with proper accessibility attributes", () => {
    render(<Testimonials />);
    const ratingContainers = screen.getAllByRole("img", { name: /5 out of 5 stars/i });
    expect(ratingContainers.length).toBeGreaterThan(0);
  });

  it("renders quote paragraphs with dir='auto' for bi-directional text support", () => {
    render(<Testimonials />);
    const englishQuote = screen.getByText(/A top-tier software partner/i);
    expect(englishQuote).toHaveAttribute("dir", "auto");
  });
});
