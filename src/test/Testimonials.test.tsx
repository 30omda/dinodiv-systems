import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Testimonials from "@/components/sections/Testimonials";

describe("Testimonials component", () => {
  it("renders star rating with accessible role and aria-label", () => {
    render(<Testimonials />);
    const starGroups = screen.getAllByRole("img", { name: /5 out of 5 stars/i });
    expect(starGroups.length).toBeGreaterThan(0);
  });

  it("renders testimonial quotes with dir='auto' for correct text direction", () => {
    render(<Testimonials />);
    const englishQuote = screen.getByText(/A top-tier software partner!/i);
    expect(englishQuote).toHaveAttribute("dir", "auto");

    const arabicQuote = screen.getByText(/بصراحة التعامل مع الشركة/i);
    expect(arabicQuote).toHaveAttribute("dir", "auto");
  });
});
