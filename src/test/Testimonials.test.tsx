import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Testimonials from "../components/sections/Testimonials";

describe("Testimonials Component", () => {
  it("renders star ratings with accessible ARIA label and role", () => {
    render(<Testimonials />);
    const starContainers = screen.getAllByRole("img", { name: "5 out of 5 stars" });
    expect(starContainers.length).toBeGreaterThan(0);
  });

  it("sets dir='auto' on testimonial quotes for multilingual support", () => {
    render(<Testimonials />);
    const quotes = screen.getAllByText(/"/i);
    quotes.forEach((quote) => {
      expect(quote).toHaveAttribute("dir", "auto");
    });
  });
});
