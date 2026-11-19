import logo from "../assets/logo.png";

function NavBar() {
  return (
    <nav className="menu">
      <div className="logo">
        <img src={logo} alt="Logo Nike Inspired" />
      </div>
      <ul className="nav-links">
        <li>
          <a href="#home">Accueil</a>
        </li>
        <li>
          <a href="#form">Formulaire</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;