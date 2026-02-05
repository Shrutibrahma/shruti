
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-8 px-6 text-center md:text-left">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-muted-foreground mb-4 md:mb-0">
          &copy; {currentYear} Shruti Brahma. All rights reserved.
        </p>

        <div className="flex space-x-6">
          <a
            href="https://github.com/shrutibrahma1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors text-sm"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/shrutibrahma"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors text-sm"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
