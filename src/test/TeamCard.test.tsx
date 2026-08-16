import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import TeamCard from "@/components/team/TeamCard";

describe("TeamCard component", () => {
  const member = {
    name: "Mohamed Emad",
    role: "Frontend Engineer",
    description: "Frontend Engineer specializing in user-friendly web applications.",
    linkedin: "https://linkedin.com/in/test",
    github: "https://github.com/test",
    portfolio: "https://portfolio.test",
  };

  it("renders member details and social links with focus ring styling", () => {
    render(<TeamCard member={member} index={0} />);

    expect(screen.getByText("Mohamed Emad")).toBeInTheDocument();
    expect(screen.getByText("Frontend Engineer")).toBeInTheDocument();

    const linkedinLink = screen.getByRole("link", { name: "Mohamed Emad LinkedIn" });
    const githubLink = screen.getByRole("link", { name: "Mohamed Emad GitHub" });
    const portfolioLink = screen.getByRole("link", { name: "Mohamed Emad Portfolio" });

    expect(linkedinLink).toHaveAttribute("href", "https://linkedin.com/in/test");
    expect(githubLink).toHaveAttribute("href", "https://github.com/test");
    expect(portfolioLink).toHaveAttribute("href", "https://portfolio.test");

    expect(linkedinLink.className).toContain("focus-visible:ring-2");
    expect(githubLink.className).toContain("focus-visible:ring-2");
    expect(portfolioLink.className).toContain("focus-visible:ring-2");
  });
});
