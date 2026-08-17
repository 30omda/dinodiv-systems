import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import TeamCard from "@/components/team/TeamCard";

describe("TeamCard component", () => {
  const mockMember = {
    id: "1",
    name: "John Doe",
    role: "Lead Developer",
    description: "Full stack engineer specializing in scalability.",
    linkedin: "https://linkedin.com/in/johndoe",
    github: "https://github.com/johndoe",
    portfolio: "https://johndoe.com",
  };

  it("renders social links with appropriate ARIA labels and focus ring classes", () => {
    render(<TeamCard member={mockMember} index={0} />);

    const linkedinLink = screen.getByRole("link", { name: "John Doe LinkedIn" });
    const githubLink = screen.getByRole("link", { name: "John Doe GitHub" });
    const portfolioLink = screen.getByRole("link", { name: "John Doe Portfolio" });

    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveClass("focus-visible:ring-2");
    expect(linkedinLink).toHaveClass("focus-visible:ring-primary");

    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveClass("focus-visible:ring-2");
    expect(githubLink).toHaveClass("focus-visible:ring-primary");

    expect(portfolioLink).toBeInTheDocument();
    expect(portfolioLink).toHaveClass("focus-visible:ring-2");
    expect(portfolioLink).toHaveClass("focus-visible:ring-primary");
  });
});
