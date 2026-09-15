import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Testimonials from "@/components/sections/Testimonials";

describe("Testimonials component accessibility and layout", () => {
  it("renders star rating with role='img' and aria-label", () => {
    render(<Testimonials />);
    const starGroups = screen.getAllByRole("img", { name: /out of 5 stars/i });
    expect(starGroups.length).toBeGreaterThan(0);
    expect(starGroups[0]).toHaveAttribute("aria-label", "5 out of 5 stars");
  });

  it("renders quote text with dir='auto' for proper multilingual text directionality", () => {
    render(<Testimonials />);
    const arabicAuthor = screen.getByText("م. أحمد ممدوح");
    expect(arabicAuthor).toBeInTheDocument();

    const quotes = screen.getAllByText(/".*"/);
    expect(quotes.length).toBeGreaterThan(0);
    quotes.forEach((quoteEl) => {
      expect(quoteEl).toHaveAttribute("dir", "auto");
    });
  });
});
