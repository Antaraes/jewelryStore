"use client";
import { FooterLinkSection } from "@/components/footer/FooterLinkSection";
import { NewsletterForm } from "@/components/footer/NewSeltter";
import { PaymentMethods } from "@/components/footer/PaymentMethod";
import React from "react";

interface FooterProps {
  linkGroups: FooterLinkGroup[];
  copyrightText: string;
  socialLinks: {
    platform: string;
    href: string;
  }[];
}

const Footer: React.FC<FooterProps> = ({ linkGroups, copyrightText, socialLinks }) => {
  const handleNewsletterSubmit = (email: string) => {
    // In a real app, this would be an API call
    console.log(
      `Sending newsletter subscription to ${process.env.EMAIL_ADDRESS} for email: ${email}`
    );
    alert(`Thank you! Your subscription has been processed for ${email}`);
  };

  return (
    <footer className="border-t border-gray-200 bg-[#F8F8F8]  py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {linkGroups.map((group, index) => (
            <FooterLinkSection key={index} linkGroup={group} />
          ))}

          <div className="md:col-span-2 lg:col-span-1">
            <h2 className="mb-4 font-medium text-gray-800">Let&#39;s Keep In Touch</h2>
            <NewsletterForm onSubmit={handleNewsletterSubmit} />
            <PaymentMethods title="Payment Methods" />
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-6">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="mb-4 text-sm text-gray-600 md:mb-0">{copyrightText}</p>
            <div className="flex space-x-6">
              <a
                href="/terms"
                className="text-sm text-gray-600 hover:text-gray-800 hover:underline"
              >
                Terms & Conditions
              </a>
              <a
                href="/privacy"
                className="text-sm text-gray-600 hover:text-gray-800 hover:underline"
              >
                Privacy Policy
              </a>
              <a
                href="/sitemap"
                className="text-sm text-gray-600 hover:text-gray-800 hover:underline"
              >
                Site Map
              </a>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    aria-label={link.platform}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    {link.platform === "facebook" ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
