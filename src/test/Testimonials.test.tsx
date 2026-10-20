import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Testimonials from "@/components/sections/Testimonials";

describe("Testimonials component", () => {
  it("renders accessible star rating group with aria-label", () => {
    render(<Testimonials />);
    const starGroups = screen.getAllByRole("img", { name: "5 out of 5 stars" });
    expect(starGroups.length).toBe(3);
  });

  it("adds dir='auto' attribute to quote paragraphs for text directionality", () => {
    render(<Testimonials />);
    const quotes = screen.getAllByText(/"/);
    quotes.forEach((quote) => {
      expect(quote.getAttribute("dir")).toBe("auto");
    });
  });
});
