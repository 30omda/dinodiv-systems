import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Testimonials from "../components/sections/Testimonials";

describe("Testimonials component", () => {
  it("renders accessible star ratings with role='img' and aria-label", () => {
    render(<Testimonials />);
    const starGroups = screen.getAllByRole("img", { name: "5 out of 5 stars" });
    expect(starGroups.length).toBeGreaterThan(0);
    expect(starGroups[0]).toBeInTheDocument();
  });

  it("renders quote paragraphs with dir='auto' for bidirectional text support", () => {
    render(<Testimonials />);
    const quoteParagraphs = screen.getAllByText(/"/);
    expect(quoteParagraphs.length).toBeGreaterThan(0);
    quoteParagraphs.forEach((p) => {
      expect(p).toHaveAttribute("dir", "auto");
    });
  });
});
