
import logo from '../assets/logo.png'
const Footer = () => {
  return (
    <div>
        <div className="conatiner">
        <a className="navbar-brand " href="/">
          <div className="d-flex pt-2">
            <img src={logo} alt="logo" />
            <div>Project Management</div>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Footer