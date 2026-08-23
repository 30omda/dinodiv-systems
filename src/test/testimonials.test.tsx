import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Testimonials from "@/components/sections/Testimonials";

describe("Testimonials component", () => {
  it("renders accessible star ratings and quotes", () => {
    render(<Testimonials />);

    // Check for accessible role and label on star ratings container
    const starContainers = screen.getAllByRole("img", { name: /5 out of 5 stars/i });
    expect(starContainers.length).toBeGreaterThan(0);

    // Verify quote text elements have dir="auto" attribute
    const quotes = screen.getAllByText(/"/i, { exact: false });
    expect(quotes.length).toBeGreaterThan(0);
    quotes.forEach((quote) => {
      expect(quote).toHaveAttribute("dir", "auto");
    });
  });
});
