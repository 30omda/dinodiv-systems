import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Testimonials from "../components/sections/Testimonials";

describe("Testimonials component", () => {
  it("renders star ratings with accessible ARIA label and hidden SVG icons", () => {
    render(<Testimonials />);
    const starRatingGroups = screen.getAllByRole("img", { name: /5 out of 5 stars/i });
    expect(starRatingGroups.length).toBeGreaterThan(0);
  });

  it("renders testimonial quote and name with dir='auto' attribute", () => {
    render(<Testimonials />);
    const arabicQuote = screen.getByText(/بصراحة التعامل مع الشركة كان إضافة قوية لينا/i);
    expect(arabicQuote).toHaveAttribute("dir", "auto");

    const arabicName = screen.getByText(/م. أحمد ممدوح/i);
    expect(arabicName).toHaveAttribute("dir", "auto");
  });
});
