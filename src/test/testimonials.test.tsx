import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Testimonials from "../components/sections/Testimonials";

describe("Testimonials component", () => {
  it("renders star ratings with accessible ARIA label and role", () => {
    render(<Testimonials />);
    const starGroups = screen.getAllByRole("img", { name: "5 out of 5 stars" });
    expect(starGroups.length).toBeGreaterThan(0);
    expect(starGroups[0]).toBeInTheDocument();
  });

  it("renders quotes with dir='auto' attribute", () => {
    render(<Testimonials />);
    const quoteParagraph = screen.getByText(/A top-tier software partner!/);
    expect(quoteParagraph).toHaveAttribute("dir", "auto");
  });
});
