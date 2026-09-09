import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Testimonials from "../components/sections/Testimonials";

describe("Testimonials component", () => {
  it("renders star rating with role='img' and accessible label", () => {
    render(<Testimonials />);
    const ratingGroup = screen.getAllByRole("img", { name: "5 out of 5 stars" });
    expect(ratingGroup.length).toBeGreaterThan(0);
  });

  it("renders quote paragraphs and author names with dir='auto' for bidirectional text support", () => {
    render(<Testimonials />);
    const quotes = screen.getAllByText(/A top-tier software partner!|بصراحة التعامل مع الشركة/i);
    expect(quotes.length).toBeGreaterThan(0);
    quotes.forEach((quote) => {
      expect(quote).toHaveAttribute("dir", "auto");
    });
  });
});
