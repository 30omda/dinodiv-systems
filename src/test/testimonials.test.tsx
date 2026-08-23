import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import Testimonials from "../components/sections/Testimonials";

describe("Testimonials component", () => {
  test("renders star ratings with proper accessibility attributes", () => {
    render(<Testimonials />);
    const starContainers = screen.getAllByRole("img", { name: /out of 5 stars/i });
    expect(starContainers.length).toBeGreaterThan(0);
    expect(starContainers[0]).toHaveAttribute("aria-label", "5 out of 5 stars");
  });

  test("renders testimonial quotes with dir='auto' for text direction support", () => {
    render(<Testimonials />);
    const quotes = screen.getAllByText(/"/i, { exact: false });
    const paragraphQuotes = quotes.filter((el) => el.tagName === "P");
    expect(paragraphQuotes.length).toBeGreaterThan(0);
    paragraphQuotes.forEach((p) => {
      expect(p).toHaveAttribute("dir", "auto");
    });
  });
});
