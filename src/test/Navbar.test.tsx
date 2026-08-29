import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Navbar from "@/components/sections/Navbar";

describe("Navbar Component", () => {
  it("renders a skip to main content link targeting #main-content", () => {
    render(<Navbar />);
    const skipLink = screen.getByRole("link", { name: /skip to main content/i });
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute("href", "#main-content");
  });
});
