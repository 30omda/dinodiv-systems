import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import TeamCard from "../components/team/TeamCard";

describe("TeamCard", () => {
  const mockMember = {
    id: "1",
    name: "John Doe",
    role: "Lead Engineer",
    description: "Building scalable web systems.",
    image: "/images/john.jpg",
    linkedin: "https://linkedin.com/in/johndoe",
    github: "https://github.com/johndoe",
    portfolio: "https://johndoe.com",
  };

  it("renders member info and accessible social media links with focus ring styles", () => {
    render(<TeamCard member={mockMember} index={0} />);

    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Lead Engineer")).toBeInTheDocument();

    const linkedinLink = screen.getByRole("link", { name: "John Doe LinkedIn" });
    const githubLink = screen.getByRole("link", { name: "John Doe GitHub" });
    const portfolioLink = screen.getByRole("link", { name: "John Doe Portfolio" });

    expect(linkedinLink).toBeInTheDocument();
    expect(githubLink).toBeInTheDocument();
    expect(portfolioLink).toBeInTheDocument();

    expect(linkedinLink).toHaveClass("focus-visible:ring-2");
    expect(linkedinLink).toHaveClass("focus-visible:ring-primary");
    expect(githubLink).toHaveClass("focus-visible:ring-2");
    expect(portfolioLink).toHaveClass("focus-visible:ring-2");
  });
});
