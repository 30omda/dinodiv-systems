import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Testimonials from "../components/sections/Testimonials";

describe("Testimonials component", () => {
  it("renders star rating containers with role img and proper aria-label", () => {
    render(<Testimonials />);
    const starRatings = screen.getAllByRole("img", { name: "5 out of 5 stars" });
    expect(starRatings.length).toBeGreaterThan(0);
    expect(starRatings[0]).toBeInTheDocument();
  });

  it("renders quotes and client names with dir=auto for RTL support", () => {
    render(<Testimonials />);
    const arabicQuote = screen.getByText(/بصراحة التعامل مع الشركة/i);
    expect(arabicQuote).toHaveAttribute("dir", "auto");

    const arabicAuthor = screen.getByText(/م. أحمد ممدوح/i);
    expect(arabicAuthor).toHaveAttribute("dir", "auto");
  });
});
