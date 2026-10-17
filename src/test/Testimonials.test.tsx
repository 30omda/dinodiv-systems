import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Testimonials from "../components/sections/Testimonials";

describe("Testimonials accessibility", () => {
  it("renders star ratings with role='img' and aria-label", () => {
    render(<Testimonials />);
    const starGroups = screen.getAllByRole("img", { name: /5 out of 5 stars/i });
    expect(starGroups.length).toBeGreaterThan(0);
  });

  it("renders quote paragraphs with dir='auto' for bidirectional text support", () => {
    render(<Testimonials />);
    const quotes = screen.getAllByText(/"/i);
    const quoteParagraphs = quotes.filter((el) => el.tagName === "P");
    expect(quoteParagraphs.length).toBe(3);
    quoteParagraphs.forEach((p) => {
      expect(p).toHaveAttribute("dir", "auto");
    });
  });
});
