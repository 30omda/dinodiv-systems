import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Testimonials from "../components/sections/Testimonials";

describe("Testimonials component", () => {
  it("renders star ratings with accessible roles and labels", () => {
    render(<Testimonials />);
    const ratingContainers = screen.getAllByRole("img", { name: "5 out of 5 stars" });
    expect(ratingContainers.length).toBeGreaterThan(0);
  });

  it("renders quote paragraphs with dir='auto' attribute", () => {
    render(<Testimonials />);
    const quotes = screen.getAllByText(/".*"/);
    expect(quotes.length).toBeGreaterThan(0);
    quotes.forEach((quote) => {
      expect(quote).toHaveAttribute("dir", "auto");
    });
  });
});
