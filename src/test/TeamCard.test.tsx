import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import TeamCard from "@/components/team/TeamCard";
import type { TeamMember } from "@/types/team";

describe("TeamCard", () => {
  const mockMember: TeamMember = {
    name: "Jane Doe",
    role: "Senior Engineer",
    description: "Passionate developer creating delightful user experiences.",
    linkedin: "https://linkedin.com/in/janedoe",
    github: "https://github.com/janedoe",
    portfolio: "https://janedoe.dev",
  };

  it("renders member details and accessible social links with focus rings", () => {
    render(<TeamCard member={mockMember} index={0} />);

    expect(screen.getByText("Jane Doe")).toBeInTheDocument();
    expect(screen.getByText("Senior Engineer")).toBeInTheDocument();

    const linkedinLink = screen.getByRole("link", { name: "Jane Doe LinkedIn" });
    const githubLink = screen.getByRole("link", { name: "Jane Doe GitHub" });
    const portfolioLink = screen.getByRole("link", { name: "Jane Doe Portfolio" });

    expect(linkedinLink).toBeInTheDocument();
    expect(githubLink).toBeInTheDocument();
    expect(portfolioLink).toBeInTheDocument();

    expect(linkedinLink.className).toContain("focus-visible:ring-2");
    expect(linkedinLink.className).toContain("focus-visible:ring-primary");
    expect(githubLink.className).toContain("focus-visible:ring-2");
    expect(githubLink.className).toContain("focus-visible:ring-primary");
    expect(portfolioLink.className).toContain("focus-visible:ring-2");
    expect(portfolioLink.className).toContain("focus-visible:ring-primary");
  });
});
