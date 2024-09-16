import { Link } from "react-router-dom";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Button } from "./ui/button";
import { File } from "lucide-react";

const routes: Record<string, string> = {
  Home: "",
  About: "about",
  Contact: "contact",
};

const Header = () => {
  const handleLogoClick = () => {};

  return (
    <header className="w-full flex gap-4 justify-between items-center p-4  ">
      <File className="curosor-pointer" onClick={() => handleLogoClick()} />
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
