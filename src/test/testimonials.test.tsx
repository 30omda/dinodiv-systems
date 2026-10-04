import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Testimonials from "../components/sections/Testimonials";

describe("Testimonials component accessibility", () => {
  it("renders star rating with proper role and aria-label", () => {
    render(<Testimonials />);
    const ratingElements = screen.getAllByRole("img", { name: "5 out of 5 stars" });
    expect(ratingElements.length).toBeGreaterThan(0);
    expect(ratingElements[0]).toBeInTheDocument();
  });
});
