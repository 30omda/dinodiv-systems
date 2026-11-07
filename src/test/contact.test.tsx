import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Contact from "@/components/sections/Contact";

describe("Contact component", () => {
  it("renders interactive email and WhatsApp links with correct attributes", () => {
    render(<Contact />);

    const emailLink = screen.getByRole("link", { name: "contact@dinodiv.info" });
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute("href", "mailto:contact@dinodiv.info");

    const wa1 = screen.getByRole("link", { name: "Chat on WhatsApp with +201028661605" });
    expect(wa1).toBeInTheDocument();
    expect(wa1).toHaveAttribute("href", "https://wa.me/201028661605");
    expect(wa1).toHaveAttribute("target", "_blank");
    expect(wa1).toHaveAttribute("rel", "noopener noreferrer");

    const wa2 = screen.getByRole("link", { name: "Chat on WhatsApp with +201125011939" });
    expect(wa2).toBeInTheDocument();
    expect(wa2).toHaveAttribute("href", "https://wa.me/201125011939");
    expect(wa2).toHaveAttribute("target", "_blank");
    expect(wa2).toHaveAttribute("rel", "noopener noreferrer");

    const meetingLink = screen.getByRole("link", { name: /Let's Talk/i });
    expect(meetingLink).toBeInTheDocument();
    expect(meetingLink).toHaveAttribute("href", "https://cal.com/diodiv");
  });
});
