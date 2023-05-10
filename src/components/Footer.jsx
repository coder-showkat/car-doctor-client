import logo from "../assets/logo 2.svg";
const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content">
      <div className="container mx-auto px-4 footer py-10">
        <div>
          <img src={logo} alt="logo" className="w-20 xl:w-24" />
          <p>
            Edwin Diaz is a software and web <br /> technologies engineer, a
            life coach <br />
            trainer who is also a serial .
          </p>
        </div>
        <div>
          <span className="footer-title text-white opacity-100">About</span>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Service</a>
          <a className="link link-hover">Contact</a>
        </div>
        <div>
          <span className="footer-title text-white opacity-100">Company</span>
          <a className="link link-hover">Why Car Doctor</a>
          <a className="link link-hover">About</a>
        </div>
        <div>
          <span className="footer-title text-white opacity-100">Support</span>
          <a className="link link-hover">Support Center</a>
          <a className="link link-hover">Feedback</a>
          <a className="link link-hover">Accessibility</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
