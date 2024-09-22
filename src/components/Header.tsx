import { Link, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  return (
    <header className="w-full flex gap-4 justify-between items-center p-4 ">
      <img
        src={Logo}
        alt="logo"
        onClick={() => navigate("/")}
        className="cursor-pointer"
      />
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
