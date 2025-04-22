"use client";
import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag, Heart, User } from "lucide-react";
import Link from "next/link";
import { DropdownMenu } from "@/components/ui/dropdown-menu";

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

      // Main navbar stickiness
      setScrolled(currentScrollY > 10);

      // Announcement bar visibility
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
      {/* Sticky container for both announcement and navbar */}
      <div className="sticky top-0 z-50 w-full">
        {/* Announcement bar with transition */}
        <div
          className={`bg-white py-1 text-center text-sm overflow-hidden transition-all duration-300 ease-in-out `}
        >
          <p className="flex justify-center items-center">
            <span className="mx-2">•</span>
            <span>Exclusive Collection Launch: Discover Timeless Elegance Today</span>
            <span className="mx-2">•</span>
          </p>
        </div>

        {/* Desktop Navbar with smooth shadow transition */}
        <header
          className={`hidden lg:block border-b bg-white transition-all duration-300 ease-in-out ${
            scrolled ? "shadow-md " : ""
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-20">
              <div className="flex items-center">
                <Link href="/" className="text-2xl font-serif mr-10">
                  MyJewel
                </Link>
                <nav className="hidden lg:flex space-x-8">
                  {navItems.map((item, index) => (
                    <div key={index} className="relative">
                      {item.children ? (
                        <DropdownMenu item={item} isMobile={false} />
                      ) : (
                        <a href={item.url} className="hover:text-gray-600">
                          {item.label}
                        </a>
                      )}
                    </div>
                  ))}
                </nav>
              </div>

              <div className="flex items-center space-x-4">
                <a href="/book" className="text-sm border border-black px-4 py-2">
                  BOOK AN APPOINTMENT
                </a>
                <div className="flex items-center space-x-4 ml-4">
                  <a href="/account">
                    <User size={20} />
                  </a>
                  <a href="/wishlist">
                    <Heart size={20} />
                  </a>
                  <a href="/cart">
                    <ShoppingBag size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Mobile Navbar with smooth shadow transition */}
        <header
          className={`lg:hidden border-b bg-white transition-all duration-300 ease-in-out ${
            scrolled ? "shadow-md" : ""
          }`}
        >
          <div className="flex items-center justify-between p-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="focus:outline-none"
            >
              <Menu size={24} />
            </button>

            <Link href="/" className="text-2xl font-serif">
              MyJewel
            </Link>

            <div className="flex space-x-4">
              <a href="/wishlist">
                <Heart size={20} />
              </a>
              <a href="/cart">
                <ShoppingBag size={20} />
              </a>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
              <div className="p-4">
                <div className="flex justify-between items-center mb-8">
                  <Link href="/" className="text-2xl font-serif">
                    MyJewel
                  </Link>
                  <button onClick={() => setIsMobileMenuOpen(false)}>
                    <X size={24} />
                  </button>
                </div>

                <div className="flex mb-8">
                  <a
                    href="/book"
                    className="text-sm border border-black px-4 py-2 w-full text-center"
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
                        <a href={item.url} className="block">
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

      {/* Spacer to ensure content starts below the sticky navbar */}
      <div
        className={`h-0 transition-all duration-300 ${
          scrolled && !showAnnouncement ? "lg:h-20" : ""
        }`}
      ></div>
    </>
  );
};

export default Navbar;
