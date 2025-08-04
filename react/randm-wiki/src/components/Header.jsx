const Header = () => {
  return (
    <div className="header">
      <img src="https://images.wallpapersden.com/image/download/rick-and-morty-space_a2VlbGaUmZqaraWkpJRmaGhrrWxrbQ.jpg" />
      <div className="header-text">
        <h1>Rick & Morty</h1>
        <p>Welcome to the Rick & Morty universe!</p>
        <ul>
          <li>
            <a href="/characters">Characters</a>
          </li>
          <li>
            <a href="/episodes">Episodes</a>
          </li>
          <li>
            <a href="/locations">Locations</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
