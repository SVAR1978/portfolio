const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16 text-center">
        <p className="text-sm text-white/40 font-body font-light">
          © {currentYear} Vikash. Built with React & Framer Motion.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
