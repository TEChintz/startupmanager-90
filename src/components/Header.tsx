
import { Link } from "react-router-dom";
import { Home, Info, Phone, ScrollText, Menu } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "./ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";

const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    name: "Services",
    link: "/services",
    icon: <ScrollText className="h-4 w-4" />,
  },
  {
    name: "About",
    link: "/about",
    icon: <Info className="h-4 w-4" />,
  },
  {
    name: "Contact",
    link: "/contact",
    icon: <Phone className="h-4 w-4" />,
  },
];

export const Header = () => {
  const isMobile = useIsMobile();

  return (
    <header className="fixed top-0 left-0 right-0 bg-black/50 backdrop-blur-md border-b border-white/10 z-50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16 px-4">
          <Link to="/" className="text-xl font-bold" style={{ color: '#375CE1' }}>
            StartUp Manager
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                className="text-gray-300 hover:text-[#375CE1] transition-colors flex items-center gap-2"
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {isMobile && (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6 text-white" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[80vw] bg-black/95 border-white/10 p-6">
                <nav className="flex flex-col space-y-6 mt-6">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.link}
                      className="text-gray-300 hover:text-[#375CE1] transition-colors flex items-center gap-3 text-lg"
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  );
};
