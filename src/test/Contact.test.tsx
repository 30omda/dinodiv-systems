import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Contact from "../components/sections/Contact";

describe("Contact component", () => {
  it("renders interactive contact links for email, WhatsApp, and calendar booking", () => {
    render(<Contact />);

    // Email link
    const emailLink = screen.getByRole("link", { name: "contact@dinodiv.info" });
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute("href", "mailto:contact@dinodiv.info");
    expect(emailLink).toHaveClass("focus-visible:ring-2");

    // WhatsApp links
    const whatsapp1 = screen.getByRole("link", { name: "+201028661605" });
    expect(whatsapp1).toBeInTheDocument();
    expect(whatsapp1).toHaveAttribute("href", "https://wa.me/201028661605");
    expect(whatsapp1).toHaveClass("focus-visible:ring-2");

    const whatsapp2 = screen.getByRole("link", { name: "+201125011939" });
    expect(whatsapp2).toBeInTheDocument();
    expect(whatsapp2).toHaveAttribute("href", "https://wa.me/201125011939");
    expect(whatsapp2).toHaveClass("focus-visible:ring-2");

    // Book a Meeting link
    const calendarLink = screen.getByRole("link", { name: "Let's Talk →" });
    expect(calendarLink).toBeInTheDocument();
    expect(calendarLink).toHaveAttribute("href", "https://cal.com/diodiv");
    expect(calendarLink).toHaveClass("focus-visible:ring-2");
  });
});
