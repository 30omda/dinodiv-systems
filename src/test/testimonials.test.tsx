import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Testimonials from "@/components/sections/Testimonials";

describe("Testimonials component", () => {
  it("renders star rating with proper accessible role and label", () => {
    render(<Testimonials />);
    const starContainers = screen.getAllByRole("img", { name: "5 out of 5 stars" });
    expect(starContainers.length).toBe(3);
  });

  it("renders quote paragraphs with dir='auto' for proper text directionality", () => {
    render(<Testimonials />);
    const quoteElements = screen.getAllByText(/^".*"$/s);
    expect(quoteElements.length).toBeGreaterThan(0);
    quoteElements.forEach((el) => {
      expect(el).toHaveAttribute("dir", "auto");
    });
  });
});
