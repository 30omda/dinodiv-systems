import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Testimonials from "@/components/sections/Testimonials";

describe("Testimonials component accessibility", () => {
  it("renders star rating groups with role='img' and aria-label", () => {
    render(<Testimonials />);

    const ratingGroups = screen.getAllByRole("img", { name: "5 out of 5 stars" });
    expect(ratingGroups.length).toBeGreaterThan(0);
    expect(ratingGroups).toHaveLength(3);
  });

  it("renders testimonial quote paragraphs with dir='auto'", () => {
    render(<Testimonials />);

    const englishQuote = screen.getByText(/A top-tier software partner/i);
    expect(englishQuote.closest("p")).toHaveAttribute("dir", "auto");

    const arabicQuote = screen.getByText(/بصراحة التعامل مع الشركة/i);
    expect(arabicQuote.closest("p")).toHaveAttribute("dir", "auto");
  });
});
