import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import TeamCard from "@/components/team/TeamCard";

describe("TeamCard", () => {
  const member = {
    name: "Mohamed Emad",
    role: "Frontend Engineer",
    description: "Frontend Engineer specializing in building user-friendly applications.",
    linkedin: "https://www.linkedin.com/in/mohamed-shamseldeen/",
    github: "https://github.com/30omda",
    portfolio: "https://30omda.vercel.app/",
  };

  it("renders social links with focus-visible styling and proper aria-labels", () => {
    render(<TeamCard member={member} index={0} />);

    const linkedin = screen.getByRole("link", { name: "Mohamed Emad LinkedIn" });
    const github = screen.getByRole("link", { name: "Mohamed Emad GitHub" });
    const portfolio = screen.getByRole("link", { name: "Mohamed Emad Portfolio" });

    expect(linkedin).toBeInTheDocument();
    expect(github).toBeInTheDocument();
    expect(portfolio).toBeInTheDocument();

    expect(linkedin).toHaveClass("focus-visible:outline-none");
    expect(linkedin).toHaveClass("focus-visible:ring-2");
    expect(linkedin).toHaveClass("focus-visible:ring-primary");

    expect(github).toHaveClass("focus-visible:outline-none");
    expect(github).toHaveClass("focus-visible:ring-2");
    expect(github).toHaveClass("focus-visible:ring-primary");

    expect(portfolio).toHaveClass("focus-visible:outline-none");
    expect(portfolio).toHaveClass("focus-visible:ring-2");
    expect(portfolio).toHaveClass("focus-visible:ring-primary");
  });
});
