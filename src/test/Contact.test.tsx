import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Contact from "@/components/sections/Contact";

// Mock formspree to avoid network/state issues during component render testing
vi.mock("@formspree/react", () => ({
  useForm: () => [{ submitting: false, succeeded: false, errors: [] }, vi.fn()],
  ValidationError: () => null,
}));

describe("Contact component", () => {
  it("renders interactive contact links for Email and WhatsApp with correct ARIA labels", () => {
    render(<Contact />);

    const emailLink = screen.getByRole("link", {
      name: "Send email to contact@dinodiv.info",
    });
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute("href", "mailto:contact@dinodiv.info");

    const whatsappLink1 = screen.getByRole("link", {
      name: "Chat on WhatsApp with +201028661605",
    });
    expect(whatsappLink1).toBeInTheDocument();
    expect(whatsappLink1).toHaveAttribute("href", "https://wa.me/201028661605");

    const whatsappLink2 = screen.getByRole("link", {
      name: "Chat on WhatsApp with +201125011939",
    });
    expect(whatsappLink2).toBeInTheDocument();
    expect(whatsappLink2).toHaveAttribute("href", "https://wa.me/201125011939");
  });
});
