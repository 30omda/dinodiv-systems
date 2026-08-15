import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import TeamCard from "@/components/team/TeamCard";
import type { TeamMember } from "@/types/team";

describe("TeamCard", () => {
  const mockMember: TeamMember = {
    name: "Jane Doe",
    role: "Fullstack Engineer",
    description: "Building scalable web apps.",
    linkedin: "https://linkedin.com/in/janedoe",
    github: "https://github.com/janedoe",
    portfolio: "https://janedoe.dev",
  };

  it("renders social links with accessible aria-labels and focus ring classes", () => {
    render(<TeamCard member={mockMember} index={0} />);

    const linkedinLink = screen.getByRole("link", { name: "Jane Doe LinkedIn" });
    const githubLink = screen.getByRole("link", { name: "Jane Doe GitHub" });
    const portfolioLink = screen.getByRole("link", { name: "Jane Doe Portfolio" });

    expect(linkedinLink).toBeInTheDocument();
    expect(githubLink).toBeInTheDocument();
    expect(portfolioLink).toBeInTheDocument();

    expect(linkedinLink.className).toContain("focus-visible:ring-primary");
    expect(githubLink.className).toContain("focus-visible:ring-primary");
    expect(portfolioLink.className).toContain("focus-visible:ring-primary");
  });
});
