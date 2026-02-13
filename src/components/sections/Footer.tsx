import { Link } from "react-router-dom";
import dinoLogo from "@/assets/dino-logo-dark.png";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <div className="flex items-center gap-3">
          <img src={dinoLogo} alt="DinoDiv" className="h-28 w-auto" />
        </div>
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link to="/terms" className="transition-colors hover:text-primary">
              Terms & Conditions
            </Link>
            <Link to="/privacy" className="transition-colors hover:text-primary">
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
