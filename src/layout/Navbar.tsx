"use client";
import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag, Heart, User, Calendar, SearchIcon } from "lucide-react";
import Link from "next/link";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import { TbMenu2 } from "react-icons/tb";
import { HiOutlineCalendarDays } from "react-icons/hi2";

const navItems: NavItem[] = [
  {
    label: "JEWELRY",
    url: "/jewelry",
    children: [
      { label: "Rings", url: "/jewelry/rings" },
      { label: "Necklaces", url: "/jewelry/necklaces" },
      { label: "Bracelets", url: "/jewelry/bracelets" },
      { label: "Earrings", url: "/jewelry/earrings" },
    ],
  },
  {
    label: "LOVE AND ENGAGEMENT",
    url: "/love-and-engagement",
    children: [
      { label: "Engagement Rings", url: "/love-and-engagement/engagement-rings" },
      { label: "Wedding Bands", url: "/love-and-engagement/wedding-bands" },
      { label: "Couples Jewelry", url: "/love-and-engagement/couples-jewelry" },
    ],
  },
  {
    label: "GIFTS",
    url: "/gifts",
    children: [
      { label: "Birthday", url: "/gifts/birthday" },
      { label: "Anniversary", url: "/gifts/anniversary" },
      { label: "Holiday", url: "/gifts/holiday" },
    ],
  },
  {
    label: "CUSTOM JEWELRY",
    url: "/custom-jewelry",
  },
  {
    label: "ABOUT",
    url: "/about",
  },
  {
    label: "CONTACT US",
    url: "/contact",
  },
];

// Main navbar component
const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [showAnnouncement, setShowAnnouncement] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  useEffect(() => {
    const handleResize = (): void => {
      setIsMobile(window.innerWidth < 1024);
    };

    const handleScroll = (): void => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 10);

      if (currentScrollY <= 0) {
        setShowAnnouncement(true);
      } else if (currentScrollY > lastScrollY) {
        setShowAnnouncement(false);
      }

      setLastScrollY(currentScrollY);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <div className="sticky top-0 z-50 w-full">
        <div
          className={`bg-background flex mx-auto px-16 justify-between items-center py-1 text-center text-sm overflow-hidden transition-all duration-300 ease-in-out border-b border-border`}
        >
          <a
            href="/book"
            className="hidden text-sm lg:flex items-center gap-3 text-foreground hover:text-muted-foreground px-4 py-2"
          >
            <HiOutlineCalendarDays size={20} className="text-foreground" />
            BOOK AN APPOINTMENT
          </a>
          <p className="flex justify-center text-xs items-center text-muted-foreground">
            <span className="mx-2">•</span>
            <span>Exclusive Collection Launch: Discover Timeless Elegance Today</span>
            <span className="mx-2">•</span>
          </p>
          <div className="hidden lg:flex items-center space-x-4 ml-4">
            <a href="/account" className="text-foreground hover:text-muted-foreground">
              <User size={20} />
            </a>
            <a href="/wishlist" className="text-foreground hover:text-muted-foreground">
              <Heart size={20} />
            </a>
            <a href="/cart" className="text-foreground hover:text-muted-foreground">
              <ShoppingBag size={20} />
            </a>
          </div>
        </div>

        <header
          className={`hidden lg:block border-b border-border bg-background transition-all duration-300 ease-in-out ${
            scrolled ? "shadow-md" : ""
          }`}
        >
          <div className="mx-auto px-18">
            <div className="flex justify-between items-center h-20">
              <Link
                href="/"
                className="flex justify-center items-center text-4xl font-serif text-foreground border-r-2 border-border pr-20 h-full"
              >
                MyJewel
              </Link>
              <div className="flex items-center">
                <nav className="hidden lg:flex space-x-8">
                  {navItems.map((item: NavItem, index: number) => (
                    <div key={index} className="relative">
                      {item.children ? (
                        <DropdownMenu item={item} isMobile={false} />
                      ) : (
                        <a href={item.url} className="text-foreground hover:text-muted-foreground">
                          {item.label}
                        </a>
                      )}
                    </div>
                  ))}
                </nav>
              </div>

              <button className="flex justify-center items-center text-4xl font-serif text-foreground border-l-2 border-border pl-10 h-full hover:text-muted-foreground">
                <SearchIcon />
              </button>
            </div>
          </div>
        </header>

        {/* Mobile Navbar with smooth shadow transition */}
        <header
          className={`lg:hidden border-b border-border bg-background transition-all duration-300 ease-in-out ${
            scrolled ? "shadow-md" : ""
          }`}
        >
          <div className="flex items-center justify-between p-4">
            <div className="space-x-4">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="focus:outline-none text-foreground hover:text-muted-foreground"
              >
                <TbMenu2 size={24} />
              </button>
              <button className="focus:outline-none text-foreground hover:text-muted-foreground">
                <HiOutlineCalendarDays size={24} />
              </button>
            </div>

            <Link href="/" className="text-2xl font-serif text-foreground">
              MyJewel
            </Link>

            <div className="flex space-x-4">
              <a href="/wishlist" className="text-foreground hover:text-muted-foreground">
                <Heart size={20} />
              </a>
              <a href="/cart" className="text-foreground hover:text-muted-foreground">
                <ShoppingBag size={20} />
              </a>
              <button className="cursor-pointer focus:outline-none text-foreground hover:text-muted-foreground">
                <SearchIcon size={20} />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="fixed inset-0 bg-background z-50 overflow-y-auto">
              <div className="p-4">
                <div className="flex justify-between items-center mb-8">
                  <Link href="/" className="text-2xl font-serif text-foreground">
                    MyJewel
                  </Link>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-foreground hover:text-muted-foreground"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="flex mb-8">
                  <a
                    href="/book"
                    className="text-sm border border-border px-4 py-2 w-full text-center text-foreground hover:bg-muted hover:text-muted-foreground"
                  >
                    BOOK AN APPOINTMENT
                  </a>
                </div>

                <nav className="space-y-6">
                  {navItems.map((item, index) => (
                    <div key={index} className="py-2">
                      {item.children ? (
                        <DropdownMenu item={item} isMobile={true} />
                      ) : (
                        <a
                          href={item.url}
                          className="block text-foreground hover:text-muted-foreground"
                        >
                          {item.label}
                        </a>
                      )}
                    </div>
                  ))}
                </nav>
              </div>
            </div>
          )}
        </header>
      </div>

      <div
        className={`h-0 transition-all duration-300 ${
          scrolled && !showAnnouncement ? "lg:h-20" : ""
        }`}
      ></div>
    </>
  );
};

export default Navbar;
