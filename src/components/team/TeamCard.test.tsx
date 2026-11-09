import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import TeamCard from "./TeamCard";
import type { TeamMember } from "@/types/team";

describe("TeamCard", () => {
  const mockMember: TeamMember = {
    name: "Mohamed Emad",
    role: "Frontend Engineer",
    description: "Frontend Engineer specializing in building user-friendly and responsive web applications.",
    linkedin: "https://www.linkedin.com/in/mohamed-shamseldeen/",
    github: "https://github.com/30omda",
    portfolio: "https://30omda.vercel.app/",
  };

  it("renders social links with accessible aria labels and focus-visible styling", () => {
    render(<TeamCard member={mockMember} index={0} />);

    const linkedinLink = screen.getByRole("link", { name: "Mohamed Emad LinkedIn" });
    const githubLink = screen.getByRole("link", { name: "Mohamed Emad GitHub" });
    const portfolioLink = screen.getByRole("link", { name: "Mohamed Emad Portfolio" });

    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute("href", mockMember.linkedin);
    expect(linkedinLink).toHaveClass("focus-visible:ring-2");
    expect(linkedinLink).toHaveClass("focus-visible:ring-primary");

    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute("href", mockMember.github);
    expect(githubLink).toHaveClass("focus-visible:ring-2");
    expect(githubLink).toHaveClass("focus-visible:ring-primary");

    expect(portfolioLink).toBeInTheDocument();
    expect(portfolioLink).toHaveAttribute("href", mockMember.portfolio);
    expect(portfolioLink).toHaveClass("focus-visible:ring-2");
    expect(portfolioLink).toHaveClass("focus-visible:ring-primary");
  });
});
