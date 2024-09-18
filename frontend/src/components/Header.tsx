import { Link } from "react-router-dom";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Button } from "./ui/button";
import Logo from "../assets/react.svg";

const routes: Record<string, string> = {
  Home: "",
  About: "about",
  Contact: "contact",
  Workbench: "workbench",
};

const Header = () => {
  const handleLogoClick = () => {};

  return (
    <header className="w-full flex gap-4 justify-between items-center p-4 ">
      {/* <File onClick={() => handleLogoClick()} /> */}
      <img src={Logo} alt="logo" />
      <nav className="flex gap-4">
        {Object.entries(routes).map(([name, path]) => (
          <Link to={path} key={name}>
            <Button variant="outline">{name}</Button>
          </Link>
        ))}
      </nav>
      <section>
        <ModeToggle />
      </section>
    </header>
  );
};

export default Header;
