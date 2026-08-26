import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Testimonials from "@/components/sections/Testimonials";

describe("Testimonials component", () => {
  it("renders star rating containers with role img and aria-label", () => {
    render(<Testimonials />);
    const starContainers = screen.getAllByRole("img", { name: "5 out of 5 stars" });
    expect(starContainers.length).toBeGreaterThan(0);
  });

  it("renders quote paragraphs with dir='auto'", () => {
    render(<Testimonials />);
    const quotes = screen.getAllByText(/"/);
    expect(quotes.length).toBeGreaterThan(0);
    quotes.forEach((quote) => {
      expect(quote.getAttribute("dir")).toBe("auto");
    });
  });
});
