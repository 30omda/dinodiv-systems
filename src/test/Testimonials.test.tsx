import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Testimonials from "@/components/sections/Testimonials";

describe("Testimonials component", () => {
  it("renders heading and section description", () => {
    render(<Testimonials />);
    expect(screen.getByText(/What Our/i)).toBeInTheDocument();
    expect(screen.getByText(/Clients/i)).toBeInTheDocument();
  });

  it("renders accessible star rating group with role='img' and aria-label", () => {
    render(<Testimonials />);
    const starGroups = screen.getAllByRole("img", { name: "5 out of 5 stars" });
    expect(starGroups.length).toBeGreaterThan(0);
  });

  it("renders quote blocks with dir='auto' for bidirectional text support", () => {
    render(<Testimonials />);
    const quotes = screen.getAllByRole("blockquote");
    expect(quotes.length).toBe(3);
    quotes.forEach((quote) => {
      expect(quote).toHaveAttribute("dir", "auto");
    });
  });
});
