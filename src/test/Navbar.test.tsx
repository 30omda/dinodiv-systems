import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Navbar from "@/components/sections/Navbar";

describe("Navbar Accessibility", () => {
  it("renders a skip to content link targeting #main-content", () => {
    render(<Navbar />);
    const skipLink = screen.getByRole("link", { name: /skip to main content/i });
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute("href", "#main-content");
    expect(skipLink.className).toContain("sr-only");
    expect(skipLink.className).toContain("focus:not-sr-only");
  });
});
