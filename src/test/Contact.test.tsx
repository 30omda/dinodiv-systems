import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Contact from "@/components/sections/Contact";

describe("Contact Section Links", () => {
  it("renders interactive mailto link for email", () => {
    render(<Contact />);
    const emailLink = screen.getByRole("link", { name: "contact@dinodiv.info" });
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute("href", "mailto:contact@dinodiv.info");
  });

  it("renders interactive WhatsApp links with accessible labels and attributes", () => {
    render(<Contact />);
    const waLink1 = screen.getByRole("link", {
      name: "Chat on WhatsApp with +201028661605",
    });
    expect(waLink1).toBeInTheDocument();
    expect(waLink1).toHaveAttribute("href", "https://wa.me/201028661605");
    expect(waLink1).toHaveAttribute("target", "_blank");
    expect(waLink1).toHaveAttribute("rel", "noopener noreferrer");

    const waLink2 = screen.getByRole("link", {
      name: "Chat on WhatsApp with +201125011939",
    });
    expect(waLink2).toBeInTheDocument();
    expect(waLink2).toHaveAttribute("href", "https://wa.me/201125011939");
    expect(waLink2).toHaveAttribute("target", "_blank");
    expect(waLink2).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders interactive meeting booking link", () => {
    render(<Contact />);
    const meetingLink = screen.getByRole("link", { name: /Let's Talk/i });
    expect(meetingLink).toBeInTheDocument();
    expect(meetingLink).toHaveAttribute("href", "https://cal.com/diodiv");
    expect(meetingLink).toHaveAttribute("target", "_blank");
    expect(meetingLink).toHaveAttribute("rel", "noopener noreferrer");
  });
});
