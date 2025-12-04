import "./NavBar.scss";
import Image from "next/image";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Image src="/logo.svg" alt="logo" width={50} height={50} />
      </div>
      <div className="nav-right">
        <a href="#">About</a>
        <a href="#">Projects</a>
        <a href="#">Services</a>
      </div>
    </nav>
  );
}
