import dinoLogo from "@/assets/dino-logo-dark.png";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <div className="flex items-center gap-3">
          <img src={dinoLogo} alt="DinoDiv" className="h-8 w-auto" />
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} DinoDiv. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
