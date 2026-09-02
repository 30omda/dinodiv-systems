import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Testimonials from "../components/sections/Testimonials";

describe("Testimonials component", () => {
  it("renders star rating with accessible role and label", () => {
    render(<Testimonials />);
    const starRatings = screen.getAllByRole("img", { name: "5 out of 5 stars" });
    expect(starRatings.length).toBeGreaterThan(0);
  });

  it("renders quotes and names with dir='auto' for bidirectional text support", () => {
    render(<Testimonials />);
    const englishQuote = screen.getByText(/A top-tier software partner!/);
    expect(englishQuote).toHaveAttribute("dir", "auto");

    const arabicName = screen.getByText("م. أحمد ممدوح");
    expect(arabicName).toHaveAttribute("dir", "auto");
  });
});
