import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Testimonials from "../components/sections/Testimonials";

describe("Testimonials component", () => {
  it("renders star ratings with role='img' and proper aria-label", () => {
    render(<Testimonials />);
    const starGroups = screen.getAllByRole("img", { name: /5 out of 5 stars/i });
    expect(starGroups.length).toBeGreaterThan(0);
  });
});
