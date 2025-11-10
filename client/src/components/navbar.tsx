import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState, useEffect } from "react";
import { PSWLogo } from "./psw-logo";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  // Smooth scroll function for home page sections
  const scrollToSection = (id: string) => {
    if (location !== "/") {
      // If not on home page, navigate to home first
      window.location.href = `/#${id}`;
      return;
    }
    
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handle "Schedule a Call" button click - scroll to contact form
  const handleScheduleCall = () => {
    scrollToSection("contact");
    setOpen(false);
  };

  const links = [
    { id: null, href: "/", label: "Home" },
    { id: "about", href: "/", label: "About" },
    { id: "work", href: "/", label: "Work" },
    { id: "services", href: "/", label: "Services" },
    { id: "contact", href: "/", label: "Contact" },
    { id: null, href: "/careers", label: "Careers" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center hover:opacity-90 transition-opacity cursor-pointer">
            <PSWLogo />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <div key={link.label}>
              {link.id ? (
                <span
                  className="text-[#101820]/80 hover:text-[#101820] transition-colors cursor-pointer"
                  onClick={() => scrollToSection(link.id as string)}
                >
                  {link.label}
                </span>
              ) : (
                <Link
                  href={link.href}
                  className="text-[#101820]/80 hover:text-[#101820] transition-colors cursor-pointer"
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Navigation */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col gap-4 mt-8">
              {links.map((link) => (
                <div key={link.label}>
                  {link.id ? (
                    <span
                      className="text-[#101820]/80 hover:text-[#101820] transition-colors cursor-pointer"
                      onClick={() => {
                        scrollToSection(link.id as string);
                        setOpen(false);
                      }}
                    >
                      {link.label}
                    </span>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-[#101820]/80 hover:text-[#101820] transition-colors cursor-pointer"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <Button 
                className="w-full bg-[#4ACB6B] hover:bg-[#42b863] text-white"
                onClick={handleScheduleCall}
              >
                Schedule a Call
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}