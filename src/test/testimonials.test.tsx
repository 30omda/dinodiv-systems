import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Testimonials from "@/components/sections/Testimonials";

describe("Testimonials component accessibility and layout", () => {
  it("renders star rating groups with role='img' and aria-label", () => {
    render(<Testimonials />);
    const starGroups = screen.getAllByRole("img", { name: "5 out of 5 stars" });
    expect(starGroups.length).toBeGreaterThan(0);
  });

  it("renders quote paragraphs with dir='auto' attribute", () => {
    render(<Testimonials />);
    const AndreiQuote = screen.getByText(/A top-tier software partner!/);
    expect(AndreiQuote).toHaveAttribute("dir", "auto");
  });
});
