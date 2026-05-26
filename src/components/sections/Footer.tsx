const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-sm text-muted-foreground">
          © {currentYear} Vikash. Built with React.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
