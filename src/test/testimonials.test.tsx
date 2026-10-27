import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Testimonials from "@/components/sections/Testimonials";

describe("Testimonials component", () => {
  it("renders star ratings with accessible role and label", () => {
    render(<Testimonials />);
    const starGroups = screen.getAllByRole("img", { name: "5 out of 5 stars" });
    expect(starGroups.length).toBeGreaterThan(0);
  });

  it("renders testimonial quotes with dir='auto' for RTL/multilingual support", () => {
    render(<Testimonials />);
    const arabicQuote = screen.getByText(/بصراحة التعامل مع الشركة/i);
    expect(arabicQuote).toHaveAttribute("dir", "auto");
  });
});
