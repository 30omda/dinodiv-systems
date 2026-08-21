import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Testimonials from "@/components/sections/Testimonials";

describe("Testimonials component", () => {
  it("renders star rating elements with role='img' and aria-label", () => {
    render(<Testimonials />);
    const starContainers = screen.getAllByRole("img", { name: "5 out of 5 stars" });
    expect(starContainers.length).toBeGreaterThan(0);
  });

  it("renders quotes with dir='auto' for bidirectional support", () => {
    render(<Testimonials />);
    const englishQuote = screen.getByText(/A top-tier software partner!/i);
    expect(englishQuote).toHaveAttribute("dir", "auto");
  });
});
