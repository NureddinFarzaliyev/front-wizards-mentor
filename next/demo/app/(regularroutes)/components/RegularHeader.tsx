const RegularHeader = () => {
  const links = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
    { title: "Admin", href: "/admin" },
  ];

  return (
    <div className="bg-gray-800 py-4 px-8 flex justify-between">
      <h1>LOGO</h1>
      <nav className="space-x-4">
        {links.map((link, idx) => (
          <a
            key={idx}
            href={link.href}
            className="hover:text-gray-400 hover:font-bold"
          >
            {link.title}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default RegularHeader;
