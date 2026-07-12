import { Link } from "react-router-dom";
import dinoLogo from "@/assets/dino-logo-dark.png";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <div className="flex items-center gap-3">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md transition-all"
            aria-label="DinoDiv - Back to top"
          >
            <img src={dinoLogo} alt="DinoDiv — Web Development Company" className="h-28 w-auto" />
          </a>
        </div>
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link
              to="/terms"
              className="transition-all hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md px-1 -ml-1"
            >
              Terms & Conditions
            </Link>
            <Link
              to="/privacy"
              className="transition-all hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md px-1 -ml-1"
            >
              Privacy Policy
            </Link>
          </div>
          <span className="hidden h-4 w-px bg-border sm:block" />
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} DinoDiv. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
