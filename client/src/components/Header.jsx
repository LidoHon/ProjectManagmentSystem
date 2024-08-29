import logo from "../assets/logo.png";
const Header = () => {
  return (
    <nav className="navbar bg-light mb-2 p-0">
      <div className="conatiner">
        <a className="navbar-brand " href="/">
          <div className="d-flex pt-2">
            <img src={logo} alt="logo" />
            <div>Project Management</div>
          </div>
        </a>
      </div>
    </nav>
  );
};

export default Header;
